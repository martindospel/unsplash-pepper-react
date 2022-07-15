import { React, useRef, useState, useEffect } from 'react'
import { getSearchTerms } from '../../controllers/fetcher';
import SearchSuggestion from '../search-suggestion/SearchSuggestion';
import './SearchBar.css';
import { useParams } from 'react-router-dom';
import { saveSearchTerm } from '../../controllers/fetcher';
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const { searchterm } = useParams()
  const navigate = useNavigate();

  const input = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    saveSearchTerm(input.current.value);
    navigate("/search/" + (input?.current?.value ? input?.current?.value : ''))
  }
  const [suggestions, setSuggestions] = useState([])
  const onInput = () => {
    if (input.current.value && input.current.value !== searchterm) {
      setSuggestions(getSearchTerms());
    } else {
      setSuggestions([]);
    }
  }
  const onSearchSuggestionClick = (text) => {
    setSuggestions([]);
    input.current.value = text;
    input.current.focus();
  }

  useEffect(() => {
    input.current.value = searchterm ? searchterm : '';
  }, [searchterm])

  return (
    <>
      < form autoComplete="off" onSubmit={onSubmit} >
        <div className="nav__search">
          <input
            placeholder="Search Unsplash"
            ref={input}
            onKeyUp={onInput}
            type="text"
            className="nav__search-input" />
          <div className="autocomplete__items">
            {
              suggestions
                .filter(sug => sug
                  .startsWith(input.current.value))
                .map((sug) => (<SearchSuggestion
                  key={sug}
                  onClick={() => onSearchSuggestionClick(sug)}
                  suggestion={sug} />))
            }
          </div>
        </div>
        <input type="submit" value="Search" className="nav__search-btn" />
      </form >

    </>
  )

}

export default SearchBar