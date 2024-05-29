function EpisodeCard(props: any) {
  const { name, air_date, episode } = props.episode;

  return (
    <div className="mt-7 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow sm:flex-row sm:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="flex flex-col justify-between p-4 pl-8 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>

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
