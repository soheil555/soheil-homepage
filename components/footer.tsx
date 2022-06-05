import { Text, Box, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box textAlign="center">
      <Text color="gray.400" p={4}>
        {new Date().getFullYear()} Soheil. Based on{" "}
        <Link color="teal.500" isExternal href="https://www.craftz.dog/">
          craftz.dog
        </Link>
      </Text>
    </Box>
  );
}
