import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faPinterest,
  faSnapchat,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement } from 'react'

import style from './styles/footer.module.sass'

const Footer = (): ReactElement => {
    const { footer, top, social } = style

    return <div className={footer}>
        <a className={top} href='#top'><FontAwesomeIcon icon={faArrowUp} /> To the top</a>
        <div className={social}>
            <FontAwesomeIcon icon={faFacebookSquare} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faSnapchat} />
            <FontAwesomeIcon icon={faPinterest} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />
        </div>
        <p>Powered by <u><a href='https://www.w3schools.com/w3css/default.asp'> w3.css</a></u></p>
    </div>
}

export default Footer
