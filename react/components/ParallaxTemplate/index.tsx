import Parallax from 'components/Parallax';
import { ReactElement, useRef } from 'react';

import About from './About';
import Footer from './Footer';
import Header from './Header';
import Info from './Info';
import style from './styles/parallaxtemplate.module.sass';
import Where from './Where';
import Work from './Work';

//src: https://www.w3schools.com/w3css/tryw3css_templates_parallax.htm
const ParallaxTemplate = (): ReactElement => {
	const { parallaxtemplate } = style;
	const {
		parallax_block,
		parallax_block_first,
		logo,
		parallax_block_second,
	} = style;

	const scrollRef = useRef(null!);

	const relativeImg = (src: string): string => `images/ParallaxTemplate/${src}`;
	return (
		<div className={`index ${parallaxtemplate}`} ref={scrollRef}>
			<Header scrollRef={scrollRef} />
			<Parallax
				id='top'
				src={relativeImg('parallax1.jpg')}
				className={`${parallax_block} ${parallax_block_first}`}>
				<div className={logo}>
					MY <span>WEBSITE </span>LOGO
				</div>
			</Parallax>
			<About />
			<Info />
			<Parallax
				id='portfolio'
				src={relativeImg('parallax2.jpg')}
				className={`${parallax_block} ${parallax_block_second}`}>
				<div>PORTFOLIO</div>
			</Parallax>
			<Work />
			<Parallax
				id='contact'
				src={relativeImg('parallax3.jpg')}
				className={`${parallax_block} ${parallax_block_second}`}>
				<div>CONTACT</div>
			</Parallax>
			<Where />
			<Footer />
		</div>
	);
};

export default ParallaxTemplate;
