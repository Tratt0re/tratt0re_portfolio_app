import { Box, Center, Container, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import NavigationBar from "./navigationbar/navigationbar";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "./navigationbar/hamburgermenu/menu";
const menuVariants = {
    closed: { y: "100%" },
    open: { y: 0 }
};

export default function Layout({ children }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const body = document.querySelector('body');
        if (isOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <Box as="layout">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Tratt0re portfolio webpage" />
                <meta name="author" content="Salvatore De Luca" />
                <meta name="author" content="Tratt0re" />

                <title>Salvatore De Luca - Developer and spaghetti lover</title>
            </Head>

            <NavigationBar toggleMenu={toggleMenu} />
            <Menu isOpen={isOpen} onClose={toggleMenu}></Menu>

            <Flex
                flex="1"
                direction="column"
                overflowY="scroll"
                scrollSnapType="y mandatory"
                height="100vh"
                maxW="100vw"
                px={{ base: "4", sm: "12" }}
                css={{ '&::-webkit-scrollbar': { display: 'none' } }}
            >
                {children}
            </Flex>
        </Box>
    )
}