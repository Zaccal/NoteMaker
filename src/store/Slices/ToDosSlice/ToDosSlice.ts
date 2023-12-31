import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IToDoTask } from '../../../interfaces/ToDoTaskInterface'

const initialState: IToDoTask[] = [
    {
        title: 'Buy bread',
        checked: true,
        id: 1,
    },
    {
        title: 'Clear home',
        checked: false,
        id: 2,
    },
    {
        title: 'Wash clothes',
        checked: false,
        id: 3,
    },
]

interface IPayLoadAction {
    content: Partial<IToDoTask>
    id: number
}

const ToDosSlice = createSlice({
    name: 'ToDosSlice',
    initialState,
    reducers: {
        editToDoTask: (state, action: PayloadAction<IPayLoadAction>) => {
            return state.map(todoTaskData =>
                todoTaskData.id === action.payload.id
                    ? { ...todoTaskData, ...action.payload.content }
                    : todoTaskData
            )
        },
        addNewToDoTask: (state, action: PayloadAction<IToDoTask>) => {
            return [...state, action.payload]
        },
        removeToDoTask: (state, action: PayloadAction<number>) => {
            return state.filter(taskData => taskData.id !== action.payload)
        },
    },
})

export const { actions, reducer } = ToDosSlice
