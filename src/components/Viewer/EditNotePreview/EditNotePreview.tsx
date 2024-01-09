// import { useRef } from 'react'
import { TypeSetState } from '../../../types/types'

interface IEditNotePreview<T = TypeSetState<string>> {
    value: string
    setValue: T
}

const EditNotePreview = ({ value, setValue }: IEditNotePreview) => {
    // const textareaRef = useRef<HTMLTextAreaElement>(null)
    // const [selectedText, setSelectedText] = useState('')
    // const [formats, setFormats] = useState<TypeFormats | null>(null)
    // const [codeLanguage, setCodeLanguage] = useState<CodeLanguage>('javascript')
    // const handelFormat = useFormats(
    //     value,
    //     setValue,
    //     selectedText,
    //     setSelectedText,
    //     formats,
    //     codeLanguage
    // )

    // const getSelectedText = () => {
    //     if (textareaRef.current) {
    //         const textarea = textareaRef.current
    //         const start = textarea.selectionStart
    //         const end = textarea.selectionEnd
    //         const selectedText = textarea.value.substring(start, end)
    //         setSelectedText(selectedText)
    //     }
    // }

    // useEffect(() => {
    //     handelFormat()
    // }, [formats, value])

    return (
        <>
            {/* <TextBarTool
                saveLanguageCode={setCodeLanguage}
                saveFormats={setFormats}
            /> */}
            <textarea
                autoFocus
                value={value}
                onChange={event => setValue(event.target.value)}
                className="bg-backgroundPrimary !text-[#d4d4d4] text-lg w-full whitespace-pre-wrap h-full px-4 pt-4"
            ></textarea>
        </>
    )
}

export default EditNotePreview
