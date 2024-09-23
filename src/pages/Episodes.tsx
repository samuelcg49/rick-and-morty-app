import { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "../components/EpisodeCard";
import Pagination from "../components/Pagination";
import { useSearch } from '../context/SearchContext';

function Episodes() {
  const [page, setPage] = useState(1);
  const [episodes, setEpisodes] = useState([]);

  const { searchTerm } = useSearch() || {};


  const fetchData = async () => {
    if (searchTerm == "" || searchTerm == null) { // Si no hay busqueda, el varlor es vacío
      var busqueda = ""
    }else{
      busqueda = `?name=${searchTerm}&`; // Si hay busqueda, se añade el parámetro de búsqueda
    }

    await axios
      .get(`https://rickandmortyapi.com/api/episode/${busqueda}?page=${page}`)
      .then((response) => {
        setEpisodes(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [page, searchTerm]);

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
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
