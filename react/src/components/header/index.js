import { Link } from "react-router-dom";
import Player from "../player";
import "./header.css"

const Header = () => {
    return (
        <header className="mb-4 bg-blue-500">
            <div className="container mx-auto flex">
                <nav className="flex-grow">
                    <ul className="flex py-2">
                        <li>
                            <Link to="/" className="nav-link">Subscriptions</Link>
                        </li>
                        <li>
                            <Link to="/search" className="nav-link">Search</Link>
                        </li>
                    </ul>
                </nav>
                <div className="self-center text-white">
                    <Player/>
                </div>
            </div>
        </header>
    )
}

export default Header;