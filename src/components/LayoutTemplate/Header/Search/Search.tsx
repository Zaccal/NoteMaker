import { Box, Typography, Modal, Input } from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import { useState } from 'react'
import useSearch from '../../../../hook/useSearch'
import NoteCard from '../../../NoteCard/NoteCard'
import useActions from '../../../../hook/useActions'
import { INote } from '../../../../interfaces/NoteInterface'

const Search = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const searchResults = useSearch(searchValue)
    const { toggle } = useActions()

    const openNoteCardHandler = (note: INote) => {
        toggle(note)
        setIsOpen(false)
    }

    return (
        <>
            <Box
                onClick={() => setIsOpen(true)}
                className="bg-background py-7 px-5 flex items-center gap-4 w-full max-w-[328px] cursor-pointer "
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
                    {searchResults.map(noteData => (
                        <NoteCard
                            onClick={() => openNoteCardHandler(noteData)}
                            key={noteData.id}
                            timeCreate={noteData.timeCreated}
                            title={noteData.name}
                        />
                    ))}
                </Box>
            </Modal>
        </>
    )
}

export default Search
