import { React } from 'react';
import SearchBar from '../search-bar/SearchBar';
import Gallery from '../gallery/Gallery';
import './Search.css';
import { useParams } from 'react-router-dom'

function Page() {
    const { searchterm } = useParams()

    return (
        <div className="page">
            <nav className="nav">
                <SearchBar />
            </nav>
            <main className="content">
                <Gallery searchTermFound={searchterm} />
            </main>
        </div>
    )
}

export default Page