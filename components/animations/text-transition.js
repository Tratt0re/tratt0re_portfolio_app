import { motion } from "framer-motion"

export default function TextTransitionAnimation({ text, splitAtIndex = -1 }) {
    return (
        <>
            {
                text.split("").map((char, index) => (
                    <span key={`${text}${index}`}>
                        {(splitAtIndex !== -1 && index === splitAtIndex) && <br />}
                        <motion.span
                            key={`${text}${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: index * 0.04, duration: 0.4 },
                            }}
                        >
                            {char}
                        </motion.span>
                    </span>
                ))
            }
        </>
    )
}