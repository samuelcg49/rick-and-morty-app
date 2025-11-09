import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import EpisodeCard from "../components/EpisodeCard";
import LocationCard from "../components/LocationCard";
import HeaderCharacterDetail from "../components/HeaderCharacterDetail";
import axios from "axios";

function CharacterDetail() {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<any>(null);
  const [episodes, setEpisodes] = useState<any[]>([]);
  const [location, setLocation] = useState<any[]>([]);

  const fetchCharacterAndEpisodes = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const characterData = response.data;
      setCharacter(characterData);

      const episodesPromises = characterData.episode.map((episodeURL: string) =>
        axios.get(episodeURL)
      );
      const episodesResponses = await Promise.all(episodesPromises);
      const episodesData = episodesResponses.map((res) => res.data);

      setEpisodes(episodesData);

      if (characterData.location.url) {
        const locationResponse = await axios.get(characterData.location.url);
        const locationData = locationResponse.data;

        setLocation(locationData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCharacterAndEpisodes();
  }, [id]);

  if (!character) {
    return <div>Ups.. We couldn't find that character 😅</div>;
  }

  return (
    <>
    <HeaderCharacterDetail character={character} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div>
          <h2 className="my-5 text-2xl font-bold justify-center flex">
            Episodes
          </h2>
          {episodes.map((item: any) => (
            <div className="mb-7">
              <EpisodeCard key={item.id} episode={item} />
            </div>
          ))}
        </div>
        <div>
          <h2 className="my-5 text-2xl font-bold justify-center flex">
            Locations
          </h2>
          <LocationCard location={location} />
        </div>
      </div>
    </>
  );
}

export default CharacterDetail;
