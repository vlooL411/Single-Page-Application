import { ReactElement } from 'react'

import style from './styles/where.module.sass'
import styleBlock from './styles/block.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope, faMapMarker, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'

const Where = (): ReactElement => {
    const { block, block_title, block_subtitle } = styleBlock
    const { where, address, infosend, infosend_title, send } = style

    return <div className={block}>
        <p className={block_title}>WHERE I WORK</p>
        <p className={block_subtitle}>I'd love your feedback!</p>
        <div className={where}>
            <img src="images/ParallaxTemplate/map.jpg" />
            <form>
                <div className={address}>
                    <p><FontAwesomeIcon icon={faMapMarker} /> Chicago, US</p>
                    <p><FontAwesomeIcon icon={faPhone} /> Phone: +00 151515</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> Email: mail@mail.com</p>
                </div>
                <p className={infosend_title}>
                    Swing by for a cup of <FontAwesomeIcon icon={faCoffee} />, or leave me a note:
                </p>
                <div className={infosend}>
                    <input placeholder='Name' />
                    <input type='email' placeholder='Email' />
                    <input placeholder='Message' />
                </div>
                <button className={send}><FontAwesomeIcon icon={faPaperPlane} /> SEND MESSAGE</button>
            </form>
        </div>
    </div>
}

export default Where