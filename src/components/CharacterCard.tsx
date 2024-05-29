import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CharacterCard(props: any) {
  const { id, name, image, status, species, location, episode } =
    props.character;

  const [firstEpisode, setFirstEpisode] = useState("");

  const fetchEpisdoes = async () => {
    const response = await fetch(episode[0]);
    const data = await response.json();

    setFirstEpisode(data.name);
  };

  useEffect(() => {
    fetchEpisdoes();
  });

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
        <p>{location.name}</p>
        <p className="mt-4 font-bold text-gray-700 dark:text-gray-400">
          First seen in:
        </p>
        <p>{firstEpisode}</p>
      </div>
    </div>
  );
}

export default CharacterCard;
