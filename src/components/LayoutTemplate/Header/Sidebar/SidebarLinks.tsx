import { ReactElement } from 'react'
import TextSnippetRoundedIcon from '@mui/icons-material/TextSnippetRounded'
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'

export interface ISidebarLinks {
    to: string
    id: number
    title: string
    icon: ReactElement
}

export const links: ISidebarLinks[] = [
    {
        to: '/',
        id: 0,
        title: 'Notes',
        icon: <TextSnippetRoundedIcon />,
    },
    {
        to: '/todos',
        id: 1,
        title: 'Todos',
        icon: <FormatListBulletedRoundedIcon />,
    },
    {
        to: '/trash',
        id: 2,
        title: 'trash',
        icon: <DeleteRoundedIcon />,
    },
    {
        to: '/settings',
        id: 3,
        title: 'settings',
        icon: <SettingsRoundedIcon />,
    },
]
