import { useState, useEffect } from "react";
import getPeople from "../../services/getPeople";
import { People } from "../../types/People";

const usePeople = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [people, setPeople] = useState<Array<People>>([]);

  useEffect(() => {
    setLoading(true);
    getPeople().then((resp) => {
      setPeople(resp);
      setLoading(false);
    });
  }, []);

  return { loading, people };
};

export default usePeople;
