import { Box, Flex, Spacer, Text, VStack, Link, useColorModeValue } from "@chakra-ui/react";
import { FaAppStoreIos } from "react-icons/fa";
import ProjectCardDescriptionHeader from "./project-card-description-header";
import { motion } from "framer-motion"

export default function ProjectCardDescription({ project }) {
    const cardColor = useColorModeValue("#ffffff75", "#00000020")
    return (
        <Box
            p={{ base: 2, sm: 5 }}
            borderRadius={"3xl"}
            backdropFilter="blur(10px)"
            bg={{ base: cardColor }}
            h={"100%"}
        >
            <VStack align={"start"} spacing={0}>
                <Flex direction={"row"} w="100%">
                    <ProjectCardDescriptionHeader project={project} />
                    <Spacer />

                    <Link isExternal href={project.href} rel="noopener noreferrer">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Text fontSize={{ base: "2xl", lg: "3xl", xl: "4xl" }}>
                                <FaAppStoreIos />
                            </Text>
                        </motion.div>
                    </Link>
                </Flex>
            </VStack>
            <Text
                fontSize={{ base: "md", lg: "2xl", xl: "3xl" }}
                pl={{ base: 4, lg: 5, xl: 10 }}
            >
                {project.description}
            </Text>
        </Box>
    )
}