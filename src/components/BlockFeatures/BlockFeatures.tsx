import React, { useEffect } from "react";
import {
  Box,
  Link as ChakraLink,
  Grid,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { GiTalk } from "react-icons/gi";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles
import { ted, tedx, tedxavelorne } from "../../assets";

const featuresData = [
  {
    icon: GiTalk,
    iconColor: "var(--color-primary)",
    title: "Rule1",
    description: "Rule1 Description",
    linkText: "Explore More",
    linkUrl: "#",
    image: {
      src: ted,
      alt: "easy",
    },
    size: "40px",
  },
  {
    icon: GiTalk,
    iconColor: "var(--color-primary)",
    title: "Rule2",
    description: `Rule2 Description`,
    linkText: "Explore More",
    linkUrl:
      "#",
    image: {
      src: tedx,
      alt: "easy",
    },
    size: "40px",
  },

  {
    icon: GiTalk,
    iconColor: "var(--color-primary)",
    title: "Rule3",
    description: `Rule3 Description`,
    linkText: "Explore More",
    linkUrl: "#",
    image: {
      src: tedxavelorne,
      alt: "easy",
    },
    size: "40px",
  },
];

interface FeatureProps {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  image: {
    src: string;
    alt: string;
  };
  size: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description, linkText, linkUrl }) => {

  return (
    <Box
      className="feature__content"
    >
      <Text
        className="h3 feature__heading"
        color={useColorModeValue("gray.800", "white")}
        fontSize={{ base: "2.8rem", lg: "2.5rem" }}
        fontWeight="bold"
        lineHeight="1.3"
        margin="1rem 0"
      >
        {title}
      </Text>
      <Text
        className="p"
        marginTop="0"
        marginBottom="1.5rem"
        color={useColorModeValue("gray.700", "gray.400")}
      >
        {description}
      </Text>
      <ChakraLink
        className="link-arrow"
        href={linkUrl}
        fontSize={{ base: "2rem", lg: "1.7rem" }}
        fontWeight="bold"
        color={useColorModeValue("#fc2d03", "tomato")}
        textTransform="uppercase"
        target="_blank"
        _hover={{
          "::after": {
            marginLeft: "10px",
          },
        }}
        sx={{
          "::after": {
            content: '">"',
            marginLeft: "5px",
            transition: "margin 0.15s",
          },
        }}
      >
        {linkText}
      </ChakraLink>
    </Box>
  );
};

interface FeatureImageProps {
  image: {
    src: string;
    alt: string;
  };
}

const FeatureImage: React.FC<FeatureImageProps> = ({ image }) => (
  <Box as="picture">
    <Image
      className="feature__image"
      src={image.src}
      alt={image.alt}
      width="100%"
      borderRadius={"5%"}
      boxShadow="0 0 30px 1px black"
    />
  </Box>
);

export const BlockFeatures: React.FC = () => {
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
      className="block block--dark aos-animate"
      bg={useColorModeValue("#F0E2B6	", "gray.800")}
      width="100%"
      overflow={"hidden"}
    >
      <Box
        className="block container"
        padding="6rem 2rem"
        maxWidth="114rem"
        margin="0 auto"
      >
        <Box
          className="block__header aos-animate"
          textAlign="center"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <Text
            className="h2 block__heading"
            color={useColorModeValue("gray.600", "#E1DCA9")}
            marginBottom="1rem"
            marginTop="0"
            fontSize={{ base: "5.5rem", lg: "7rem" }}
            fontWeight="bold"
            lineHeight="1.1"
          >
            {"featureTitle"}
          </Text>
          <Text
            className="p"
            color={useColorModeValue("gray.600", "silver")}
            fontSize={{ base: "2.0rem", lg: "2.8rem" }}
            marginBottom="11rem"
          >
            {"featureSubTitle"}
          </Text>
        </Box>
        {featuresData.map((feature, index) => (
          <Box
            key={index}
            className={`grid grid--1x2 feature feature-${index % 2 === 0 ? "even" : "odd"
              }`}
          >
            <Grid
              display="grid"
              templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
              gap="4rem 2rem"
              margin="10rem 0"
              sx={{
                order: index % 2 === 0 ? 1 : 2,
              }}
            >
              {index % 2 === 0 ? (
                <>
                  <Box
                    className="aos-animate"
                    data-aos="fade-right"
                    data-aos-duration="500"
                  >
                    <Feature {...feature} size={feature.size} />
                  </Box>
                  <Box
                    className="aos-animate"
                    data-aos="fade-left"
                    data-aos-duration="500"
                  >
                    <FeatureImage image={feature.image} />
                  </Box>
                </>
              ) : (
                <>
                  <Box
                    className="aos-animate"
                    data-aos="fade-right"
                    data-aos-duration="500"
                  >
                    <FeatureImage
                      image={feature.image}
                      data-aos-duration="500"
                    />
                  </Box>
                  <Box
                    className="aos-animate"
                    data-aos="fade-left"
                    data-aos-duration="500"
                  >
                    <Feature {...feature} size={feature.size} />
                  </Box>
                </>
              )}
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

// export default BlockFeatures;
