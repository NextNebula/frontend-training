import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPodcastDetails, postSubscription } from "../../services/getService";

const Podcast = () => {
    const { id } = useParams();
    const [podcast, setPodcast] = useState();

    useEffect(() => {
        async function getData() {
            const data = await getPodcastDetails(id);
            setPodcast(data.results[0]);
        }
        getData();
    }, [id])

    const subscribe = async () => {
        await postSubscription(id);
    }

    return (
        !podcast ? null :
        <div className="flex justify-between">
            <h1>{podcast.trackName}</h1>
            <button class="button" onClick={subscribe}>Subscribe</button>
        </div>
    )
}

export default Podcast;