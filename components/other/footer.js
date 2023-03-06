import { Box, Container, Text } from "@chakra-ui/react";

export default function Footer({ }) {
    return (
        <Box
            pt={16}
            pb={4}
            as="footer"
            w="100%"
        >
            <Container
                display={"flex"}
                maxW="container.md"
                alignItems={"center"}
                justifyContent={"center"}
                p={2}
            >
                <Text size={"sm"}>
                    by Tratt0re with ❤️
                </Text>
            </Container>
        </Box>
    )
}