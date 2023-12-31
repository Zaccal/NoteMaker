import { createTheme } from '@mui/material/styles'

let themeDarkMode = createTheme({
    palette: {
        text: {
            main: '#f4e8f7',
        },
        background: {
            main: '#0d050f',
        },
        primary: {
            main: '#316a25',
            textContrast: '#f4e8f7',
        },
        secondary: {
            main: '#11311c',
            textContrast: '#f4e8f7',
        },
        accent: {
            main: '#9ac14e',
            textContrast: '#0d050f',
        },
    },
})

let themeLightMode = createTheme({
    palette: {
        text: {
            main: '#140817',
        },
        background: {
            main: '#f8f0fa',
        },
        primary: {
            main: '#a1da95',
            textContrast: '#140817',
        },
        secondary: {
            main: '#ceeed9',
            textContrast: '#140817',
        },
        accent: {
            main: '#8bb13e',
            textContrast: '#140817',
        },
    },
})

themeDarkMode = createTheme(themeDarkMode, {
    palette: {
        info: {
            main: themeDarkMode.palette.secondary.main,
        },
    },
})

themeLightMode = createTheme(themeLightMode, {
    palette: {
        info: {
            main: themeLightMode.palette.secondary.main,
        },
    },
})

export { themeDarkMode, themeLightMode }
