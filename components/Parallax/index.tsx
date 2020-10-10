import { ReactElement } from 'react'

import style from './parallax.module.sass'

type Props = {
    src: string
    className?: string
    id?: string
    children?: ReactElement | ReactElement[]
}

const Parallax = ({ src, className = '', id = '', children }: Props): ReactElement => {
    const { parallax } = style

    return <div id={id} className={`${parallax} ${className}`} style={{ backgroundImage: `url(${src})` }}>
        {children}
    </div>
}

export default Parallax
