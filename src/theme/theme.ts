import { PaletteMode } from '@mui/material'

type Palette = {
    mode: 'dark' | 'light'
    palette: {
        primary: {
            main: string
            textContrast: string
        }
        secondary?: {
            main: string
            textContrast: string
        }
        background: {
            main: string
            paper?: string
        }
        text: {
            main: string
            mute: string
        }
        accent?: {
            main: string
            textContrast: string
        }
    }
}

// Dark mode palette
const darkModePalette = {
    primary: {
        main: '#316a25',
        textContrast: '#f4e8f7',
    },
    secondary: {
        main: '#11311c',
        textContrast: '#f4e8f7',
    },
    background: {
        main: '#0d050f',
    },
    text: {
        main: '#f4e8f7',
        mute: '#4e4e4e',
    },
    accent: {
        main: '#9ac14e',
        textContrast: '#0d050f',
    },
}

// Light mode palette
const lightModePalette = {
    primary: {
        main: '#a1da95',
        textContrast: '#140817',
    },
    secondary: {
        main: '#ceeed9',
        textContrast: '#140817',
    },
    background: {
        main: '#f8f0fa',
    },
    text: {
        main: '#140817',
        mute: '#4e4e4e',
    },
    accent: {
        main: '#8bb13e',
        textContrast: '#140817',
    },
}

// Theme objects
let themeDarkMode: Palette = {
    mode: 'dark',
    palette: darkModePalette,
}

let themeLightMode: Palette = {
    mode: 'light',
    palette: lightModePalette,
}

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        ...(mode === 'light' ? themeLightMode : themeDarkMode),
    },
})
