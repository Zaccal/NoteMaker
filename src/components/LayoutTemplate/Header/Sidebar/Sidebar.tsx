import { useEffect, useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { links } from './SidebarLinks'
import SidebarItem from './SidebarItem'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

const Sidebar = () => {
    const [isOpenBurger, setIsOpenBurger] = useState(false)
    const [rootContainer, setRootContainer] = useState(['left-[-100%]'])

    useEffect(() => {
        if (isOpenBurger) {
            setRootContainer(
                rootContainer.filter(
                    classElement => classElement !== 'left-[-100%]'
                )
            )
            setRootContainer(prev => [...prev, 'left-0'])
            return
        }

        setRootContainer(
            rootContainer.filter(classElement => classElement !== 'left-0')
        )
        setRootContainer(prev => [...prev, 'left-[-100%]'])
    }, [isOpenBurger])

    return (
        <Box className="flex flex-col relative justify-center items-center min-w-[64px] w-16 md:w-32">
            <IconButton
                onClick={() => setIsOpenBurger(!isOpenBurger)}
                aria-label="Burger open"
                className="w-full h-[64px] md:h-[81px] hover:!bg-backgroundPrimary !rounded-none"
            >
                {isOpenBurger ? (
                    <CloseRoundedIcon
                        fontSize="large"
                        className="text-accent"
                    />
                ) : (
                    <MenuRoundedIcon className="text-accent" fontSize="large" />
                )}
            </IconButton>
            <Box
                height={window.innerHeight - 51}
                className={`${rootContainer.join(
                    ' '
                )} w-full transition-all justify-center z-20 left-0 dark:bg-backgroundPrimary !bg-backgroundPrimary absolute top-full`}
            >
                {links.map(itemData => (
                    <SidebarItem
                        onClick={() => setIsOpenBurger(false)}
                        key={itemData.id}
                        {...itemData}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default Sidebar
