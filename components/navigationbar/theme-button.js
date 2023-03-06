import { motion } from 'framer-motion'
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function ThemeButton({ }) {
    const { toggleColorMode } = useColorMode()
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <IconButton
                colorScheme={useColorModeValue('purple', 'orange')}
                aria-label='Call Segun'
                size='md'
                icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                onClick={toggleColorMode}
            />
        </motion.div >
    )

}