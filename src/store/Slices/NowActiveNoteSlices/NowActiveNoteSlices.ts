import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { INote } from '../../../interfaces/NoteInterface'

const emptyNote: INote = {
    content: '',
    id: -1,
    name: '',
    timeCreated: '',
}

interface IRootLocalStorage {
    NoteReducer: string
}

const initialState: INote = emptyNote

const NowActiveNoteSlices = createSlice({
    name: 'NowActiveNoteSlices',
    initialState,
    reducers: {
        toggle: (state, action: PayloadAction<INote>) => {
            return action.payload
        },
        clear: state => {
            return emptyNote
        },
    },
})

export const { actions, reducer } = NowActiveNoteSlices
