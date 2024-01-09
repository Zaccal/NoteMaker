import IconButton from '@mui/material/IconButton'
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import { TypeSetState } from '../../../types/types'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import useActions from '../../../hook/useActions'
import NoteBarTitle from './NoteBarTitle/NoteBarTitle'
import { useState } from 'react'
import DiologEnsureToDelete from './DiologEnsureToDelete/DiologEnsureToDelete'
import useTypedSelector from '../../../hook/useTypedSelector'

interface INoteBarTool {
    setIsEditMode: TypeSetState<boolean>
    isEditMode: boolean
    title?: string
    idNote: number
}

const NoteBarTool = ({
    setIsEditMode,
    isEditMode,
    title,
    idNote,
}: INoteBarTool) => {
    const { remove, clear, shiftToTrash } = useActions()
    const [isOpenDiolog, setIsOpenDiolog] = useState(false)
    const { nowActiveNoteReducer, SettingsReducer } = useTypedSelector(
        state => state
    )

    const removeNoteHandler = () => {
        shiftToTrash(nowActiveNoteReducer)
        remove(idNote)
        clear()
    }

    const handlerClickDeleteIcon = () => {
        if (!SettingsReducer.isAlwaysOpenEnsureDiolog) {
            setIsOpenDiolog(true)
        } else {
            removeNoteHandler()
        }
    }

    return (
        <div
            style={{
                background:
                    SettingsReducer.theme === 'dark'
                        ? 'var(--backgroundAccent)'
                        : 'var(--lt-color-background-dark)',
            }}
            className="flex items-center border-b border-backgroundPrimary z-20 px-4 py-3"
        >
            <IconButton
                onClick={() => setIsEditMode(prev => !prev)}
                className="icon-button_hover !rounded-sm"
            >
                {isEditMode ? <VisibilityRoundedIcon /> : <EditRoundedIcon />}
            </IconButton>
            <IconButton
                onClick={handlerClickDeleteIcon}
                className="icon-button_hover !mr-4 !rounded-sm"
            >
                <DeleteRoundedIcon />
            </IconButton>
            <NoteBarTitle title={title || ''} idNote={idNote} />
            <DiologEnsureToDelete
                isOpen={isOpenDiolog}
                setIsOpen={setIsOpenDiolog}
                nameObjectToDelete={nowActiveNoteReducer.name}
                onAgree={removeNoteHandler}
            />
        </div>
    )
}

export default NoteBarTool
