import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import FadeInAnimation from "../../animations/fadein-animation";
import ProjectCardDescription from "./project-card-description";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

export default function ProjectCard({ project, ...props }) {
    const { ref, inView } = useInView({ threshold: 0.5 });
    const [isFirstComponentVisible, setIsFirstComponentVisible] = useState(false);
    const hasAnimated = useRef(false);

    const type = useBreakpointValue({ base: 'small', sm: 'small', md: 'big' })

    useEffect(() => {
        if (inView && !hasAnimated.current) {
            setIsFirstComponentVisible(true);
            hasAnimated.current = true;
        }
    }, [inView]);

    if (type === "small") {
        return (
            <Box key={`${project.name}-card`} w="100%" ref={ref} {...props}>
                {isFirstComponentVisible && (
                    <FadeInAnimation>
                        <Box
                            alignSelf={"ceneter"}
                            w={"100%"}
                            {...props}
                        >
                            <ProjectCardDescription project={project} />
                        </Box>
                    </FadeInAnimation>
                )}
            </Box>
        )
    } else {
        return (
            <Box key={`${project.name}-card`} w="100%" ref={ref} {...props}>
                {isFirstComponentVisible && (
                    <motion.div
                        initial={{ x: "100vw" }}
                        animate={{ x: ["100vw", "0vw"] }}
                        transition={{ duration: 1 }}
                    >
                        <Box
                            position="relative"
                            pt={"120px"}
                            pl={{ base: 5, sm: 5, md: 7, lg: 9, xl: 20 }}
                            w={"100%"}
                        >
                            <Image
                                borderRadius={"3xl"}
                                boxSize={{ base: "200px", sm: '400px', md: '250px', lg: "300px", xl: "400px" }}
                                objectFit='cover'
                                src={project.iconSource}
                                alt={project.iconAlt}
                            />

                            <Box
                                position={"absolute"}
                                top={`${120}px`}
                                left={{ base: 5, sm: 10, md: 180, lg: 220, xl: 340 }}
                                width={{ base: "auto", xl: "65%" }}
                                h={{ base: "200px", sm: '400px', md: '250px', lg: "300px", xl: "400px" }}
                            >

                                <ProjectCardDescription project={project} />

                            </Box>

                        </Box>
                    </motion.div>

                )}
            </Box>
        )
    }

}