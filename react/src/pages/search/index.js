import { useEffect, useState } from 'react';
import { getSearch } from "./../../services/getService";

const Search = () => {
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState(null)

    useEffect(() => {
      const timeoutId = setTimeout(async () => {
        if (query) {
          const data = await getSearch(query);
          setResults(data.results);
        }
        else {
          setResults([])
        }
      }, 500);
      return () => clearTimeout(timeoutId);
    }, [query]);

    return (
        <>
            <h1>Search</h1>
            <input
              type="text"
              onChange={e => setQuery(e.target.value)} />
            {results.map((result) => <div>{result.trackName}</div>)}
        </>
    )
}

export default Search;