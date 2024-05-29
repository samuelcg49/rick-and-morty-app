import { Link } from "react-router-dom";

function LocationCard(props: any) {
  const { id, name, type, dimension } = props.location;

  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow sm:flex-row sm:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="flex flex-col justify-between p-4 pl-8 leading-normal">
        <Link
          to={`/locations/${id}`}
          className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-[#40b5cb]"
        >
          {name}
        </Link>

        <p className="font-bold text-gray-700 dark:text-gray-400">Type</p>
        <p>{type}</p>
        <p className="mt-4 font-bold text-gray-700 dark:text-gray-400">
          Dimension:
        </p>
        <p>{dimension}</p>
      </div>
    </div>
  );
}

export default LocationCard;
