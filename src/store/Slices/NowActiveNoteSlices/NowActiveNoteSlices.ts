import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { INote } from '../../../interfaces/NoteInterface'

const emptyNote: INote = {
    content: '',
    id: -1,
    name: '',
    timeCreated: '',
}

const initialState: INote = emptyNote

const NowActiveNoteSlices = createSlice({
    name: 'NowActiveNoteSlices',
    initialState,
    reducers: {
        toggle: (_, action: PayloadAction<INote>) => {
            return action.payload
        },
        clear: () => {
            return emptyNote
        },
    },
})

export const { actions, reducer } = NowActiveNoteSlices
