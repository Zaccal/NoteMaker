import { MouseEventHandler, useState } from 'react'
import { IconButton, ListItem, ListItemText } from '@mui/material'
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded'
import { getFormateTime } from '../../utils/utils'
import useActions from '../../hook/useActions'
import useTypedSelector from '../../hook/useTypedSelector'
import DiologEnsureToDelete from '../Viewer/NoteBarTool/DiologEnsureToDelete/DiologEnsureToDelete'
import ModalMarkdown from '../ModalMarkdown/ModalMarkdown'

interface INoteCard {
    name: string
    content: string
    timeCreated: string
    onClick?: MouseEventHandler<HTMLLIElement>
    type?: 'Deleted' | 'defualt'
    id: number
}

const NoteCard = ({
    name,
    content,
    timeCreated,
    id,
    onClick,
    type = 'defualt',
}: INoteCard) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const { create, removeNoteFromTrash } = useActions()
    const { SettingsReducer } = useTypedSelector(state => state)

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
        <ListItem
            onClick={onClick}
            alignItems="flex-start"
            className="border-b border-base cursor-pointer !py-5 hover:bg-backgroundPrimary transition-all"
        >
            <ListItemText
                primary={
                    <div className="flex justify-between items-center">
                        <span className="text-xl">{name}</span>
                        <div className="flex items-center gap-2">
                            <span className="text-md">
                                {getFormateTime(timeCreated)}
                            </span>
                            {type === 'Deleted' && (
                                <>
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
                                </>
                            )}
                        </div>
                    </div>
                }
                secondary={
                    content && type === 'Deleted' ? (
                        <span className="text-lg pt-3 text-gray-300">
                            {content}
                        </span>
                    ) : undefined
                }
            />
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
        </ListItem>
    )
}

export default NoteCard
