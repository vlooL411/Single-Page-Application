import ModalWindow from 'components/ModalWindow'
import { ReactElement, useMemo, useState } from 'react'

import styleBlock from './styles/block.module.sass'
import style from './styles/work.module.sass'

const Work = (): ReactElement => {
    const { block, block_title, block_subtitle } = styleBlock
    const { work, loadmore, modal } = style

    const [isVisible, setIsVisible] = useState<{ vis: boolean, src?: string }>({ vis: null })

    const imgs = useMemo<ReactElement[]>(() => Array.from({ length: 8 }, (_, i) => {
        const src = `images/ParallaxTemplate/p${i + 1}.jpg`
        return <img key={i} src={src} onClick={() => setIsVisible({ vis: true, src })} />
    }), [])

    const onClosed = () => setIsVisible({ vis: false })

    return <div className={block} style={{ position: 'relative' }}>
        <ModalWindow isVisible={isVisible.vis} classNameOpen={modal}
            onClosed={onClosed} onExternalChildren={onClosed}>
            <img src={isVisible.src} />
        </ModalWindow>
        <p className={block_title}>MY WORK</p>
        <p className={block_subtitle}>
            Here are some of my latest lorem work ipsum tipsum.<br />
            Click on the images to make them bigger
        </p>
        <div className={work}>
            {imgs}
        </div>
        <button className={loadmore}>LOAD MORE</button>
    </div>
}

export default Work