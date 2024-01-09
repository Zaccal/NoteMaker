import { Checkbox, Stack, Switch } from '@mui/material'
import { ChangeEvent, ReactElement } from 'react'

interface ISettingOption<T = HTMLInputElement> {
    checked?: boolean
    onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void
    typeInput?: 'checkbox' | 'switch'
    text: string
    customInput?: ReactElement<T>
}

const SettingOption = ({
    checked,
    onChange,
    typeInput = 'switch',
    text,
    customInput,
}: ISettingOption) => {
    const getInput = () => {
        switch (typeInput) {
            case 'checkbox':
                return (
                    <Checkbox
                        className={checked ? 'CheckBoxChecked' : ''}
                        checked={checked}
                        onChange={onChange}
                    />
                )
            case 'switch':
                return <Switch checked={checked} onChange={onChange} />
        }
    }

    return (
        <Stack
            className="w-full py-3"
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            direction="row"
        >
            <p className="uppercase text-md">{text}</p>
            {customInput ? customInput : getInput()}
        </Stack>
    )
}

export default SettingOption
