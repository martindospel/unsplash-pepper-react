import React from 'react'
import './SearchSuggestion.css'

function SearchSuggestion({ suggestion, onClick }) {
  return (
    <div className="search-suggestion" onClick={onClick}>{suggestion}</div>
  )
}

export default SearchSuggestion