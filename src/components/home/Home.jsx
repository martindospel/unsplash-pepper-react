import React from 'react';
import './Home.css';
import SearchBar from '../search-bar/SearchBar';

export default function Home() {
   return (
      <div className="home">
         <SearchBar />
      </div>
   )
}