import {
    Card,
    CardActions,
    CardContent,
    IconButton,
    Typography,
} from '@mui/material'
import { INote } from '../../interfaces/NoteInterface'
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded'
import useActions from '../../hook/useActions'
import DiologEnsureToDelete from '../Viewer/NoteBarTool/DiologEnsureToDelete/DiologEnsureToDelete'
import { useState } from 'react'
import useTypedSelector from '../../hook/useTypedSelector'
import { getFormateTime } from '../../utils/utils'
import ModalMarkdown from '../ModalMarkdown/ModalMarkdown'

const NoteDeletedCard = ({ content, id, name, timeCreated }: INote) => {
    const { SettingsReducer } = useTypedSelector(state => state)
    const { removeNoteFromTrash, create } = useActions()
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState(false)

    const handleToRenewNoteFromTrash = () => {
        create({
            name,
            content,
            id,
            timeCreated,
        })

        removeNoteFromTrash(id)
    }

    const handleToDeleteNoteFromTrash = () => {
        if (SettingsReducer.isAlwaysOpenEnsureDiolog) {
            removeNoteFromTrash(id)
        } else {
            setIsOpen(true)
        }
    }

    return (
        <>
            <Card sx={{ maxWidth: 275 }} className="!bg-backgroundPrimary">
                <CardContent>
                    <Typography
                        color="text.mute"
                        sx={{ fontSize: 12 }}
                        gutterBottom
                    >
                        {getFormateTime(timeCreated)}
                    </Typography>
                    <Typography color="text.main" variant="h5" component="div">
                        {name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton
                        onClick={handleToRenewNoteFromTrash}
                        title="Renew note"
                    >
                        <ReplayRoundedIcon className="hover:text-accent transition-colors" />
                    </IconButton>
                    <IconButton
                        onClick={() => setIsOpenModal(true)}
                        title="View note"
                    >
                        <RemoveRedEyeRoundedIcon className="hover:text-accent transition-colors" />
                    </IconButton>
                    <IconButton
                        onClick={handleToDeleteNoteFromTrash}
                        title="Delete note"
                    >
                        <DeleteRoundedIcon className="hover:text-accent transition-colors" />
                    </IconButton>
                </CardActions>
            </Card>
            <DiologEnsureToDelete
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                nameObjectToDelete={name}
                onAgree={() => removeNoteFromTrash(id)}
            />
            <ModalMarkdown
                open={isOpenModal}
                onClose={() => setIsOpenModal(false)}
                content={content}
            />
        </>
    )
}

export default NoteDeletedCard
