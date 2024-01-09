import { Container, Divider, Stack } from '@mui/material'
import NoteDeletedCard from '../components/NoteDeletedCard/NoteDeletedCard'
import useTypedSelector from '../hook/useTypedSelector'

const Trash = () => {
    const { TrashReducer } = useTypedSelector(state => state)

    return (
        <Container maxWidth="xl" className="pt-4">
            <h1 className="text-4xl">Trash</h1>
            <Divider className="dark:bg-white !my-3" />
            <Stack direction="row" alignItems="center" spacing={1}>
                {TrashReducer.map(noteData => (
                    <NoteDeletedCard key={noteData.id} {...noteData} />
                ))}
            </Stack>
        </Container>
    )
}

export default Trash
