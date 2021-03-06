import Link from 'next/link';
import { ReactElement } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './header.module.sass';

type Props = {
	href: string;
	text?: string;
	className?: string;
	icon?: IconDefinition;
};

const Item = ({
	href,
	text = '',
	className = '',
	icon = null,
}: Props): ReactElement => {
	const { item } = style;

	return (
		<Link href={href}>
			<a className={`${item} ${className}`}>
				{icon ? <FontAwesomeIcon icon={icon} /> : null}
				{text}
			</a>
		</Link>
	);
};

export default Item;
