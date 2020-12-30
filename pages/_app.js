import Head from 'next/head'

import { GlobalStyles, Container } from '@styles'

function MyApp ({ Component, pageProps }) {
  return (
  	<>
  		<Head>
  			<link rel="icon" href="/favicon.ico" />
  		</Head>
  		<GlobalStyles />
  		<Container>
  			<Component {...pageProps} />
  		</Container>
 		</>
  )
}

export default MyApp
