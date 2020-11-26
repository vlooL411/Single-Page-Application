import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactElement } from 'react';

import style from './styles/percent.module.sass';

type Props = {
	percent: string;
	text: string;
	icon: IconDefinition;
};

const Percent = ({ icon, percent, text }: Props): ReactElement => {
	const {
		good,
		good_title,
		good_percent,
		good_percent_fill,
		good_percent_text,
	} = style;

	return (
		<div className={good}>
			<p className={good_title}>
				<FontAwesomeIcon icon={icon} />
				{text}
			</p>
			<div className={good_percent}>
				<div className={good_percent_text}>{percent}</div>
				<div className={good_percent_fill} style={{ width: percent }}></div>
			</div>
		</div>
	);
};

export default Percent;
