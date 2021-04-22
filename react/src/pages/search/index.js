import { useEffect, useState } from 'react';
import { getSearch } from "./../../services/getService";

const Search = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
      async function getData() {
        var data = await getSearch();
        setResults(data.results);
      }
      getData();
    }, []);

    return (
        <>
            <h1>Search</h1>
            {results.map((result) => <div>{result.trackName}</div>)}
        </>
    )
}

export default Search;