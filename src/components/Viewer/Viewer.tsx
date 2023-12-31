import { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import { ReactElement } from 'react'
import NoteBarTool from './NoteBarTool/NoteBarTool'
import Markdown from 'react-markdown'
import EditNotePreview from './EditNotePreview/EditNotePreview'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import '../../css/codeTheme/dracula.css'
import '../../css/markdownTheme/MarkDownTheme.css'
import rehypeRaw from 'rehype-raw'
import useTypedSelector from '../../hook/useTypedSelector'
import useActions from '../../hook/useActions'
import MutePreview from './MutePreview/MutePreview'

interface IViewer {
    children: ReactElement | ReactElement[]
}

const Viewer = ({ children }: IViewer) => {
    const [editMode, setEditMode] = useState(false)
    const { nowActiveNoteReducer } = useTypedSelector(state => state)
    const { edit } = useActions()
    const [markdownValue, setMarkDownValue] = useState(
        nowActiveNoteReducer.content
    )

    const editContentNote = (value: string) => {
        if (nowActiveNoteReducer) {
            edit({
                id: nowActiveNoteReducer?.id,
                content: {
                    ...nowActiveNoteReducer,
                    content: value,
                },
            })
        }
    }

    useEffect(() => {
        setMarkDownValue(nowActiveNoteReducer.content)
    }, [nowActiveNoteReducer])

    useEffect(() => {
        editContentNote(markdownValue)
    }, [markdownValue])

    return (
        <Grid container gridRow={2} className="!h-full">
            <Grid item xs={6}>
                {children}
            </Grid>
            <Grid item xs={6}>
                {nowActiveNoteReducer.id === -1 && <MutePreview />}
                {nowActiveNoteReducer.id !== -1 && (
                    <div className="h-full">
                        {nowActiveNoteReducer.id !== -1 && (
                            <NoteBarTool
                                idNote={nowActiveNoteReducer.id}
                                title={nowActiveNoteReducer.name}
                                isEditMode={editMode}
                                setIsEditMode={setEditMode}
                            />
                        )}
                        {editMode ? (
                            <EditNotePreview
                                value={markdownValue}
                                setValue={setMarkDownValue}
                            />
                        ) : (
                            <Markdown
                                rehypePlugins={[
                                    rehypeHighlight,
                                    remarkGfm,
                                    rehypeRaw,
                                ]}
                                className="px-8 py-4 markdown bg-backgroundPrimary h-full"
                            >
                                {markdownValue || '### Nothing wrote yet'}
                            </Markdown>
                        )}
                    </div>
                )}
            </Grid>
        </Grid>
    )
}

export default Viewer
