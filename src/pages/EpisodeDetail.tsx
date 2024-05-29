import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import CharacterCard from "../components/CharacterCard";

function EpisodeDetail() {
  const { id } = useParams<{ id: string }>();
  const [episode, setEpisode] = useState<any>({});
  const [characters, setCharacters] = useState<any[]>([]);

  const fetchEpisode = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/episode/${id}`
      );
      const episodeData = response.data;
      setEpisode(episodeData);

      const charactersPromises = episodeData.characters.map(
        (characterURL: string) => axios.get(characterURL)
      );
      const charactersResponses = await Promise.all(charactersPromises);
      const charactersData = charactersResponses.map((res) => res.data);
      setCharacters(charactersData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEpisode();
  }, [id]);

  return (
    <>
      <div className="mb-12 flex flex-col items-center">
        <h1 className="mb-5 text-4xl font-bold">{episode.name}</h1>
        <p>
          {episode.episode} - {episode.air_date}
        </p>
        <h2 className="mt-12 mb-7 text-xl font-bold">Characters</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7">
          {characters.map((item: any) => (
            <CharacterCard key={item.id} character={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default EpisodeDetail;
