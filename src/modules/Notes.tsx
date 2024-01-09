import { List } from '@mui/material'
import Viewer from '../components/Viewer/Viewer'
import NoteCard from '../components/NoteCard/NoteCard'
import useTypedSelector from '../hook/useTypedSelector'
import { clearMarkdown, lengthSentence } from '../utils/utils'
import useActions from '../hook/useActions'
import { useEffect, useState } from 'react'
import AddNewNoteModal from '../components/Viewer/AddNewNoteModal/AddNewNoteModal'
import AddFab from '../components/AddFab/AddFab'

const Notes = () => {
    const { NoteReducer, nowActiveNoteReducer } = useTypedSelector(
        state => state
    )
    const { toggle } = useActions()
    const [isOpenAddNoteModal, setIsOpenAddNoteModal] = useState(false)

    useEffect(() => {
        const noteActive = NoteReducer.find(
            noteData => noteData.id === nowActiveNoteReducer.id
        )

        if (noteActive) {
            toggle(noteActive)
        }
    }, [NoteReducer])

    return (
        <Viewer>
            <div className="relative h-full">
                <List className="!py-0">
                    {NoteReducer.map(noteData => (
                        <NoteCard
                            key={noteData.id}
                            onClick={() => toggle(noteData)}
                            content={clearMarkdown(
                                lengthSentence(noteData.content, 150)
                            )}
                            timeCreated={noteData.timeCreated}
                            name={noteData.name}
                            id={noteData.id}
                        />
                    ))}
                </List>
                <AddFab
                    bottom={18}
                    onClick={() => setIsOpenAddNoteModal(true)}
                />
            </div>
            <AddNewNoteModal
                isOpen={isOpenAddNoteModal}
                onClose={() => setIsOpenAddNoteModal(false)}
            />
        </Viewer>
    )
}

export default Notes
