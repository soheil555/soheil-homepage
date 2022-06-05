import { ReactNode } from "react";
import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import NavBar from "./navbar";
import Footer from "./footer";

interface Props {
  children: ReactNode;
  path: string;
}

export default function Layout({ children, path }: Props) {
  return (
    <Box>
      <Head>
        <title>Soheil - Homepage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <NavBar path={path} />

      <Container pt={12} pb={3} maxW="container.md">
        {children}
      </Container>

      <Footer />
    </Box>
  );
}
