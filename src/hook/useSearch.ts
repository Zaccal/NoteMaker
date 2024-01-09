import { useMemo } from 'react'
import useTypedSelector from './useTypedSelector'

export type TypeSearchPleace = 'note' | 'tasks' | 'trash' | 'no_one'

const useSearch = (searchValue: string, searchPleace: TypeSearchPleace) => {
    const { NoteReducer, ToDosReducer, TrashReducer } = useTypedSelector(
        state => state
    )

    const getThingsToSearch = () => {
        switch (searchPleace) {
            case 'note':
                return (
                    NoteReducer.filter(thinkData =>
                        thinkData.name
                            .toLocaleLowerCase()
                            .includes(searchValue.toLocaleLowerCase())
                    ) || NoteReducer
                )
            case 'tasks':
                return (
                    ToDosReducer.filter(thinkData =>
                        thinkData.title
                            .toLocaleLowerCase()
                            .includes(searchValue.toLocaleLowerCase())
                    ) || ToDosReducer
                )
            case 'trash':
                return (
                    TrashReducer.filter(thinkData =>
                        thinkData.name
                            .toLocaleLowerCase()
                            .includes(searchValue.toLocaleLowerCase())
                    ) || TrashReducer
                )
            default:
                return []
        }
    }

    return useMemo(() => {
        return getThingsToSearch()
    }, [NoteReducer, searchValue, searchPleace, ToDosReducer, TrashReducer])
}

export default useSearch
