import theme from "@/lib/theme";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/montserrat"
import "@fontsource/roboto-serif/700.css"
import "@fontsource/roboto-mono/400.css"

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
