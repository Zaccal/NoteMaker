import { ReactElement } from 'react'
import Header from './Header/Header'

interface ILayoutTemplate {
    children?: ReactElement
}

const LayoutTemplate = ({ children }: ILayoutTemplate) => {
    return (
        <div>
            <Header />
            <div className="h-screen">{children}</div>
        </div>
    )
}

export default LayoutTemplate
