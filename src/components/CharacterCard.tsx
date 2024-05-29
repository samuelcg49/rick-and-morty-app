import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CharacterCard(props: any) {
  const { id, name, image, status, species, location, episode } =
    props.character;

  const [firstEpisode, setFirstEpisode] = useState<any>([]);
  var episodeID = 0;

  var url = location.url;
  var parts = url.split("/");
  const locationID = parts[parts.length - 1];

  if (firstEpisode.url) {
    url = firstEpisode.url;
    parts = url.split("/");
    episodeID = parts[parts.length - 1];
  }

  const fetchEpisdoes = async () => {
    const response = await fetch(episode[0]);
    const data = await response.json();

    setFirstEpisode(data);
  };

  useEffect(() => {
    fetchEpisdoes();
  }, []);

  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow sm:flex-row sm:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover md:w-48 md:h-full rounded-t-lg md:rounded-none md:rounded-l-lg"
        src={image}
        alt=""
      />

      <div className="flex flex-col justify-between p-4 pl-8 leading-normal">
        <Link
          to={`/characters/${id}`}
          className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-[#40b5cb]"
        >
          {name}
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {status} - {species}
        </p>
        <p className="font-bold text-gray-700 dark:text-gray-400">
          Last known location:
        </p>
        <Link to={`/locations/${locationID}`} className="hover:text-[#40b5cb]">
          {location.name}
        </Link>
        <p className="mt-4 font-bold text-gray-700 dark:text-gray-400">
          First seen in:
        </p>
        <Link to={`/episodes/${episodeID}`} className="hover:text-[#40b5cb]">
          {firstEpisode.name}
        </Link>
      </div>
    </div>
  );
}

export default CharacterCard;
