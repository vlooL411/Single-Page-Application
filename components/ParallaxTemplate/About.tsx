import { faCamera, faImage, faLaptop, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement } from 'react'

import style from './styles/about.module.sass'
import styleBlock from './styles/block.module.sass'

const About = (): ReactElement => {
    const { block, block_title, block_subtitle } = styleBlock
    const { about_double, about_double_split, myname } = style
    const { good, good_title, good_percent, good_percent_fill, good_percent_text } = style

    const Percent = (percent: string, text: string, icon: IconDefinition): ReactElement =>
        <div className={good}>
            <p className={good_title}><FontAwesomeIcon icon={icon} />{text}</p>
            <div className={good_percent}>
                <div className={good_percent_text}>{percent}</div>
                <div className={good_percent_fill} style={{ width: percent }}></div>
            </div>
        </div>

    return <div className={block} id='about'>
        <p className={block_title}>ABOUT ME</p>
        <p className={block_subtitle}>I love photography</p>
        <p>We have created a fictional "personal" website/blog, and our fictional character is a hobby photographer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className={about_double}>
            <div className={`${myname} ${about_double_split}`}>
                <p><FontAwesomeIcon icon={faUser} />My Name</p>
                <img src="images/ParallaxTemplate/avatar_hat.jpg" alt="" />
            </div>
            <p className={about_double_split}>Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <p className={block_subtitle}>Im relly good at:</p>
        {Percent('90%', 'Photography', faCamera)}
        {Percent('85%', 'Web Design', faLaptop)}
        {Percent('75%', 'Photoshop', faImage)}
    </div>
}

export default About