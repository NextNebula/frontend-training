import { useEffect, useState } from 'react';

import Grid from '../../components/grid';
import { getSearch } from "./../../services/getService";

const Search = () => {
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState(null)

    useEffect(() => {
      const timeoutId = setTimeout(async () => {
        if (query) {
          const data = await getSearch(query);
          setResults(data);
        }
        else {
          setResults([])
        }
      }, 500);
      return () => clearTimeout(timeoutId);
    }, [query]);

    return (
        <>
            <h1 className="mb-2">Search for a podcast</h1>
            <input
              className="w-6/12 px-2 py-1 mb-2 border border-gray-300 bg-gray-100 rounded-md outline-none focus:border-blue-500"
              type="text"
              placeholder="Search"
              onChange={e => setQuery(e.target.value)} />     
            <Grid results={results} />
        </>
    )
}

export default Search;