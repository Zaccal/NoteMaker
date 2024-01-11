import { Theme, createTheme } from '@mui/material'
import { ReactElement, createContext, useContext } from 'react'
import useColorTheme from '../hook/useColorTheme'

export interface IThemeContext {
    mode: 'light' | 'dark'
    toggleColorMode: () => void
    theme: Theme
}

export const ThemeContext = createContext<IThemeContext>({
    mode: 'dark',
    toggleColorMode() {},
    theme: createTheme(),
})

interface IThemeContextProvider {
    children: ReactElement
}

const ThemeContextProvider = ({ children }: IThemeContextProvider) => {
    const value = useColorTheme()

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    return useContext(ThemeContext)
}

export default ThemeContextProvider
