import { motion } from "framer-motion"
import { Button, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function NavigationLink({ title, sectionId }) {

    const router = useRouter()

    function scrollToSection(id) {
        try {
            router.push(`/#${id}`)
        } catch (error) {
            console.error('Unable to scroll to component', error);
        }
    }

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <Button
                colorScheme={useColorModeValue("orange", "teal")}
                variant={'ghost'}
                onClick={() => scrollToSection(sectionId)}
            >
                <Text>
                    {title}
                </Text>
            </Button>
        </motion.div>
    )
}