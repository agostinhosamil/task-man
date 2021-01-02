import Head from 'next/head'
import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import { currentTheme as theme } from '~/config/theme'
import { GlobalStyles, Container } from '@styles'

function App ({ Component, pageProps }) {
  return (
  	<ChakraProvider theme={ theme }>
     <Head>
       <link rel="icon" href="/favicon.ico" />
     </Head>
     <CSSReset />
     <GlobalStyles />
     <Container>
       <Component {...pageProps} />
     </Container> 
    </ChakraProvider>
  )
}

export default App
