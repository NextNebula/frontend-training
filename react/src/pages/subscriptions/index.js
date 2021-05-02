import { useEffect, useState } from "react";
import { getSubscriptions } from "../../services/getService";
import Grid from "../../components/grid"

const Subscriptions = () => {
    const [subscriptions, setSubscriptions] = useState();

    useEffect(() => {
        async function getData() {
            setSubscriptions(await getSubscriptions());
        }
        getData();
    }, [])

    return (
        <>
            <h1 className="mb-2">Subscriptions</h1>
            <Grid items={subscriptions}></Grid>
        </>
    )
}

export default Subscriptions;