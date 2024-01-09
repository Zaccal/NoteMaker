import { combineReducers } from '@reduxjs/toolkit'
import { reducer as NoteReducer } from './Slices/NotesSlices/NoteSlices'
import { reducer as nowActiveNoteReducer } from './Slices/NowActiveNoteSlices/NowActiveNoteSlices'
import { reducer as SettingsReducer } from './Slices/SettingsSlices/SettingsSlices'
import { reducer as ToDosReducer } from './Slices/ToDosSlice/ToDosSlice'
import { reducer as TrashReducer } from './Slices/TrashSlices/TrashSlices'

export const rootReducers = combineReducers({
    NoteReducer,
    nowActiveNoteReducer,
    SettingsReducer,
    ToDosReducer,
    TrashReducer,
})
