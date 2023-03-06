import { motion } from "framer-motion"
import { HStack, Link, Text } from "@chakra-ui/react";
import CustomTooltip from "../other/custom-tooltip";
import { FaGithub } from "react-icons/fa";

export default function GithubLink({ }) {

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <CustomTooltip textContent={["Like what you see?", "Check out the repo", "it's free 🤙🏻"]}>
                <Link href={"https://github.com/Tratt0re/tratt0re_portfolio_app"} isExternal rel="noopener noreferrer">
                    <HStack spacing={1}>
                        < FaGithub />
                        <Text>
                            Source
                        </Text>
                    </HStack>
                </Link>
            </CustomTooltip>

        </motion.div>

    )
}