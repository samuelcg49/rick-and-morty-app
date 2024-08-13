import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import CharacterCard from "../components/CharacterCard";

function LocationDetail() {
  const { id } = useParams<{ id: string }>();
  const [location, setLocation] = useState<any>({});
  const [characters, setCharacters] = useState<any[]>([]);

  const fetchLocation = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/location/${id}`
      );
      const locationData = response.data;
      setLocation(locationData);

      const charactersPromises = locationData.residents.map(
        (characterURL: string) => axios.get(characterURL)
      );
      const charactersResponses = await Promise.all(charactersPromises);
      const charactersData = charactersResponses.map((res) => res.data);

      setCharacters(charactersData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLocation();
  }, [id]);

  return (
    <>
      <div className="mb-12 flex flex-col items-center">
        <h1 className="mb-5 text-4xl font-bold">{location.name}</h1>
        <p>
          {location.type} - {location.dimension}
        </p>
        <h2 className="mt-12 mb-7 text-xl font-bold">Residents</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7">
          {characters.map((item: any) => (
            <CharacterCard key={item.id} character={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default LocationDetail;
