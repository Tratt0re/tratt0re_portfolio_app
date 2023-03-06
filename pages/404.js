import Layout from "@/components/layout";
import Footer from "@/components/other/footer";
import { Center, Flex, Spacer, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion"
export default function NotFoudPage() {

    return (
        <Layout>
            <Flex flexDirection={"column"} w="100%" h="100%">
                <Center pt={"60px"}>
                    <motion.div
                        animate={{ scale: [0.98, 1.1, 0.98] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                    >
                        <Text fontSize={"2xl"}>
                            <small>Check the available routes 👆🏻</small>
                        </Text>
                    </motion.div>

                </Center>
                <Spacer />
                <VStack align={"center"}>
                    <Text fontSize={"9xl"} fontFamily="Roboto Mono" fontWeight={"bold"} color={useColorModeValue("#C05621", "#81E6D9")}>
                        <strong>404</strong>
                    </Text>
                    <Text fontSize={"4xl"}>
                        <strong>Are you lost ?</strong>
                    </Text>
                </VStack>
                <Spacer />
                <Spacer />
                <Footer text={"by Tratt0re with ❤️ "} />
            </Flex>

        </Layout>
    )
}