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
import useTypedSelector from '../../hook/useTypedSelector'

interface IToDoTask {
    checked: boolean
    title: string
    onChange?: MouseEventHandler<HTMLDivElement>
    id: number
}

const ToDoTask = ({ checked, title, onChange, id }: IToDoTask) => {
    const { SettingsReducer } = useTypedSelector(state => state)
    const { removeToDoTask } = useActions()
    const [isOpen, setIsOpen] = useState(false)

    const handleToDeleteDiolog = () => {
        if (!SettingsReducer.isAlwaysOpenEnsureDiolog) {
            setIsOpen(true)
        } else {
            removeToDoTask(id)
        }
    }

    return (
        <ListItem
            secondaryAction={
                <IconButton onClick={handleToDeleteDiolog}>
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
                onAgree={() => removeToDoTask(id)}
                isOpen={isOpen}
                nameObjectToDelete={title}
                typeObjectToDelete="task"
                setIsOpen={setIsOpen}
            />
        </ListItem>
    )
}

export default ToDoTask
