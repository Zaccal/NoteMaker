import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { INote } from '../../../interfaces/NoteInterface'

interface INoteEditData {
    id: number
    content: Partial<INote>
}

const date = new Date()

const initialState: INote[] = [
    {
        id: 0,
        name: 'Instruction',
        timeCreated: `${date.getHours()}:${date.getMinutes()}`,
        content: '# ***Hello World***',
    },
]

const NoteSlice = createSlice({
    name: 'NoteSlice',
    initialState,
    reducers: {
        create: (state, action: PayloadAction<INote>) => {
            const newNote = action.payload
            if (!state.some(noteData => noteData.id === newNote.id)) {
                state.push(newNote)
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            const noteID = action.payload
            if (noteID !== -1)
                return state.filter(noteData => noteData.id !== noteID)
        },
        edit: (state, action: PayloadAction<INoteEditData>) => {
            const editData = action.payload
            return state.map(noteData => {
                if (noteData.id === editData.id) {
                    return { ...noteData, ...editData.content }
                }

                return noteData
            })
        },
    },
})

export const { actions, reducer } = NoteSlice
