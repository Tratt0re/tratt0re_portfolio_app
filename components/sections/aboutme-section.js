import { Box, Text, VStack } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import FadeInAnimation from "../animations/fadein-animation";
import HighlightText from "../other/highlight-text";
import SectionHeader from "../other/section-header";


export default function AboutMeSection() {

    const [isFirstComponentVisible, setIsFirstComponentVisible] = useState(false);
    const [isSecondComponentVisible, setIsSecondComponentVisible] = useState(false);
    const { ref, inView } = useInView({ threshold: 0.5 });
    const hasAnimated = useRef(false);

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


    return (
        <Box
            id="aboutme"
            key="aboutme-section"
            minHeight={'100vh'}
            pt={"106px"}
            pb={"52px"}
            ref={ref}
        >
            <VStack align={"start"} spacing={0}>
                <AnimatePresence>
                    {isFirstComponentVisible && (
                        <FadeInAnimation>
                            <SectionHeader title="About me" />
                        </FadeInAnimation>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {isSecondComponentVisible && (
                        <FadeInAnimation>
                            <Text
                                fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "3xl", xl: "3xl" }}
                                pl={{ base: 5, sm: 5, md: 7, lg: 9, xl: 20 }}>
                                I'm a <HighlightText>passionate mobile and full stack developer</HighlightText> who's always striving to stay at the forefront of the latest technologies and trends.
                                When I'm not busy typing away at my keyboard, you can often find me experimenting with new recipes in the kitchen or reading sci-fi books.
                                <br />
                                <br />
                                I've had a <HighlightText>love</HighlightText> for all things tech since I was child,
                                and I've always been fascinated by the ever-evolving world of <HighlightText>software development</HighlightText>.
                                This fasciantion bringed me to attend the <HighlightText>Apple Developer Academy</HighlightText>, and sice then, dedicate my work life to <HighlightText>produce quality Apps</HighlightText>.
                                <br />
                                <br />
                                Throughout my career, I've gained <HighlightText>extensive experience</HighlightText> working with a variety of languages and tools, including <HighlightText>Swift, React, Nodejs and Python</HighlightText>.
                                I'm always <HighlightText>looking for</HighlightText> new <HighlightText>challenges and opportunities</HighlightText> to expand my skillset,
                                and I believe that my passion and enthusiasm for technology make me a <HighlightText>valuable asset to any team</HighlightText>.
                            </Text>
                        </FadeInAnimation>
                    )}
                </AnimatePresence>
            </VStack>
        </Box>
    )
}