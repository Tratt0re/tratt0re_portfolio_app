import { Box, Text, useColorModeValue } from "@chakra-ui/react";

export default function CustomTag({ text, ...props }) {
    return (
        <Text
            display={"inline-block"}
            as="div"
            fontFamily="Roboto Mono"
            fontWeight="bold"
            textTransform={"uppercase"}
            fontSize={{ base: "md", sm: "md", md: "xl", lg: "3xl", xl: "4xl" }}
            borderRadius={{ base: "xl", sm: "2xl" }}
            bg={useColorModeValue("#C0562150", "#81E6D950")}
            textColor={useColorModeValue("#C05621", "#81E6D9")}
            px="10px"
            py="5px"
            mr="10px"
            mb="10px"
            whiteSpace="pre-wrap"
            overflowWrap={"break-word"}
            {...props}
        >
            {text}
        </Text>
    )
}