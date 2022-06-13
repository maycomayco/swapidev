import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const Home = () => (
  <>
    <Header />
    <Heading fontSize="xl" textAlign="center">
      Available resources
    </Heading>
    <Box py={2} textAlign="center">
      <Link to="people">👉 People</Link>
    </Box>
  </>
);

export default Home;
