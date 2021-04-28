import { useParams } from "react-router";

const Podcast = () => {
    const { id } = useParams();

    return (
        <h1>{id}</h1>
    )
}

export default Podcast;