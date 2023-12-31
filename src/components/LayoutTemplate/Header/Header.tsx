import { AppBar, Toolbar } from '@mui/material'
import Sidebar from './Sidebar/Sidebar'
import Search from './Search/Search'

const Header = () => {
    return (
        <AppBar position="relative" className="!bg-backgroundPrimary z-10">
            <Toolbar variant="regular" className="!px-0">
                <Sidebar />
                <Search />
            </Toolbar>
        </AppBar>
    )
}

export default Header
