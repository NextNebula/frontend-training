import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPodcastDetails } from "../../services/getService";

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

    return (
        !podcast ? null :
        <h1>{podcast.trackName}</h1>
    )
}

export default Podcast;