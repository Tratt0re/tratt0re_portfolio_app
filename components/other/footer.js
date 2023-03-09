import { Box, Center, Container, Text } from "@chakra-ui/react";

export default function Footer({ }) {
    return (
        <Box
            pb={4}
            as="footer"
            w="100%"
        >
            <Center>
                <Text size={"sm"}>
                    by Tratt0re with ❤️
                </Text>
            </Center>
        </Box>
    )
}