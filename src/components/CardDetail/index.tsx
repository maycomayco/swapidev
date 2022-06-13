/* eslint-disable camelcase */
import {
  Heading,
  Box,
  Center,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { People as IPeople } from "../../types/People";

const CardDetail = ({ character }: { character: IPeople }) => {
  const {
    name,
    birth_year,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    gender,
  } = character;

  return (
    <Center>
      <Box
        maxW="320px"
        w="full"
        bg={useColorModeValue("white", "gray.900")}
        boxShadow="2xl"
        rounded="lg"
        p={6}
      >
        <Link to="/people">
          <Text fontSize="sm">⬅️ Back to list</Text>
        </Link>
        <Box textAlign="center" py={5}>
          <Heading fontSize="2xl" fontFamily="body">
            {name}
          </Heading>
          <Text fontWeight={600} color="gray.500" mb={4}>
            {birth_year}
          </Text>
          <Text color={useColorModeValue("gray.700", "gray.400")} px={3}>
            Height: {height}
            <br />
            Mass: {mass}
            <br />
            Hair color: {hair_color}
            <br />
            Skin color: {skin_color}
            <br />
            Eye color: {eye_color}
            <br />
            Gender: {gender}
          </Text>
        </Box>
      </Box>
    </Center>
  );
};

export default CardDetail;
