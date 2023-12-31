import {
    Checkbox,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import { MouseEventHandler, useState } from 'react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import useActions from '../../hook/useActions'
import DiologEnsureToDelete from '../Viewer/NoteBarTool/DiologEnsureToDelete/DiologEnsureToDelete'

interface IToDoTask {
    checked: boolean
    title: string
    onChange?: MouseEventHandler<HTMLDivElement>
    id: number
}

const ToDoTask = ({ checked, title, onChange, id }: IToDoTask) => {
    const { removeToDoTask } = useActions()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <ListItem
            secondaryAction={
                <IconButton onClick={() => setIsOpen(true)}>
                    <DeleteRoundedIcon className="hover:text-accent transition-colors" />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton onClick={onChange}>
                <ListItemIcon>
                    <Checkbox
                        className={checked ? 'CheckBoxChecked' : undefined}
                        checked={checked}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText
                    sx={{
                        textDecoration: checked ? 'line-through' : undefined,
                        color: checked ? '#808080' : undefined,
                    }}
                    primary={title}
                    className={checked ? 'SpanMute' : undefined}
                />
            </ListItemButton>
            <DiologEnsureToDelete
                isOpen={isOpen}
                noteName={title}
                setIsOpen={setIsOpen}
            />
        </ListItem>
    )
}

export default ToDoTask
