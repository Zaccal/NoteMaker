import { Routes, Route } from 'react-router-dom'
import RouterData from './RouterData'

const Routing = () => {
    return (
        <Routes>
            {RouterData.map(routerData => (
                <Route {...routerData} key={routerData.id} />
            ))}
        </Routes>
    )
}

export default Routing
