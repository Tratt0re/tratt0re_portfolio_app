import CustomTag from "@/components/other/custom-chip";
import { Box, VStack } from "@chakra-ui/react";
import SkillCardHeader from "./skill-card-header";
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react";

export default function SkillCard({ skill, direction, ...props }) {

    const [isFirstComponentVisible, setIsFirstComponentVisible] = useState(false);
    const [isSecondComponentVisible, setIsSecondComponentVisible] = useState(false);
    const fromDirection = direction === "left" ? "-100vw" : "100vw"

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

    return (
        <Box w="100%" minH="124px">
            <VStack align={"start"} spacing={0} {...props}>
                {
                    isFirstComponentVisible && (
                        <motion.div
                            initial={{ x: fromDirection }}
                            animate={{ x: [fromDirection, "0vw"] }}
                            transition={{ duration: 1 }}
                        >
                            <SkillCardHeader title={skill.title} />
                        </motion.div>
                    )
                }

                {
                    isSecondComponentVisible && (
                        <Box w="100%" pl={{ base: 3, sm: 3, md: 4, lg: 6, xl: 8 }}>
                            <AnimatePresence>
                                {skill.tags.map((tag, i) => {
                                    return (
                                        <motion.div
                                            key={`tag-${skill.title}-${i}`}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                            style={{ display: "inline-block" }}
                                        >
                                            <CustomTag text={tag} />
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </Box>
                    )
                }
            </VStack>
        </Box>
    )
}