import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { getPodcastDetails, postSubscribe, postUnsubscribe } from "../../services/getService";
import { EpisodePlayContext } from '../../contexts/episodePlayContext';


const Podcast = () => {
    const { id } = useParams();
    const [podcast, setPodcast] = useState();

    const [, setEpisodePlay ] = useContext(EpisodePlayContext);

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

    const handleEpisodeOnclick = (episode) => {
        setEpisodePlay({ episode, podcast })
    }

    return (
        !podcast ? null :
        <>
            <div className="flex items-start mb-4">
                <img className="w-72 rounded-md shadow mr-2" src={podcast.image} alt={podcast.name}/>
                <div className="flex-grow">
                    {!podcast.isSubscribed && <button className="button float-right" onClick={subscribe}>Subscribe</button>}
                    {podcast.isSubscribed && <button className="button float-right" onClick={unsubscribe}>Unsubscribe</button>}
                    <h1 className="mb-2">{podcast.name}</h1>
                    <div>{podcast.description}</div>
                </div>
            </div>
            {podcast.episodes.map((episode, index) => <div key={index} onClick={() => handleEpisodeOnclick(episode)} className="bg-gray-100 mb-2 p-2 rounded-md shadow">{episode.title}</div>)}
        </>
    )
}

export default Podcast;