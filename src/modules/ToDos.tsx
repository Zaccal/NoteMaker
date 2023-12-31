import { Container, Divider, List } from '@mui/material'
import ToDoTask from '../components/ToDoTask/ToDoTask'
import { useState } from 'react'
import AddNewToDoTaskModal from '../components/AddNewToDoTaskModal/AddNewToDoTaskModal'
import AddFab from '../components/AddFab/AddFab'
import useTypedSelector from '../hook/useTypedSelector'
import useActions from '../hook/useActions'

const ToDos = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { ToDosReducer } = useTypedSelector(state => state)
    const { editToDoTask } = useActions()

    return (
        <Container maxWidth="lg">
            <h1 className="text-4xl">ToDo</h1>
            <Divider className="dark:bg-white !my-3" />
            <List
                sx={{
                    maxHeight: window.innerHeight - 200,
                }}
                className="w-full overflow-auto"
            >
                {ToDosReducer.map(taskData => (
                    <ToDoTask
                        {...taskData}
                        key={taskData.id}
                        onChange={() =>
                            editToDoTask({
                                content: {
                                    checked: !taskData.checked,
                                },
                                id: taskData.id,
                            })
                        }
                    />
                ))}
            </List>
            <AddFab onClick={() => setIsOpen(true)} />
            <AddNewToDoTaskModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </Container>
    )
}

export default ToDos
