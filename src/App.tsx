import Routing from './Router/Routing'
import LayoutTemplate from './components/LayoutTemplate/Layout'
import { ThemeProvider } from '@mui/material/styles'
import { useThemeContext } from './theme/ThemeContextProvider'

function App() {
    const theme = useThemeContext()

    return (
        <ThemeProvider theme={theme.theme}>
            <LayoutTemplate>
                <Routing />
            </LayoutTemplate>
        </ThemeProvider>
    )
}

export default App
