import skills from "@/lib/skills";
import { Box, Flex, Spacer, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import FadeInAnimation from "../animations/fadein-animation";
import TextTransitionAnimation from "../animations/text-transition";
import SkillCard from "../cards/skill-card/skill-card";
import HighlightText from "../other/highlight-text";
import SectionHeader from "../other/section-header";


export default function SkillsSection() {

    const [isFirstComponentVisible, setIsFirstComponentVisible] = useState(false);
    const [isSecondComponentVisible, setIsSecondComponentVisible] = useState(false);
    const [isThirdComponentVisible, setIsThirdComponentVisible] = useState(false);
    const [isFourthComponentVisible, setIsFourthComponentVisible] = useState(false);
    const { ref, inView } = useInView({ threshold: 0.5 });
    const hasAnimated = useRef(false);

    const textColor = useColorModeValue("green.500", "pink.400")

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
            }, 500); // delay in milliseconds
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
        <Flex
            ref={ref}
            id="skills"
            key="skills-section"
            minHeight={'100vh'}
            alignItems='start'
            flexDirection={"column"}
            pt={"106px"}
            css={{ '&::-webkit-scrollbar': { display: 'none' } }}
            position={"relative"}
        >
            <VStack
                alignSelf={"start"}
                align={"start"}
                spacing={{ base: -2, sm: -2, md: -3, lg: -3, xl: -10 }}
                w='100%'
                pb={24}
            >
                <AnimatePresence>
                    {isFirstComponentVisible && (
                        <FadeInAnimation>
                            <SectionHeader title="Tech n' skills" />
                        </FadeInAnimation>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {isSecondComponentVisible && (
                        <FadeInAnimation>
                            <Text
                                fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "3xl", xl: "4xl" }}
                                pl={{ base: 5, sm: 5, md: 7, lg: 9, xl: 20 }}
                            >
                                I'm a <HighlightText>versatile developer</HighlightText> with a wide range of skills and <HighlightText>expertise</HighlightText> in <HighlightText>various languages and tools</HighlightText>.
                                Continuously <HighlightText>up-to-date</HighlightText> with the <HighlightText>latest industry trends</HighlightText>.
                            </Text>
                        </FadeInAnimation>
                    )}
                </AnimatePresence>
            </VStack>

            <AnimatePresence>
                {isThirdComponentVisible && (
                    <Stack
                        direction={{ base: "column", sm: "row" }}
                        w="100%"
                        px={{ base: 5, sm: 5, md: 10, lg: 16, xl: 24 }}
                        spacing={{ base: 12, sm: 5, md: 16, lg: 20, xl: 36 }}
                    >
                        <SkillCard skill={skills[0]} direction="left" />

                        <SkillCard skill={skills[1]} direction="right" />
                    </Stack>
                )}
            </AnimatePresence>
            <Spacer />
            <AnimatePresence>
                {isFourthComponentVisible && (
                    <Text
                        px={{ base: 0, sm: 0, md: 6, lg: 6, xl: 24 }}
                        pb={16}
                        opacity={0.8}
                        fontSize={{ base: "md", sm: "md", md: "xl", lg: "3xl", xl: "4xl" }}
                    >
                        <Text
                            as="span"
                            color={textColor}
                            fontFamily="Roboto Mono"
                            fontSize={{ base: "md", sm: "md", md: "xl", lg: "3xl", xl: "4xl" }}
                            fontWeight="bold"
                        >
                            *
                        </Text>
                        <TextTransitionAnimation text={"Expert at googling, master in avoid to reinvent the wheel"} />
                    </Text>
                )}
            </AnimatePresence>
        </Flex>
    )
}