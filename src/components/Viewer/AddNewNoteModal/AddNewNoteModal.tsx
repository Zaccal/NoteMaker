import { useState } from 'react'
import { Modal, TextField, Button } from '@mui/material'
import useActions from '../../../hook/useActions'
import { IInput } from '../../../interfaces/InputToCreate'

interface IAddNewNoteModal {
    isOpen: boolean
    onClose: () => void
}

const itDate = new Date()

const AddNewNoteModal = ({ isOpen, onClose }: IAddNewNoteModal) => {
    const { create } = useActions()
    const [newNoteName, setNewNoteName] = useState('')
    const [Input, setInput] = useState<IInput>({
        label: 'Name',
        color: undefined,
    })

    const handleCreateNote = () => {
        if (newNoteName) {
            onClose()
            setNewNoteName('')
            create({
                name: newNoteName,
                content: '',
                id: Date.now(),
                timeCreated: `${itDate.getHours()}:${itDate.getMinutes()}`,
            })
        } else {
            setInput({
                label: 'Input must not be empty!',
                color: 'error',
            })
        }
    }

    return (
        <Modal
            className="flex justify-center items-center"
            open={isOpen}
            onClose={onClose}
        >
            <div className="px-2 py-2 h-auto max-w-[320px] modal_container">
                <TextField
                    onChange={event => {
                        setNewNoteName(event.target.value)
                        setInput({
                            label: 'Name',
                            color: undefined,
                        })
                    }}
                    value={newNoteName}
                    onKeyUp={event =>
                        event.key === 'Enter' && handleCreateNote()
                    }
                    autoFocus
                    focused
                    className="!w-full "
                    label={Input.label}
                    variant="outlined"
                    color={Input.color}
                />
                <Button
                    onClick={handleCreateNote}
                    className="!w-full !mt-2"
                    variant="contained"
                >
                    Done
                </Button>
            </div>
        </Modal>
    )
}

export default AddNewNoteModal
