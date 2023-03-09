import { Box, Center, Flex, HStack, Show, Spacer, Stack, Text, useBreakpointValue, useColorModeValue, VStack } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FaEnvelopeSquare, FaLinkedin, FaMedium, FaTwitter, FaTwitterSquare } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import FadeInAnimation from "../animations/fadein-animation";
import TextTransitionAnimation from "../animations/text-transition";
import CustomButton from "../other/custom-button";
import Footer from "../other/footer";
import HighlightText from "../other/highlight-text";
import SectionHeader from "../other/section-header";


export default function ContactSection() {

    const [isFirstComponentVisible, setIsFirstComponentVisible] = useState(false);
    const [isSecondComponentVisible, setIsSecondComponentVisible] = useState(false);
    const [isThirdComponentVisible, setIsThirdComponentVisible] = useState(false);
    const [isFourthComponentVisible, setIsFourthComponentVisible] = useState(false);

    const { ref, inView } = useInView({ threshold: 0.5 });
    const hasAnimated = useRef(false);

    const textColor = useColorModeValue("green.500", "pink.400")
    const custoButtonPercenWidth = useBreakpointValue({ base: "100%", lg: "45%" })

    useEffect(() => {
        if (inView && !hasAnimated.current) {
            setIsFirstComponentVisible(true);
            hasAnimated.current = true;
        }
    }, [inView]);

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

    useEffect(() => {
        if (isThirdComponentVisible) {
            const timeoutId = setTimeout(() => {
                setIsFourthComponentVisible(true);
            }, 1000); // delay in milliseconds
            return () => clearTimeout(timeoutId);
        }
    }, [isThirdComponentVisible]);


    return (
        <Box
            id="contacts"
            key="contact-section"
            minHeight={'100vh'}
            scrollSnapAlign="start"
            ref={ref}
        >
            <Flex
                height={"100%"}
                pt={{ base: "10px", md: "0px" }}
                pb={{ base: "106px", md: "56px" }}
                alignItems='start'
                flexDirection={"column"}
                overflowY="scroll"
                scrollBehavior={"smooth"}
                css={{ '&::-webkit-scrollbar': { display: 'none' } }}
            >
                <VStack align={"start"} spacing={0} pb={16}>
                    <AnimatePresence>
                        {isFirstComponentVisible && (
                            <FadeInAnimation>
                                <SectionHeader title="Contacts" />
                            </FadeInAnimation>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {isSecondComponentVisible && (
                            <FadeInAnimation>
                                <Text
                                    fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "3xl", xl: "4xl" }}
                                    pl={{ base: 5, sm: 5, md: 7, lg: 9, xl: 20 }}>
                                    Thanks for your time, <HighlightText>let's keep in contact!</HighlightText>
                                </Text>
                            </FadeInAnimation>
                        )}
                    </AnimatePresence>
                </VStack>

                <AnimatePresence>
                    {isThirdComponentVisible && (
                        <Text
                            spacing={0}
                            opacity={0.8}
                            fontSize={{ base: "md", sm: "md", md: "xl", lg: "2xl", xl: "4xl" }}
                            px={{ base: 5, sm: 5, md: 6, lg: 8, xl: 20 }}
                            pb={4}
                        >
                            <Text
                                as="span"
                                color={textColor}
                                fontFamily="Roboto Mono"
                                fontSize={{ base: "md", sm: "md", md: "xl", lg: "2xl", xl: "4xl" }}
                                fontWeight="bold"
                            >
                                *
                            </Text>
                            <TextTransitionAnimation text={"Wanna work together?"} />
                        </Text>
                    )}
                </AnimatePresence>


                <Flex
                    px={{ base: 5, sm: 5, md: 6, lg: 8, xl: 20 }}
                    flexDirection={{ base: "column", lg: "row" }}
                    alignItems='start'
                    w={"100%"}
                    minH={{ base: "30%", lg: "65px", xl: "116px" }}
                    justifyContent={"space-between"}
                >
                    <AnimatePresence>
                        {isFourthComponentVisible && (
                            <FadeInAnimation style={{ width: custoButtonPercenWidth }}>
                                <CustomButton label="Check my Linkedin" icon={<FaLinkedin />} href="https://www.linkedin.com/in/salvatdeluca/" />
                            </FadeInAnimation>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {isFourthComponentVisible && (
                            <FadeInAnimation style={{ width: custoButtonPercenWidth }}>
                                <CustomButton label="Send me an email" icon={<FaEnvelopeSquare />} href="mailto:salvatoredeluca@aol.it" />
                            </FadeInAnimation>
                        )}
                    </AnimatePresence>
                </Flex>


                <Spacer />
                <Footer />
            </Flex>
        </Box>
    )
}