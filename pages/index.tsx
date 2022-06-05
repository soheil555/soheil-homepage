import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  useColorModeValue,
  Heading,
  Link,
  Button,
  VStack,
  Text,
} from "@chakra-ui/react";
import Section from "../components/section";
import { BioSection, BioYear } from "../components/bio";
import { IoLogoDiscord, IoLogoGithub } from "react-icons/io5";
import { EmailIcon } from "@chakra-ui/icons";

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
        technology and decentralized web.
      </Box>

      <Box display={{ md: "flex" }} mt={7}>
        <Box flexGrow={1}>
          <Heading>Soheil</Heading>
          <p>Building for the decentralized web</p>
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
        <Text>
          I am a freelance developer who loves to contribute to open source. I
          currently mostly participate in web3 Hackathons and Bounties to grow
          with project-based learning. I am open to new job opportunities. Feel
          free to contact me if you have any questions or have a cool project
          and looking for a team member.
        </Text>

        <Box display="flex" mt="3" justifyContent="center">
          <Link href="https://gitcoin.co/soheil555" isExternal>
            <Button colorScheme="teal">Gitcoin Profile</Button>
          </Link>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading variant="section-title">Bio</Heading>
        <VStack align="start" spacing={13}>
          <BioSection>
            <BioYear>2000</BioYear> Born.
          </BioSection>

          <BioSection>
            <BioYear>2016</BioYear> Started my interest in Computers(Network
            administration, Linux, Microsoft servers, Cisco, Ethical Hacking).
          </BioSection>

          <BioSection>
            <BioYear>2021</BioYear> Worked at NadinSoft as a backend developer.
          </BioSection>

          <BioSection>
            <BioYear>2022 to present</BioYear> Working as a freelancer
          </BioSection>
        </VStack>
      </Section>

      <Section delay={0.3}>
        <Heading variant="section-title">On the web</Heading>
        <VStack align="start" spacing={13}>
          <Link href="https://www.github.com/soheil555" isExternal>
            <Button variant="ghost" leftIcon={<IoLogoGithub />}>
              @soheil555
            </Button>
          </Link>

          <Link href="https://discord.com/users/soheil#1703" isExternal>
            <Button variant="ghost" leftIcon={<IoLogoDiscord />}>
              soheil#1703
            </Button>
          </Link>

          <Link href="mailto:soheilrasekh555@gmail.com" isExternal>
            <Button variant="ghost" leftIcon={<EmailIcon />}>
              soheilrasekh555@gmail.com
            </Button>
          </Link>
        </VStack>
      </Section>
    </Container>
  );
};

export default Home;
