import { Heading, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import TextTransitionAnimation from "../animations/text-transition";

export default function SectionHeader({ title }) {
    const textColor = useColorModeValue("green.500", "pink.400")
    return (
        <HStack align={"baseline"} spacing={0}>
            <Text
                color={textColor}
                fontFamily="Roboto Mono"
                fontSize={{ base: "4xl", sm: '4xl', md: '5xl', lg: "6xl", xl: "9xl" }}
                fontWeight="bold"
            >
                $
            </Text>
            <Heading as="h1" fontSize={{ base: "4xl", sm: '4xl', md: '5xl', lg: "6xl", xl: "9xl" }}>
                <TextTransitionAnimation text={title} />
            </Heading>
        </HStack>
    )
}