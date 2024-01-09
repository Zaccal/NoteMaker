import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { INote } from '../../../interfaces/NoteInterface'

const initialState: INote[] = []

const TrashSlices = createSlice({
    name: 'TrashSlices',
    initialState,
    reducers: {
        clearTash: () => {
            return []
        },
        removeNoteFromTrash: (state, action: PayloadAction<number>) => {
            return state.filter(noteData => noteData.id !== action.payload)
        },
        shiftToTrash: (state, action: PayloadAction<INote>) => {
            return [...state, action.payload]
        },
    },
})

export const { actions, reducer } = TrashSlices
