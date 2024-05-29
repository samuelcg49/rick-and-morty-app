import { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "../components/EpisodeCard";
import Pagination from "../components/Pagination";

function Episodes() {
  const [page, setPage] = useState(1);
  const [episodes, setEpisodes] = useState([]);

  const episodeURL = `https://rickandmortyapi.com/api/episode?page=${page}`;

  const fetchData = async () => {
    await axios
      .get(episodeURL)
      .then((response) => {
        setEpisodes(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [page]);

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

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {episodes.map((item: any) => (
          <EpisodeCard key={item.id} episode={item} />
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

export default Episodes;
