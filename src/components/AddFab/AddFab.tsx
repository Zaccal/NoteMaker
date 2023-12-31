import { AddRounded } from '@mui/icons-material'
import { Fab } from '@mui/material'
import { MouseEventHandler } from 'react'

interface iAddFab {
    onClick?: MouseEventHandler<HTMLButtonElement>
    bottom?: number
}

const AddFab = ({ onClick, bottom }: iAddFab) => {
    return (
        <Fab
            onClick={onClick}
            sx={{
                position: 'absolute',
                bottom: `${bottom !== undefined ? bottom : 10}%`,
            }}
            color="success"
            className="absolute translate-x-1/2 trnaslate-y-1/2 right-1/2"
        >
            <AddRounded />
        </Fab>
    )
}

export default AddFab
