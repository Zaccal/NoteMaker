import { RouteProps } from 'react-router-dom'
import Notes from '../modules/Notes'
import ToDos from '../modules/ToDos'
import Trash from '../modules/Trash'
import Settings from '../modules/Settings'

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
    {
        id: '2',
        path: '/trash',
        element: <Trash />,
    },
    {
        id: '3',
        path: '/settings',
        element: <Settings />,
    },
]

export default RouterData
