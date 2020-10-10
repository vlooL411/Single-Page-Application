import 'public/styles/global.sass'

import Head from 'next/head'
import { ReactElement } from 'react'

const App = ({ Component, pageProps }): ReactElement => <>
    <Head>
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
</>
export default App