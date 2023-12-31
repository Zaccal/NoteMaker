import { Button, Modal, TextField } from '@mui/material'
import { useState } from 'react'
import useActions from '../../hook/useActions'
import { IInput } from '../../interfaces/InputToCreate'

interface IAddNewToDoTaskModal {
    isOpen: boolean
    onClose: () => void
}

const AddNewToDoTaskModal = ({ isOpen, onClose }: IAddNewToDoTaskModal) => {
    const [newTask, setNewTask] = useState('')
    const [Input, setInput] = useState<IInput>({
        label: 'Title',
        color: undefined,
    })
    const { addNewToDoTask } = useActions()

    const handlerAddNewTask = () => {
        if (newTask) {
            addNewToDoTask({
                title: newTask,
                checked: false,
                id: Date.now(),
            })
            onClose()
            setNewTask('')
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
                        setInput({
                            label: 'Title',
                            color: undefined,
                        })
                        setNewTask(event.target.value)
                    }}
                    onKeyUp={event =>
                        event.key === 'Enter' && handlerAddNewTask()
                    }
                    value={newTask}
                    autoFocus
                    focused
                    className="!w-full "
                    label={Input.label}
                    variant="outlined"
                    color={Input.color}
                />
                <Button
                    onClick={handlerAddNewTask}
                    className="!w-full !mt-2"
                    variant="contained"
                >
                    Done
                </Button>
            </div>
        </Modal>
    )
}

export default AddNewToDoTaskModal
