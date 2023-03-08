import Footer from '@/components/other/footer';
import navigationLinks from '@/lib/navigationLinks';
import { Box, Divider, Flex, Spacer, useColorModeValue, VStack } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import DividerMenuItem from './divider-menu-item';
import GithubMenuItem from './github-menu-item';
import MenuItem from './menu-item';

export default function Menu({ isOpen, onClose }) {

    return (
        <AnimatePresence>
            {isOpen && (
                <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    zIndex={998}
                    h="100%"
                    w="100%"
                    backdropFilter="blur(80px)"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        key="menu"
                        style={{
                            height: "100%",
                            width: "100%",
                            backgroundColor: useColorModeValue("#ffffff20", "#00000020")
                        }}
                    >
                        <Flex flexDirection={"column"} h="100%" w="100%" px="12" pt="106px">
                            <VStack w="100%" align={"start"}>
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={{
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.5,
                                            },
                                        },
                                    }}
                                >
                                    {navigationLinks.map((item, index) => (
                                        <MenuItem key={`menu-item-${item.id}`} delay={index * 0.5} onItemClick={onClose} title={item.title} sectionId={item.sectionId} />
                                    ))}
                                </motion.div>
                                <DividerMenuItem delay={navigationLinks.length * 0.5} />
                                <GithubMenuItem delay={(navigationLinks.length + 1) * 0.5} />
                            </VStack>
                            <Spacer />
                            <Footer />
                        </Flex>
                    </motion.div>
                </Box>
            )
            }
        </AnimatePresence >
    );
};
