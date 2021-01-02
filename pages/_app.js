import Head from 'next/head'
import { currentTheme as theme } from '~/config/theme'
import { ChakraProvider } from "@chakra-ui/react"
import { GlobalStyles, Container } from '@styles'

function App ({ Component, pageProps }) {
  return (
  	<ChakraProvider theme={ theme }>
     <Head>
       <link rel="icon" href="/favicon.ico" />
     </Head>
     <GlobalStyles />
     <Container>
       <Component { ...pageProps } />
     </Container> 
    </ChakraProvider>
  )
}

export default App
