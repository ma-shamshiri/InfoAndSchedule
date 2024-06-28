import React, { useRef } from "react";
import { Box, Text, useColorModeValue, } from "@chakra-ui/react";
import { motion } from "framer-motion";

const initialVariants: { [key: string]: any } = {
    initial: {
        y: 150,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: "easeInOut",
            staggerChildren: 0.1,
        },
    },
};

export const BlockEvent: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <Box
            className="block block--white"
            bg={"#23214A"}
            overflow={"hidden"}
        >
            <Box
                className="block container block-domain"
                padding="6rem 2rem"
                paddingBottom={{ base: "13rem", lg: "17rem" }}
                margin="0 auto"
                width="100%"
            >
                <motion.div
                    ref={ref}
                    variants={initialVariants}
                    initial="initial"
                    whileInView="animate"
                >
                    <motion.div
                        ref={ref}
                        variants={initialVariants}
                        initial="initial"
                        whileInView="animate"
                    >
                        <Box className="block__header" textAlign="center" width="100%">
                            <Text
                                className="h2"
                                color={useColorModeValue("#f04e2d", "gray.100")}
                                marginBottom="1rem"
                                marginTop="0"
                                fontSize={{ base: "5.5rem", lg: "7rem" }}
                                fontWeight="bold"
                                lineHeight="1.1"
                            >
                                {"Upcoming Volleyball Matches"}
                            </Text>
                            <Text
                                className="p"
                                color={useColorModeValue("red", "gray.200")}
                                fontSize={{ base: "2.2rem", lg: "2.8rem" }}
                                marginBottom="6rem"
                            >
                                {"Your Guide to Upcoming Games and Tournaments"}
                            </Text>
                        </Box>
                    </motion.div>
                </motion.div>
            </Box>
        </Box>
    );
};

// export default BlockEvent;
