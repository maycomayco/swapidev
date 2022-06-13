import { Box } from "@chakra-ui/react";
import PeopleList from "../../components/PeopleList";
import { People as TPeople } from "../../types/People";
import Header from "../../components/Header";
import Spinner from "../../components/Spinner";

const People = ({
  loading,
  people,
}: {
  loading: boolean;
  people: Array<TPeople>;
}) => (
  <>
    <Header />
    {loading ? (
      <Box textAlign="center">
        <Spinner />
      </Box>
    ) : (
      <PeopleList people={people} />
    )}
  </>
);

export default People;
