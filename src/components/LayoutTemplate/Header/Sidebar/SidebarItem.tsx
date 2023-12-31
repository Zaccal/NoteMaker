import { MouseEventHandler } from 'react'
import { ISidebarLinks } from './SidebarLinks'
import { Box } from '@mui/material'
import { NavLink } from 'react-router-dom'

interface ISidebarItem extends Omit<ISidebarLinks, 'id'> {
    onClick?: MouseEventHandler<HTMLAnchorElement>
}

const SidebarItem = ({ icon, title, to, onClick }: ISidebarItem) => {
    return (
        <NavLink
            onClick={onClick}
            to={to}
            className={({ isActive }) =>
                isActive ? 'bg-accent w-full block' : 'w-full block'
            }
        >
            <Box
                className="w-full hover:bg-accent flex items-center justify-center py-5 px-2 md:py-7 md:px-4 transition-colors"
                title={title}
            >
                {icon}
            </Box>
        </NavLink>
    )
}

export default SidebarItem
