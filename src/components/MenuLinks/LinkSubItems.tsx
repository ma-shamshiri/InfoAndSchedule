import { Box, List, ListItem, Text, useColorModeValue, Link as ChakraLink } from "@chakra-ui/react";
import { SubLinksBoxProps } from "./interfaces";

export const SubLinksBox = (props: SubLinksBoxProps) => {
  const { subLinks, extraLinks } = props;

  return (
    <Box
      position="absolute"
      top="2.4rem"
      width="fit-content"
      boxShadow="0 0 30px 1px black"
      display={{ base: 'none', groupHover: 'flex' }}
      borderRadius="7px"
    >
      <List
        padding="1.3rem"
        width="35rem"
        height="fit-content"
        flexDirection="column"
        bg={useColorModeValue(
          "linear-gradient(to right bottom, #ebebeb, #f7f7f7, #fcfcfc)",
          "linear-gradient(to right bottom, #0e0e29, #0e0e29, #272763, #272763)"
        )}
        borderRadius="7px"
      >
        {subLinks.map((subLink) => (
          <ListItem
            key={subLink.name}
            height="16"
            borderRadius="xl"
            display="flex"
            alignItems="center"
            justifyContent="start"
            fontWeight="bold"
            _hover={{ backgroundColor: useColorModeValue("gray.200", "gray.700") }}
            cursor="pointer"
            paddingY="3rem"
          >
            <ChakraLink
              href={subLink.link}
              className="flex items-center"
              _hover={{ textDecoration: 'none' }}
            >
              <Box
                className="ml-5"
                height="3.9rem"
                width="3.9rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="lg"
                backgroundColor={subLink.color}
              >
                <Box
                  className="h-3/5 w-3/5"
                  color={useColorModeValue("gray.800", "gray.200")}
                  textAlign="center"
                >
                  {subLink.icon}
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" marginLeft="5">
                <Text
                  fontSize="1.5rem"
                  color={useColorModeValue("gray.600", "gray.200")}
                  marginBottom="1"
                >
                  {subLink.name}
                </Text>
                <Text
                  fontSize="1.3rem"
                  color={useColorModeValue("gray.500", "gray.500")}
                >
                  {subLink.description}
                </Text>
              </Box>
            </ChakraLink>
          </ListItem>
        ))}
      </List>
      {extraLinks && (
        <div className="flex">
          <div className="h-[calc(100%-3em)] my-auto w-[1px] bg-gray-300 dark:bg-gray-700" />
          <ul className="w-56 p-2">
            {extraLinks?.map((extraLink) => (
              <ChakraLink
                href={extraLink.link}
                className="flex items-center w-full"
                _hover={{ textDecoration: 'none' }}
              >
                <li
                  key={extraLink.name}
                  className="p-2 h-10 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg flex items-center justify-start cursor-pointer text-sm font-semibold text-gray-600 dark:text-gray-200"
                >
                  {extraLink.name}
                </li>
              </ChakraLink>
            ))}
          </ul>
        </div>
      )}
    </Box>
  );
};
