import { Box } from "@chakra-ui/react";
import { IconButton, Stack, useColorModeValue } from "@chakra-ui/react";
import { BsInstagram, BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";

export const BlockFooter = () => {

  return (
    <Box
      className="block block--dark footer"
      color="#7b858b"
      padding="6rem 2rem"
      paddingBottom="10rem"
      overflow={"hidden"}
      bg={useColorModeValue("#B0C9C5", "#232323")}
    >
      <Box className="grid grid--1x2" maxWidth="1140px" margin="0 auto">
      </Box>
      <Stack
        display="flex"
        flexDirection="row"
        spacing={6}
        justifyContent={"center"}
        marginTop={{ base: "5rem", lg: "2rem" }}
      >
        <Box
          as="a"
          href="#"
          target="_blank"
        >
          <IconButton
            aria-label="linkedin"
            variant="ghost"
            size="xl"
            icon={<BsLinkedin size="20px" />}
            _hover={{
              bg: useColorModeValue("gray.700", "gray.200"),
              color: useColorModeValue("gray.200", "gray.700"),
            }}
            isRound
            boxSize="4rem"
          />
        </Box>
        <Box
          as="a"
          href="#"
          target="_blank"
        >
          <IconButton
            aria-label="twitter"
            variant="ghost"
            size="xl"
            icon={<BsTwitter size="20px" />}
            _hover={{
              bg: useColorModeValue("gray.700", "gray.200"),
              color: useColorModeValue("gray.200", "gray.700"),
            }}
            isRound
            boxSize="4rem"
          />
        </Box>
        <Box
          as="a"
          href="#"
          target="_blank"
        >
          <IconButton
            aria-label="instagram"
            variant="ghost"
            size="xl"
            icon={<BsInstagram size="20px" />}
            _hover={{
              bg: useColorModeValue("gray.700", "gray.200"),
              color: useColorModeValue("gray.200", "gray.700"),
            }}
            isRound
            boxSize="4rem"
          />
        </Box>
        <Box
          as="a"
          href="#"
          target="_blank"
        >
          <IconButton
            aria-label="facebook"
            variant="ghost"
            size="xl"
            icon={<BsFacebook size="20px" />}
            _hover={{
              bg: useColorModeValue("gray.700", "gray.200"),
              color: useColorModeValue("gray.200", "gray.700"),
            }}
            isRound
            boxSize="4rem"
          />
        </Box>
      </Stack>
    </Box>
  );
};

// export default BlockFooter;
