import { Text, Tooltip, useColorModeValue, VStack } from "@chakra-ui/react";

export default function CustomTooltip({ textContent, children }) {

    function getTextContentArray() {
        if (Array.isArray(textContent)) {
            return textContent
        } else {
            return [textContent]
        }
    }

    return (
        <Tooltip
            label={<VStack spacing={1}>
                {
                    getTextContentArray().map((text, idx) => {
                        return (
                            <Text key={`tooltip-text-line-${idx}`}>
                                {text}
                            </Text>
                        )
                    })
                }
            </VStack>}
            bg={useColorModeValue('#ffffff99', '#00000099')}
            color={useColorModeValue('#000', '#fff')}
        >
            {children}
        </Tooltip>
    )
}