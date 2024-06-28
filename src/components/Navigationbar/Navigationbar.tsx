import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Image,
  Link,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

// import { Sidebar } from "./Sidebar";
import { homeIcon } from "../../assets";
import { MenuLinks } from "../MenuLinks";
import { navigationLinks } from "../layout/navigation-links";

export const Navigationbar: React.FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setIsNavVisible(currentPosition < scrollPosition);
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <Box
        bg={useColorModeValue("rgb(241,241,241)", "black")}
        py={{ base: "0.8rem" }}
        px={{ base: "1rem" }}
        position="sticky"
        zIndex="999"
        top={isNavVisible ? "0" : "-100px"}
        transition="top 0.3s"
      >
        <Flex
          justify={{ base: "space-between", lg: "space-between" }}
          align="center"
        >
          <Flex align="center">
            <Link
              display={{ base: "none", md: "block" }}
              as={RouterLink}
              to={"/"}
              cursor="pointer"
            >
              <Flex justifyContent={"center"} alignItems={"center"}>
                <HStack>
                  <Image
                    src={homeIcon}
                    boxSize={{ base: "35px", md: "45px", lg: "45px", xl: "50px" }}
                  />
                </HStack>
              </Flex>
            </Link>
            <Box
              position="relative"
            >
              <MenuLinks menuLinks={navigationLinks} />
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Outlet />
    </>
  );
};

// export default Navigationbar;
