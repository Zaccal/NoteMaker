import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { actions as noteActions } from '../store/Slices/NotesSlices/NoteSlices'
import { actions as nowActiveNoteActions } from '../store/Slices/NowActiveNoteSlices/NowActiveNoteSlices'
import { actions as settingsActions } from '../store/Slices/SettingsSlices/SettingsSlices'
import { actions as todosActions } from '../store/Slices/ToDosSlice/ToDosSlice'
import { actions as trashActions } from '../store/Slices/TrashSlices/TrashSlices'

const rootActions = {
    ...noteActions,
    ...nowActiveNoteActions,
    ...settingsActions,
    ...todosActions,
    ...trashActions,
}

const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}

export default useActions
