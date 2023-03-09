import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NavigationBar from "./navigationbar/navigationbar";
import Menu from "./navigationbar/hamburgermenu/menu";
import Head from "next/head";
import Footer from "./other/footer";

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
                <title>Salvatore De Luca | Mobile & FullStack Developer | Portfolio</title>

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Full-stack and mobile developer with experience in Swift, Node.js, React, and Python. Check out my portfolio!" />
                <meta name="author" content="Salvatore De Luca" />
                <meta name="author" content="Tratt0re" />

                {/*Facebook - Linkedin - Other*/}
                <meta property="og:title" content="Salvatore De Luca | FullStack & Mobile Developer | Portfolio" />
                <meta property="og:description" content="Full-stack and mobile developer with experience in Swift, Node.js, React, and Python. Check out my portfolio!" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://tratt0re.dev/generic-og.png" />
                <meta property="og:url" content="https://tratt0re.dev" />
                <meta property="og:site_name" content="Salvatore De Luca Portfolio" />

                {/*Twitter*/}
                <meta name="twitter:title" content="Salvatore De Luca | FullStack & Mobile Developer | Portfolio" />
                <meta name="twitter:description" content="Full-stack and mobile developer with experience in Swift, Node.js, React, and Python. Check out my portfolio!" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:image" content="https://tratt0re.dev/twitter-og.png" />
                <meta name="twitter:site" content="@tratt0re1" />
                <meta name="twitter:url" content="https://tratt0re.dev" />

                {/*iOS*/}
                <link rel="apple-touch-icon" href="https://tratt0re.dev/apple-touch-icon.png" />

                {/*Android*/}
                <link rel="icon" sizes="192x192" href="https://tratt0re.dev/android-icon.png" />
            </Head>

            <NavigationBar toggleMenu={toggleMenu} />
            <Menu isOpen={isOpen} onClose={toggleMenu}></Menu>

            <Flex
                flex="1"
                direction="column"
                overflowY="scroll"
                scrollSnapType="y mandatory"
                scrollPaddingTop={{ base: "64px", sm: "56px" }}
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