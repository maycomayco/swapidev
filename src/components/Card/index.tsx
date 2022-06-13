import {
  Heading,
  Box,
  Center,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { People as IPeople } from "../../types/People";

const Card = ({ person }: { person: IPeople }) => {
  const navigate = useNavigate();
  const { name, id } = person;

  const handleOnClick = (personId: number) => navigate(`/people/${personId}`);

  return (
    <Center py={6}>
      <Box
        maxW="320px"
        w="full"
        bg={useColorModeValue("white", "gray.900")}
        boxShadow="2xl"
        rounded="lg"
        p={4}
        textAlign="center"
      >
        <Heading fontSize="2xl" fontFamily="body">
          {name}
        </Heading>

        <Stack mt={4} direction="row" spacing={4}>
          <Button
            flex={1}
            fontSize="sm"
            bg="blue.500"
            color="white"
            boxShadow="0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            _hover={{
              bg: "blue.600",
            }}
            _focus={{
              bg: "blue.600",
            }}
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            onClick={() => handleOnClick(id!)}
          >
            View character
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};

export default Card;
