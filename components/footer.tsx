import { Container, Text, Box } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box textAlign="center">
      <Text color="gray.400" p={4}>
        {new Date().getFullYear()} Soheil.
      </Text>
    </Box>
  );
}
