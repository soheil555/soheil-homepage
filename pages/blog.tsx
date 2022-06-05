import {
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Section from "../components/section";

const Blog: NextPage = () => {
  return (
    <Section delay={0.1}>
      <Container
        h="80vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection={{ base: "column", lg: "row" }}
        gap={10}
      >
        <Heading fontSize="5xl" textAlign="center">
          Under Construction
        </Heading>
        <Image src="/images/under-construction.png" />
      </Container>
    </Section>
  );
};

export default Blog;
