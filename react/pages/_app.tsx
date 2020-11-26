import 'public/styles/global.sass';

import { ReactElement } from 'react';

const App = ({ Component, pageProps }): ReactElement => (
	<Component {...pageProps} />
);

export default App;
