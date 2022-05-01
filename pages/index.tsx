import type { NextPage } from "next";
import Image from "next/image";
import { Container, Box, useColorModeValue, Heading } from "@chakra-ui/react";
import Section from "../components/section";

const Home: NextPage = () => {
  return (
    <Container>
      <Box
        bg={useColorModeValue("gray.100", "gray.700")}
        p={2}
        mt={5}
        borderRadius={10}
        textAlign="center"
      >
        Hello, I am a full-stack developer with a passion for blockchain
        technology and web3.
      </Box>

      <Box display={{ md: "flex" }} mt={7}>
        <Box flexGrow={1}>
          <Heading>Soheil Rasekh</Heading>
          <p>Developer</p>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            border="solid"
            borderRadius="full"
            overflow="hidden"
            height="100px"
            width="100px"
            display="inline-block"
          >
            <Image
              src="/images/profile.png"
              alt="profile image"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading variant="section-title">Work</Heading>
        <p>hey there</p>
      </Section>
    </Container>
  );
};

export default Home;
