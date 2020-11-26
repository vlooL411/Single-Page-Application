import { ReactElement } from 'react';

import style from './modalwindow.module.sass';

type Props = {
	classNameOpen?: string;
	classNameClosed?: string;
	children?: ReactElement;
	childrenClosed?: ReactElement;
	isVisible?: boolean;
	onClosed?: () => void;
	onExternalChildren?: () => void;
};

const ModalWindow = ({
	children,
	childrenClosed,
	isVisible,
	classNameOpen = '',
	classNameClosed = '',
	onClosed = () => {},
	onExternalChildren = () => {},
}: Props) => {
	const { modalwindow, modalwindow_close, modalwindow_closed } = style;
	const { external } = style;

	return (
		<div
			className={
				isVisible
					? `${classNameOpen} ${modalwindow}`
					: classNameClosed ?? modalwindow_close
			}
			onClick={onExternalChildren}>
			{children}
			{isVisible
				? childrenClosed ?? (
						<button onClick={onClosed} className={modalwindow_closed}>
							X
						</button>
				  )
				: null}
		</div>
	);
};

export default ModalWindow;
