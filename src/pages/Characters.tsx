import { useEffect } from "react";
import { useState } from "react";
import CharacterCard from "../components/CharacterCard";
import axios from "axios";
import Pagination from "../components/Pagination";

function Characters() {
  const [page, setPage] = useState(1);
  const [character, setCharacter] = useState([]);

  const characterURL = `https://rickandmortyapi.com/api/character?page=${page}`;

  const paginaAnterior = () => {
    const paginaAterior = page;

    if (paginaAterior === 1) {
      return null;
    } else {
      setPage(paginaAterior - 1);
    }
  };

  const paginaSiguiente = () => {
    const paginaSiguiente = page;

    setPage(paginaSiguiente + 1);
  };

  const fetchData = async () => {
    await axios
      .get(characterURL)
      .then((response) => {
        setCharacter(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {character.map((item: any) => (
          <CharacterCard key={item.id} character={item} />
        ))}
      </div>

      <div className="my-10 flex justify-center">
        <Pagination
          paginaAnterior={paginaAnterior}
          paginaSiguiente={paginaSiguiente}
        />
      </div>
    </>
  );
}

export default Characters;
