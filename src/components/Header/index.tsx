import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import BabyYoda from "../../assets/icons/BabyYoda";

const Header = () => (
  <Box textAlign="center" py={10} px={6}>
    <Flex justify="center">
      <BabyYoda />
    </Flex>
    <Heading as="h2" size="xl" mt={6} mb={2}>
      <Link to="/">Swapidev</Link>
    </Heading>
    <Text color="gray.500">
      Here you can get information about your favorite movie:
      <br />
      <b>Star wars</b>
    </Text>
  </Box>
);
export default Header;
