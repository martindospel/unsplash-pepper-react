import './App.css';
import Search from './components/search/Search';
import { Link } from 'react-router-dom';
import About from './components/about/About';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './components/home/Home';

function App() {
  return (
    <div>
      <header className="header">
        <h1 className="header__title">Pepper</h1>
        <p className="header__desc">unsplash</p>
      </header>
      <nav>
        <div className='menu'>
          <Link to="/" className='menu__link'>Homepage</Link>
          <Link to="/search" className='menu__link'>Search</Link>
          <Link to="/about" className='menu__link'>About</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/search/:searchterm" element={<Search />}></Route>
        <Route path="/search/" element={<Search />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <footer className="footer">
        <a className="footer__github" href="/">Link to github</a>
      </footer>
    </div>
  );
}

export default App;
