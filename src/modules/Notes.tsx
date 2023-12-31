import { List } from '@mui/material'
import Viewer from '../components/Viewer/Viewer'
import NoteCard from '../components/NoteCard/NoteCard'
import useTypedSelector from '../hook/useTypedSelector'
import { clearMarkdown, lengthSentence } from '../utils/utils'
import useActions from '../hook/useActions'
import { useState } from 'react'
import AddNewNoteModal from '../components/Viewer/AddNewNoteModal/AddNewNoteModal'
import AddFab from '../components/AddFab/AddFab'

const Notes = () => {
    const notes = useTypedSelector(state => state.NoteReducer)
    const { toggle } = useActions()
    const [isOpenAddNoteModal, setIsOpenAddNoteModal] = useState(false)

    return (
        <Viewer>
            <div className="relative h-full">
                <List className="!py-0">
                    {notes.map(noteData => (
                        <NoteCard
                            key={noteData.id}
                            onClick={() => toggle(noteData)}
                            description={clearMarkdown(
                                lengthSentence(noteData.content, 150)
                            )}
                            timeCreate={noteData.timeCreated}
                            title={noteData.name}
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
