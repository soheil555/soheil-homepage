import {
  Box,
  Container,
  Link,
  Heading,
  Stack,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import NextLink from "next/link";
import Logo from "./logo";
import { IoLogoGithub } from "react-icons/io5";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";

interface LinkItemProps {
  href: string;
  path: string;
  target?: string;
  children: ReactNode;
}

function LinkItem({ href, path, target, children }: LinkItemProps) {
  const isActive = href === path;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");

  return (
    <NextLink href={href} passHref>
      <Link
        color={isActive ? undefined : inactiveColor}
        bg={isActive ? "teal.50" : undefined}
        p={2}
        target={target}
      >
        {children}
      </Link>
    </NextLink>
  );
}

interface NavBarProps {
  path: string;
}

export default function NavBar({ path }: NavBarProps) {
  return (
    <Box as="nav" width="100%" bg={useColorModeValue("#F4EDE4", "#202023")}>
      <Container
        p={2}
        maxW="container.md"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Flex align="center" mr={7}>
          <Heading size="lg">
            <Logo />
          </Heading>
        </Flex>

        <Stack
          display={{ base: "none", md: "flex" }}
          direction={{ md: "row" }}
          gap={4}
          flexGrow={1}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>

          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>

          <LinkItem
            target="_blank"
            href="https://github.com/soheil555/soheil-homepage"
            path={path}
          >
            <Flex align="center" gap={2}>
              <IoLogoGithub /> Source
            </Flex>
          </LinkItem>
        </Stack>

        <Box flexGrow={1} display="flex" justifyContent="flex-end">
          <ThemeToggleButton />

          <Box ml={4} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                variant="outline"
                as={IconButton}
                icon={<HamburgerIcon />}
              />

              <MenuList>
                <NextLink href="/">
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>

                <NextLink href="/works">
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>

                <NextLink href="/posts">
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>

                <Link
                  target="_blank"
                  href="https://github.com/soheil555/soheil-homepage"
                >
                  <MenuItem icon={<IoLogoGithub />} as={Link}>
                    View Source
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
