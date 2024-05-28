import { useEffect } from "react";
import { useState } from "react";

function CharacterCard(props: any) {

    const { name, image, status, species, location, episode } = props.character;

    const [lastEpisode, setLastEpisode] = useState("")

    const fetchEpisdoes = async () => {
        const index = episode.length - 1 

        const response = await fetch(episode[index])
        const data = await response.json()
        
        setLastEpisode(data.name)
    }
      useEffect(() => {
        fetchEpisdoes()
      })  

    return (
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow sm:flex-row sm:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover md:w-48 md:h-full rounded-t-lg md:rounded-none md:rounded-l-lg" src={image} alt="" />

            <div className="flex flex-col justify-between p-4 pl-8 leading-normal">
                <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{status} - {species}</p>
                <p className="font-bold text-gray-700 dark:text-gray-400">Last known location:</p>
                <p>{location.name}</p>
                <p className="mt-4 font-bold text-gray-700 dark:text-gray-400">First seen in:</p>
                <p>{lastEpisode}</p>
            </div>
        </div>

    )
}

export default CharacterCard