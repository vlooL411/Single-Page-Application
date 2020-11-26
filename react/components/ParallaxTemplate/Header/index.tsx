import {
	MutableRefObject,
	ReactElement,
	UIEvent,
	useEffect,
	useMemo,
	useState,
} from 'react';
import {
	faEnvelope,
	faSearch,
	faTh,
	faUser,
} from '@fortawesome/free-solid-svg-icons';

import style from './header.module.sass';
import Item from './Item';

type Props = {
	scrollRef: MutableRefObject<HTMLDivElement>;
	offsetY?: number;
};

const Header = ({ scrollRef, offsetY = 100 }: Props): ReactElement => {
	const { header, header_scroll } = style;
	const [offsetMore, setOffsetMore] = useState<boolean>(false);

	useEffect(() => {
		scrollRef.current.onscroll = ev => {
			const e = (ev as any) as UIEvent<HTMLDivElement>;
			const { scrollTop } = e.currentTarget;
			setOffsetMore(offsetY < scrollTop);
		};
	}, [scrollRef]);

	const items = useMemo<ReactElement>(
		() => (
			<>
				<Item text='HOME' href='#top' />
				<Item text='ABOUT' href='#about' icon={faUser} />
				<Item text='PORTFOLIO' href='#portfolio' icon={faTh} />
				<Item text='CONTACT' href='#contact' icon={faEnvelope} />
				<span></span>
				<Item href='#top' icon={faSearch} />
			</>
		),
		[],
	);

	return (
		<div className={`${header} ${offsetMore ? header_scroll : ''}`}>
			{items}
		</div>
	);
};

export default Header;
