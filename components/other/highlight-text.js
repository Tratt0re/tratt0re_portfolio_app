import { Box, useColorModeValue } from "@chakra-ui/react"

export default function HighlightText({ children }) {
    const highlightColor = useColorModeValue("#C05621", "#81E6D9")
    return (

        <Box as="span" color={highlightColor}>
            <strong>
                {children}
            </strong>
        </Box>
    )
}