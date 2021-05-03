import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPodcastDetails, postSubscribe, postUnsubscribe } from "../../services/getService";

const Podcast = () => {
    const { id } = useParams();
    const [podcast, setPodcast] = useState();

    useEffect(() => {
        async function getData() {
            setPodcast(await getPodcastDetails(id));
        }
        getData();
    }, [id])

    const subscribe = async () => {
        await postSubscribe(id);
        setPodcast({
            ...podcast,
            isSubscribed: true
        });
    }

    const unsubscribe = async () => {
        await postUnsubscribe(id);
        setPodcast({
            ...podcast,
            isSubscribed: false
        });
    }

    return (
        !podcast ? null :
        <>
            <div className="flex items-start mb-4">
                <img className="w-72 rounded-md shadow" src={podcast.image} alt={podcast.name}/>
                <div className="mx-2 flex-grow">
                    {!podcast.isSubscribed && <button className="button float-right" onClick={subscribe}>Subscribe</button>}
                    {podcast.isSubscribed && <button className="button float-right" onClick={unsubscribe}>Unsubscribe</button>}
                    <h1 className="mb-2">{podcast.name}</h1>
                    <div>{podcast.description}</div>
                </div>
            </div>
            {podcast.episodes.map((episode, index) => <div key={index} className="bg-gray-100 mb-2 p-2 rounded-md shadow">{episode.title}</div>)}
        </>
    )
}

export default Podcast;