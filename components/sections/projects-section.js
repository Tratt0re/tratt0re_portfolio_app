import projects from "@/lib/projects";
import { Box, Text, VStack } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import FadeInAnimation from "../animations/fadein-animation";
import DummyProjectCard from "../cards/project-card/dummy-project-card";
import SectionHeader from "../other/section-header";
import ProjectCard from "../cards/project-card/project-card";


export default function ProjectsSection() {

    const [isFirstComponentVisible, setIsFirstComponentVisible] = useState(false);
    const [isSecondComponentVisible, setIsSecondComponentVisible] = useState(false);
    const [isThirdComponentVisible, setIsThirdComponentVisible] = useState(false);
    const [isFourthComponentVisible, setIsFourthComponentVisible] = useState(false);
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

    useEffect(() => {
        if (isSecondComponentVisible) {
            const timeoutId = setTimeout(() => {
                setIsThirdComponentVisible(true);
            }, 1500); // delay in milliseconds
            return () => clearTimeout(timeoutId);
        }
    }, [isSecondComponentVisible]);

    useEffect(() => {
        if (isThirdComponentVisible) {
            const timeoutId = setTimeout(() => {
                setIsFourthComponentVisible(true);
            }, 1500); // delay in milliseconds
            return () => clearTimeout(timeoutId);
        }
    }, [isThirdComponentVisible]);


    return (
        <Box
            id="projects"
            key="projects-section"
            height={'100vh'}
            scrollSnapAlign="start"
            scrollSnapStop={"always"}
            ref={ref}
        >
            <Box
                py={"106px"}
                height={'100%'}
                overflowY="scroll"
                css={{ '&::-webkit-scrollbar': { display: 'none' } }}
            >
                <VStack align={"start"} spacing={0} w='100%' overflowY={"scroll"}>
                    <AnimatePresence>
                        {
                            isFirstComponentVisible && (
                                <FadeInAnimation>
                                    <SectionHeader title="Last projects" />
                                </FadeInAnimation>
                            )
                        }
                    </AnimatePresence>

                    <Box h={{ base: "35px", sm: "50px" }} />

                    <AnimatePresence>
                        {
                            isSecondComponentVisible ? (
                                <Box overflowX={"hidden"} w="100%">
                                    <ProjectCard project={projects[0]} />
                                </Box>
                            ) : <DummyProjectCard />
                        }
                    </AnimatePresence>

                    <Box h={{ base: "50px", sm: "160px" }}></Box>

                    <AnimatePresence>
                        {
                            isThirdComponentVisible ? (
                                <Box overflowX={"hidden"} w="100%">
                                    <ProjectCard project={projects[1]} />
                                </Box>
                            ) : <DummyProjectCard />
                        }
                    </AnimatePresence>

                    <Box h={{ base: "50px", sm: "160px" }} />

                    <AnimatePresence>
                        {
                            isFourthComponentVisible ? (
                                <Box overflowX={"hidden"} w="100%">
                                    <ProjectCard project={projects[2]} />
                                </Box>
                            ) : <DummyProjectCard />
                        }
                    </AnimatePresence>
                </VStack>
            </Box>

        </Box>
    )
}