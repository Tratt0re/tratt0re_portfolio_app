import { Box, Heading, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const variants = {
    hidden: {
        x: -50,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    },
};

export default function MenuItem({ delay, onItemClick, title, sectionId }) {
    const textColor = useColorModeValue("green.500", "pink.400")
    const router = useRouter()

    function scrollToSection(id) {
        try {
            router.push(`#${id}`)
        } catch (error) {
            console.error('Unable to scroll to component', error);
        }
    }

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
                delay: delay
            }}
            style={{
                marginBottom: "15px"
            }}
        >
            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <Box onClick={() => { scrollToSection(sectionId); onItemClick() }}>
                    <HStack align={"baseline"} spacing={0}>
                        <Text
                            color={textColor}
                            fontFamily="Roboto Mono"
                            fontSize={{ base: "2xl", sm: '2xl', md: '4xl', lg: "5xl", xl: "6xl" }}
                            fontWeight="bold"
                        >
                            $
                        </Text>
                        <Heading as="h2" fontSize={{ base: "2xl", sm: '2xl', md: '4xl', lg: "5xl", xl: "6xl" }}>
                            {title}
                        </Heading>
                    </HStack>
                </Box>
            </motion.div>

        </motion.div>
    );
};
