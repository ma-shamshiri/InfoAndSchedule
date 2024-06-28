import React, { useEffect } from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

import AOS from "aos";
import "aos/dist/aos.css";

export const BlockTeamGrid: React.FC = () => {
    useEffect(() => {
        window.onload = () => {
            AOS.init({
                duration: 800,
                easing: "ease-in-out",
            });
        };
    }, []);

    return (
        <Box
            className="block block--dark block--skewed-right block-showcase aos-animate"
            padding="6rem 2rem"
            paddingBottom="10rem"
            bg={useColorModeValue(
                "#F0E2B6",
                "#1E2142"
            )}
            color="#16F8B6"
            overflow={"hidden"}
        >
            <Box
                className="block__header container aos-animate"
                textAlign="center"
                maxWidth="100rem"
                margin="0 auto"
                data-aos="fade-up"
                data-aos-duration="500"
            >
                <Text
                    className="h2"
                    color={useColorModeValue("gray.100", "#16F8B6")}
                    marginBottom="2rem"
                    marginTop="0"
                    fontSize={{ base: "4.5rem", lg: "6rem" }}
                    fontWeight="bold"
                    lineHeight="1.5"
                >
                    {"Volleyball Match Live Updates"}
                </Text>

                <Text
                    className="p"
                    color={useColorModeValue("gray.200", "white")}
                    marginBottom="1rem"
                    marginTop="0"
                    fontSize={{ base: "2.0rem", lg: "2.5rem" }}
                    lineHeight="1.5"
                >
                    {"Stay Updated with Real-Time Match Results and Highlights"}
                </Text>

            </Box>
        </Box>
    );
};

// export default BlockTeamGrid;
