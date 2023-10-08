import { motion } from 'framer-motion'
import { Box, Heading, HStack, Image, Text, useColorModeValue } from "@chakra-ui/react";
import CustomTooltip from "../other/custom-tooltip";
import { useState } from 'react';

const variants = {
    animate: {
        rotate: 15
    },
    initial: {
        rotate: 0
    }
}

export default function NavigationBarHeaderText({ text }) {
    const [showAnimation, setShowAnimation] = useState(false);

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10, staggerChildren: 0.2 }}
            onHoverStart={() => setShowAnimation(true)}
            onHoverEnd={() => setShowAnimation(false)}
        >
            <CustomTooltip textContent={"💡👨🏻‍💻🍝"}>
                <HStack spacing={0}>
                    <motion.div
                        animate={showAnimation ? "animate" : "initial"}
                        variants={variants}
                    >
                        <Box boxSize={"32px"}>
                            <Image src={useColorModeValue("./images/tratt0re_light.png", "./images/tratt0re_dark.png")} alt="tratt0re icon" />
                        </Box>
                    </motion.div>


                    <Heading as='h1' size='md'>
                        {text}
                    </Heading>

                </HStack>
            </CustomTooltip>
        </motion.div>
    )
}