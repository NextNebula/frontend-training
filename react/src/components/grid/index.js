import { Link } from 'react-router-dom';

const Grid = ({items}) => {
    return (
        <div className="grid grid-cols-4 gap-2">
            {Array.isArray(items) && items.map((result) => 
                <Link to={`podcast/${result.id}`} key={result.id}>
                    <img src={result.image} className="w-full rounded-md shadow" alt={result.name}></img>
                    <div className="text-center">{result.name}</div>
                </Link>
            )}
        </div>
    )
}

export default Grid;