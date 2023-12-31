import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ISettings } from '../../../interfaces/SettingsInterface'

const initialState: ISettings = {
    isAlwaysOpenEnsureDiologToDeleteNote: true,
}

const SettingsSlices = createSlice({
    name: 'SettingsSlices',
    initialState,
    reducers: {
        editSettings: (state, action: PayloadAction<Partial<ISettings>>) => {
            const newData = action.payload

            return {
                ...state,
                ...newData,
            }
        },
    },
})

export const { actions, reducer } = SettingsSlices
