import navigationLinks from "@/lib/navigationLinks";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Hide, HStack, Show, useColorModeValue } from "@chakra-ui/react";
import GithubLink from "./github-link";
import NavigationLink from "./navigation-link";
import NavigationBarHeaderText from "./navigationbar-header";
import ThemeButton from "./theme-button";

export default function NavigationBar({ toggleMenu }) {

    return (
        <Box
            position="fixed"
            as="navigationbar"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#00000040')}
            backdropFilter="blur(10px)"
            zIndex={999}
        >

            <Container
                display={"flex"}
                maxW="100%"
                alignItems={"center"}
                justifyContent={"space-between"}
                py={2}
                px={{ base: "4", sm: "12" }}
            >
                <NavigationBarHeaderText text={"Tratt0re"} />

                <Hide below="md">
                    <HStack>
                        {
                            navigationLinks.map((item) => (
                                <NavigationLink key={`navigation-link-${item.id}`} title={item.title} sectionId={item.sectionId} />
                            ))
                        }
                    </HStack>
                </Hide>


                <HStack spacing={{ base: 2, md: 8 }} >
                    <Hide below="md">
                        <GithubLink />
                    </Hide>
                    <ThemeButton />
                    <Show below="md">
                        <Button
                            onClick={toggleMenu}
                            variant="ghost"
                            size="lg"
                            colorScheme={useColorModeValue("orange", "teal")}
                        >
                            <HamburgerIcon />
                        </Button>
                    </Show>
                </HStack>
            </Container>

        </Box >
    )
}