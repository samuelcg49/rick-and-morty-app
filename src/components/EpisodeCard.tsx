import { Link } from "react-router-dom";

function EpisodeCard(props: any) {
  const { id, name, air_date, episode } = props.episode;

  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow sm:flex-row sm:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="flex flex-col justify-between p-4 pl-8 leading-normal">
        <Link
          to={`/episodes/${id}`}
          className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-[#40b5cb]"
        >
          {name}
        </Link>

        <p className="font-bold text-gray-700 dark:text-gray-400">
          Seasson and Episode
        </p>
        <p>{episode}</p>
        <p className="mt-4 font-bold text-gray-700 dark:text-gray-400">
          First aired:
        </p>
        <p>{air_date}</p>
      </div>
    </div>
  );
}

export default EpisodeCard;
