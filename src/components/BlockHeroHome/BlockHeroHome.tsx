import React from "react";
import { useRef } from "react";
import { Box, Text, useColorModeValue, } from "@chakra-ui/react";

export const BlockHeroHome: React.FC = () => {

  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
        <Box
          className="block block--dark"
          padding="6rem 2rem 6rem 2rem"
          bg={useColorModeValue(
            "#6868F7",
            "linear-gradient(180deg, #000, #0E0E29)"
          )}
        >
          <Box
            className="block__header container"
            textAlign="left"
            maxWidth="1140px"
            margin="0 auto"
          >
            <Text
              className="h2 block__heading"
              color={useColorModeValue("#fff", "#fff")}
              marginBottom="1rem"
              marginTop="0"
              fontSize={{ base: "3rem", md: "4rem", lg: "4rem", xl: "4rem" }}
              fontWeight="bold"
              lineHeight="1.5"
              textAlign={{ base: "center", lg: "initial" }}
            >
              {"General Match Information"}
            </Text>
            <Text
              className="p"
              fontSize={{ base: "1.8rem", md: "2.2rem", lg: "2.5rem" }}
              marginTop={10}
              color={useColorModeValue("gray.300", "#FF3A2D")}
              textAlign={{ base: "center", lg: "initial" }}
              lineHeight="1.5"
            >
              {"Everything You Need to Know About Volleyball Matches and Rules"}
            </Text>
          </Box>
        </Box>

        <Box
          width="100%"
          height={{ base: "55vh", md: "80vh", lg: "100vh", xl: "110vh" }}
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          ref={ref}
          background={"linear-gradient(180deg, #0e0e29, #0e0e29, #272763, #272763)"}
        >
        </Box>
    </>
  );
};

// export default BlockHero6;
