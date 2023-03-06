import { motion } from "framer-motion"

export default function FadeInAnimation({ children, ...props }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
            {...props}
        >
            {children}
        </motion.div>
    )
}