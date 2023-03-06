import { Box, Divider, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

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

export default function DividerMenuItem({ delay }) {
    const dividerColor = useColorModeValue("#00000090", "#ffffff90")

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
                delay: delay
            }}
            style={{
                marginBottom: "15px",
                width: "100%"
            }}
        >
            <Box h={"1px"} w={"100%"} bg={dividerColor} borderRadius={"3xl"} />

        </motion.div>
    );
};