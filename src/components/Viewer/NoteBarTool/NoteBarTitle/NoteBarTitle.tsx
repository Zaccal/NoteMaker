import { useState, useEffect } from 'react'
import useActions from '../../../../hook/useActions'
import TextField from '@mui/material/TextField/TextField'

interface INoteBarTitle {
    idNote: number
    title: string
}

const NoteBarTitle = ({ idNote, title }: INoteBarTitle) => {
    const [isEditTitle, setIsEditTitle] = useState(false)
    const [newTitleValue, setNewTitleValue] = useState(title)
    const { edit } = useActions()

    const renameNoteHandler = () => {
        if (newTitleValue) {
            edit({
                content: {
                    name: newTitleValue,
                },
                id: idNote,
            })
            setIsEditTitle(false)
        }
    }

    useEffect(() => {
        setNewTitleValue(title)
    }, [title])

    return (
        <>
            {isEditTitle ? (
                <TextField
                    autoFocus
                    onKeyDown={event =>
                        event.key === 'Enter' ? renameNoteHandler() : undefined
                    }
                    onBlur={renameNoteHandler}
                    onChange={event => setNewTitleValue(event.target.value)}
                    value={newTitleValue}
                />
            ) : (
                <p
                    onClick={() => setIsEditTitle(true)}
                    className="text-text text-xl cursor-pointer"
                >
                    {newTitleValue}
                </p>
            )}
        </>
    )
}

export default NoteBarTitle
