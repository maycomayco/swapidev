import { SimpleGrid } from "@chakra-ui/react";
import { People } from "../../types/People";
import Card from "../Card";

const PeopleList = ({ people }: { people: Array<People> }) => (
  <SimpleGrid columns={2} spacing={5}>
    {people.map((person) => (
      <Card key={person.created} person={person} />
    ))}
  </SimpleGrid>
);

export default PeopleList;
