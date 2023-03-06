import { ArrowDownIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Hide, Show, Spacer, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import FadeInAnimation from "../animations/fadein-animation";
import TextTransitionAnimation from "../animations/text-transition";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";


export default function HomeSection() {

    const [isFirstComponentVisible, setIsFirstComponentVisible] = useState(false);
    const [isSecondComponentVisible, setIsSecondComponentVisible] = useState(false);
    const [isThirdComponentVisible, setIsThirdComponentVisible] = useState(false);

    const { ref, inView } = useInView({ threshold: 0.5 });
    const router = useRouter();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsFirstComponentVisible(true);
        }, 500); // delay in milliseconds
        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        if (isFirstComponentVisible) {
            const timeoutId = setTimeout(() => {
                setIsSecondComponentVisible(true);
            }, 1000); // delay in milliseconds
            return () => clearTimeout(timeoutId);
        }
    }, [isFirstComponentVisible]);

    useEffect(() => {
        if (isSecondComponentVisible) {
            const timeoutId = setTimeout(() => {
                setIsThirdComponentVisible(true);
            }, 1000); // delay in milliseconds
            return () => clearTimeout(timeoutId);
        }
    }, [isSecondComponentVisible]);

    return (
        <Box
            id="home"
            key="home-section"
            minHeight={'100vh'}
            scrollSnapAlign="start"
            scrollSnapStop={"always"}
        >
            <Flex
                height={"100%"}
                alignItems='start'
                flexDirection={"column"}
                pt={"106px"}
                pb={"53px"}
                overflowY="scroll"
                css={{ '&::-webkit-scrollbar': { display: 'none' } }}
            >

                <VStack align={"start"} spacing={0}>
                    <AnimatePresence>
                        {
                            isFirstComponentVisible && (
                                <FadeInAnimation>
                                    <Heading as="h1" fontSize={{ base: "6xl", sm: '6xl', md: '8xl', lg: "9xl", xl: "9xl" }}>
                                        Salvatore<br />De Luca
                                    </Heading>
                                </FadeInAnimation>
                            )
                        }
                    </AnimatePresence>


                    <Hide below="sm">
                        <Text
                            fontSize={{ base: "3xl", sm: '3xl', md: '4xl', lg: "6xl", xl: "6xl" }}
                            color={useColorModeValue("green.500", "pink.400")}>
                            {isSecondComponentVisible && (
                                <TextTransitionAnimation text={"Developer and spaghetti lover"} />
                            )}
                        </Text>
                    </Hide>
                    <Show below="sm">
                        <Text
                            fontSize={{ base: "3xl", sm: '3xl', md: '4xl', lg: "6xl", xl: "6xl" }}
                            color={useColorModeValue("green.500", "pink.400")}>
                            {isSecondComponentVisible && (
                                <TextTransitionAnimation text="Developer and spaghetti lover" splitAtIndex={9} />
                            )}
                        </Text>
                    </Show>
                </VStack>
                <Spacer></Spacer>
                <AnimatePresence>
                    {isThirdComponentVisible && (
                        <VStack alignSelf={{ base: "center", sm: "end" }} align={"center"} spacing={0}>
                            <FadeInAnimation>
                                <Text fontSize={"3xl"}>
                                    Scroll
                                </Text>
                            </FadeInAnimation>
                            <FadeInAnimation>
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                >
                                    <ArrowDownIcon fontSize={"5xl"} />
                                </motion.div>
                            </FadeInAnimation>
                        </VStack>
                    )}
                </AnimatePresence>
            </Flex >
        </Box>

    )
}