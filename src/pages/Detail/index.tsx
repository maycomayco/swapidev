import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { People } from "../../types/People";
import CardDetail from "../../components/CardDetail";
import Header from "../../components/Header";
import Spinner from "../../components/Spinner";

const Detail = ({ people }: { people: Array<People> }) => {
  const [character, setCharacter] = useState<People>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    // eslint-disable-next-line eqeqeq
    const filteredPerson = people.find((elem) => elem.id == id);
    if (!filteredPerson) {
      if (!loading) setError(true);
    } else {
      setCharacter(filteredPerson);
      setError(false);
    }
    setLoading(false);
  }, [people]);

  return (
    <>
      <Header />
      {loading && <Spinner />}
      {error && "NOT FOUND!"}
      {character && <CardDetail character={character as People} />}
    </>
  );
};

export default Detail;
