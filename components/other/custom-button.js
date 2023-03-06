import { Box, HStack, LinkBox, LinkOverlay, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion"

export default function CustomButton({ label, icon, href }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            style={{
                width: "100%",
                zIndex: 10
            }}
        >
            <LinkBox
                bg={useColorModeValue("#C05621", "#81E6D9")}
                w="100%"
                borderRadius={{ base: "xl", sm: "2xl" }}
                px="15px"
                py="10px"
            >
                <LinkOverlay
                    href={href}
                    cursor={"pointer"}
                    rel={"noopener noreferrer"}
                    isExternal
                >
                    <HStack w="100%">
                        <Text
                            w="100%"
                            fontFamily="Roboto Mono"
                            fontWeight="bold"
                            fontSize={{ base: "md", sm: "md", md: "xl", lg: "3xl", xl: "4xl" }}
                            textAlign="left"
                        >
                            {label}
                        </Text>
                        <Text fontSize={{ base: "6xl", sm: "6xl", md: "6xl", lg: "4xl", xl: "8xl" }}>
                            {icon ? icon : <></>}
                        </Text>
                    </HStack>
                </LinkOverlay>
            </LinkBox>
        </motion.div>

    )
}