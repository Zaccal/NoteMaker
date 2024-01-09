import { Container, Divider, IconButton } from '@mui/material'
import SettingOption from '../components/SettingOption/SettingOption'
import useTypedSelector from '../hook/useTypedSelector'
import useActions from '../hook/useActions'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useThemeContext } from '../theme/ThemeContextProvider'

const Settings = () => {
    const { SettingsReducer } = useTypedSelector(state => state)
    const { editSettings } = useActions()
    const { toggleColorMode } = useThemeContext()

    return (
        <Container maxWidth="xl">
            <h1 className="text-4xl">Settings</h1>
            <Divider className="dark:bg-white !my-3" />
            <div className="Settings_container_options">
                <SettingOption
                    text="Don't ask anymore window"
                    checked={SettingsReducer.isAlwaysOpenEnsureDiolog}
                    onChange={(_, checked) => {
                        editSettings({
                            isAlwaysOpenEnsureDiolog: checked,
                        })
                    }}
                />
                <SettingOption
                    text="Theme system"
                    customInput={
                        <IconButton onClick={toggleColorMode} color="inherit">
                            {SettingsReducer.theme === 'dark' ? (
                                <Brightness4Icon />
                            ) : (
                                <Brightness7Icon />
                            )}
                        </IconButton>
                    }
                />
            </div>
        </Container>
    )
}

export default Settings
