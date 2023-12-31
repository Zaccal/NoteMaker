import { MouseEventHandler } from 'react'
import { ListItem, ListItemText } from '@mui/material'

interface INoteCard {
    title: string
    description?: string
    timeCreate: string
    onClick?: MouseEventHandler<HTMLLIElement>
}

const NoteCard = ({ title, description, timeCreate, onClick }: INoteCard) => {
    return (
        <ListItem
            onClick={onClick}
            alignItems="flex-start"
            className="border-b border-base cursor-pointer !py-5 hover:bg-backgroundAccent transition-all"
        >
            <ListItemText
                primary={
                    <div className="flex justify-between items-center">
                        <span className="text-xl">{title}</span>
                        <span className="text-md">{timeCreate}</span>
                    </div>
                }
                secondary={
                    description ? (
                        <span className="text-lg pt-3 text-gray-300">
                            {description}
                        </span>
                    ) : undefined
                }
            />
        </ListItem>
    )
}

export default NoteCard
