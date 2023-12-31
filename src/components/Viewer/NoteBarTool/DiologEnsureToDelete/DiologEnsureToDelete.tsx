import {
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControlLabel,
} from '@mui/material'
import { TypeSetState } from '../../../../types/types'
import { useState } from 'react'
import useTypedSelector from '../../../../hook/useTypedSelector'
import useActions from '../../../../hook/useActions'

interface IDiologEnsureToDelete {
    noteName: string
    isOpen: boolean
    setIsOpen: TypeSetState<boolean>
    onAgree?: () => void
    onDisagree?: () => void
}

const DiologEnsureToDelete = ({
    noteName,
    isOpen,
    setIsOpen,
    onAgree,
    onDisagree,
}: IDiologEnsureToDelete) => {
    const { SettingsReducer } = useTypedSelector(state => state)
    const { editSettings } = useActions()
    const [isAskDiolog, setIsAskDiolog] = useState(
        SettingsReducer.isAlwaysOpenEnsureDiologToDeleteNote
    )
    const handleClose = (agree: boolean) => {
        setIsOpen(false)
        if (onAgree && agree) {
            editSettings({
                isAlwaysOpenEnsureDiologToDeleteNote: isAskDiolog,
            })
            onAgree()
        } else if (onDisagree && !agree) {
            onDisagree()
        }
    }

    return (
        <>
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                classes={{
                    paper: '!bg-backgroundAccent',
                }}
            >
                <DialogTitle id="alert-dialog-title">
                    {`Are you sure to delete "${noteName}" note?`}
                </DialogTitle>
                <DialogContent>
                    <FormControlLabel
                        required
                        control={
                            <Checkbox
                                className={
                                    isAskDiolog ? 'CheckBoxChecked' : undefined
                                }
                                checked={!isAskDiolog}
                                onChange={() => setIsAskDiolog(prev => !prev)}
                            />
                        }
                        label={"Don't ask anymore"}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleClose(false)}>Disagree</Button>
                    <Button onClick={() => handleClose(true)} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default DiologEnsureToDelete
