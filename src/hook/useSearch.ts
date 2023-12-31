import { useMemo } from 'react'
import useTypedSelector from './useTypedSelector'

const useSearch = (searchValue: string) => {
    const { NoteReducer } = useTypedSelector(state => state)

    return useMemo(() => {
        return (
            NoteReducer.filter(noteData =>
                noteData.name
                    .toLocaleLowerCase()
                    .includes(searchValue.toLocaleLowerCase())
            ) || NoteReducer
        )
    }, [NoteReducer, searchValue])
}

export default useSearch
