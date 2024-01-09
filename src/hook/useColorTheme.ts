import { useMemo } from 'react'
import { IThemeContext } from '../theme/ThemeContextProvider'
import useActions from './useActions'
import useTypedSelector from './useTypedSelector'
import { createTheme } from '@mui/material'
import { getDesignTokens } from '../theme/theme'

const useColorTheme = (): IThemeContext => {
    const { SettingsReducer } = useTypedSelector(state => state)
    const { editSettings } = useActions()
    const toggleColorMode = () => {
        editSettings({
            theme: SettingsReducer.theme === 'dark' ? 'light' : 'dark',
        })

        if (SettingsReducer.theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    if (SettingsReducer.theme === 'dark') {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

    const modifiedTheme = useMemo(() => {
        return createTheme({
            ...getDesignTokens(SettingsReducer.theme),
        })
    }, [SettingsReducer.theme])

    return {
        mode: SettingsReducer.theme,
        theme: modifiedTheme,
        toggleColorMode,
    }
}

export default useColorTheme
