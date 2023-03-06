import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// 2. Add your color mode config
const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const styles = {
    global: props => ({
        body: {
            height: "100vh",
            width: "100vw",
            bg: mode('#F2ECE2', '#2A2A2A')(props)
        }
    })
}

const components = {
    Card: {
        baseStyle: props => ({
            container: {
                backgroundColor: mode('#FFFFFF80', '#23232380')(props)
            }
        })
    }
}

const fonts = {
    heading: "Roboto Serif",
    body: "Montserrat",
}

// 3. extend the theme
const theme = extendTheme({ config, styles, components, fonts })

export default theme