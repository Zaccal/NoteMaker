import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from '../store/store'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default useTypedSelector
