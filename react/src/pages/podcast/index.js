import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPodcastDetails, postSubscription } from "../../services/getService";

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
        await postSubscription(id);
    }

    return (
        !podcast ? null :
        <>
            <div className="flex items-start">
                <img className="w-1/4" src={podcast.image} alt={podcast.name}/>
                <div className="mx-2 flex-grow">
                    <h1 className="mb-2">{podcast.name}</h1>
                    <div>{podcast.description}</div>
                </div>
                <button className="button" onClick={subscribe}>Subscribe</button>
            </div>
        </>
    )
}

export default Podcast;