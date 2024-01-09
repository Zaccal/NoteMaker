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
import useTypedSelector from '../../../../hook/useTypedSelector'
import useActions from '../../../../hook/useActions'

type TypeObjectToDelete = 'note' | 'task'

interface IDiologEnsureToDelete {
    nameObjectToDelete: string
    isOpen: boolean
    setIsOpen: TypeSetState<boolean>
    onAgree?: () => void
    onDisagree?: () => void
    typeObjectToDelete?: TypeObjectToDelete
}

const DiologEnsureToDelete = ({
    nameObjectToDelete,
    typeObjectToDelete = 'note',
    isOpen,
    setIsOpen,
    onAgree,
    onDisagree,
}: IDiologEnsureToDelete) => {
    const { SettingsReducer } = useTypedSelector(state => state)
    const { editSettings } = useActions()

    const handleClose = (agree: boolean) => {
        setIsOpen(false)
        if (onAgree && agree) {
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
                    paper: 'dark:!bg-backgroundAccent !bg-background',
                }}
            >
                <DialogTitle id="alert-dialog-title">
                    {`Are you sure to delete "${nameObjectToDelete}" ${typeObjectToDelete}?`}
                </DialogTitle>
                <DialogContent>
                    <FormControlLabel
                        required
                        control={
                            <Checkbox
                                className={
                                    SettingsReducer.isAlwaysOpenEnsureDiolog
                                        ? 'CheckBoxChecked'
                                        : undefined
                                }
                                checked={
                                    SettingsReducer.isAlwaysOpenEnsureDiolog
                                }
                                onChange={() =>
                                    editSettings({
                                        isAlwaysOpenEnsureDiolog:
                                            !SettingsReducer.isAlwaysOpenEnsureDiolog,
                                    })
                                }
                            />
                        }
                        label={"Don't ask anymore"}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        className="!text-green-500"
                        onClick={() => handleClose(false)}
                    >
                        Disagree
                    </Button>
                    <Button
                        className="!text-red-500"
                        onClick={() => handleClose(true)}
                        autoFocus
                    >
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default DiologEnsureToDelete
