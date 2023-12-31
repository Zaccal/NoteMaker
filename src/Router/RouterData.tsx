import { RouteProps } from 'react-router-dom'
import Notes from '../modules/Notes'
import ToDos from '../modules/ToDos'

const RouterData: RouteProps[] = [
    {
        id: '0',
        path: '/',
        element: <Notes />,
    },
    {
        id: '1',
        path: '/todos',
        element: <ToDos />,
    },
]

export default RouterData
