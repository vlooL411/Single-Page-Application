import { ReactElement } from 'react';

import style from './styles/info.module.sass';

const Info = (): ReactElement => {
	const { info, info_block, info_block_title, info_block_subtitle } = style;

	const Block = (amount: string, text: string): ReactElement => (
		<div className={info_block}>
			<p className={info_block_title}>{amount}</p>
			<p className={info_block_subtitle}>{text}</p>
		</div>
	);

	return (
		<div className={info}>
			{Block('14+', 'Partners')}
			{Block('55+', 'Web Design')}
			{Block('89+', 'Happy Clients')}
			{Block('150+', 'Meetings')}
		</div>
	);
};

export default Info;
