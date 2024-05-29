import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";
import LocationCard from "../components/LocationCard";

function Locations() {
  const [page, setPage] = useState(1);
  const [locations, setLocations] = useState([]);

  const episodeURL = `https://rickandmortyapi.com/api/location?page=${page}`;

  const fetchData = async () => {
    await axios
      .get(episodeURL)
      .then((response) => {
        setLocations(response.data.results);
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
        {locations.map((item: any) => (
          <LocationCard key={item.id} location={item} />
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

export default Locations;
