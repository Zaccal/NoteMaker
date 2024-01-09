import { Box, Typography, Modal, Input } from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import { useState } from 'react'
import useSearch from '../../../../hook/useSearch'
import NoteCard from '../../../NoteCard/NoteCard'
import useActions from '../../../../hook/useActions'
import { INote } from '../../../../interfaces/NoteInterface'
import { useLocation } from 'react-router-dom'
import { IToDoTask } from '../../../../interfaces/ToDoTaskInterface'
import ToDoTask from '../../../ToDoTask/ToDoTask'
import { getTypeSearchPlaceByLinkValue } from '../../../../utils/utils'

const Search = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const location = useLocation()
    const searchResults = useSearch(
        searchValue,
        getTypeSearchPlaceByLinkValue(location.pathname)
    )
    const { toggle, editToDoTask } = useActions()

    const openNoteCardHandler = (note: INote) => {
        toggle(note)
        setIsOpen(false)
    }

    const getComponentsOfResultsSearch = () => {
        switch (getTypeSearchPlaceByLinkValue(location.pathname)) {
            case 'note':
                return (searchResults as INote[]).map(noteData => (
                    <NoteCard
                        onClick={() => openNoteCardHandler(noteData)}
                        key={noteData.id}
                        {...noteData}
                    />
                ))
            case 'tasks':
                return (searchResults as IToDoTask[]).map(taskData => (
                    <ToDoTask
                        {...taskData}
                        key={taskData.id}
                        onChange={() => {
                            editToDoTask({
                                id: taskData.id,
                                content: {
                                    checked: !taskData.checked,
                                },
                            })
                        }}
                    />
                ))
            case 'trash':
                return (searchResults as INote[]).map(noteData => (
                    <NoteCard type="Deleted" key={noteData.id} {...noteData} />
                ))
            default:
                return (
                    <div className="flex justify-center items-center w-full h-[90%]">
                        <h1 className="text-3xl text-gray-600 uppercase block font-bold">
                            Here function search doesn't work
                        </h1>
                    </div>
                )
        }
    }

    return (
        <>
            <Box
                onClick={() => setIsOpen(true)}
                className="dark:bg-background py-7 px-5 flex items-center gap-4 w-full max-w-[328px] cursor-pointer "
            >
                <SearchRoundedIcon
                    fontSize="large"
                    className="text-text opacity-25"
                />
                <Typography fontSize={18} className="text-text opacity-25">
                    Search
                </Typography>
            </Box>
            <Modal
                className="flex justify-center items-center"
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <Box className="modal_container">
                    <Input
                        value={searchValue}
                        onChange={event => setSearchValue(event.target.value)}
                        autoFocus
                        placeholder="Search"
                        className="!text-white px-4 py-4 w-full bg-backgroundSecondary"
                        startAdornment={
                            <SearchRoundedIcon
                                fontSize="medium"
                                className="mr-5"
                            />
                        }
                    />
                    {getComponentsOfResultsSearch()}
                </Box>
            </Modal>
        </>
    )
}

export default Search
