import { Heading, HStack, Text, useColorModeValue } from "@chakra-ui/react";

export default function SkillCardHeader({ title }) {
    const textColor = useColorModeValue("green.500", "pink.400")
    return (
        <HStack align={"baseline"} spacing={0}>
            <Text
                color={textColor}
                fontFamily="Roboto Mono"
                fontSize={{ base: "2xl", sm: '2xl', md: '4xl', lg: "5xl", xl: "6xl" }}
                fontWeight="bold"
            >
                $
            </Text>
            <Heading as="h2" fontSize={{ base: "2xl", sm: '2xl', md: '4xl', lg: "5xl", xl: "6xl" }}>
                {title}
            </Heading>
        </HStack>
    )
}