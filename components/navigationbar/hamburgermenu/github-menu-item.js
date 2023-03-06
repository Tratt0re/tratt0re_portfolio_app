import { Box, HStack, Text, Link} from '@chakra-ui/react';
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

export default function GithubMenuItem({ delay }) {
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
                <Link href={"https://github.com/Tratt0re/tratt0re_portfolio_app"} isExternal rel="noopener noreferrer">
                    <HStack spacing={1}>
                        <Text fontSize={{ base: "2xl", sm: '2xl', md: '4xl', lg: "5xl", xl: "6xl" }} >
                            < FaGithub />
                        </Text>

                        <Text fontSize={{ base: "2xl", sm: '2xl', md: '4xl', lg: "5xl", xl: "6xl" }} >
                            Source
                        </Text>
                    </HStack>
                </Link>
            </motion.div>

        </motion.div>
    );
};