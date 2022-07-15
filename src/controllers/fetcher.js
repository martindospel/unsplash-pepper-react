const unsplash_link = 'https://unsplash-pepper.herokuapp.com/api/get-unsplash-photo/';

const fetchImages = (searchTerm, callback) => {
   fetch(`${unsplash_link}?searchTerm=${searchTerm}`)
      .then(data => data.json())
      .then(callback);
}

const saveSearchTerm = (searchTerm) => {
   try {
      const recentSearches = new Set(JSON.parse(localStorage.getItem('recentSearches') || []));
      recentSearches.add(searchTerm);
      localStorage.setItem('recentSearches', JSON.stringify(Array.from(recentSearches)));
   } catch (err) {
      localStorage.setItem('recentSearches', JSON.stringify([searchTerm]));
   }
}

const getSearchTerms = () => {
   try {
      return Array.from(new Set(JSON.parse(localStorage.getItem('recentSearches') || [])));
   } catch (err) {
      return [];
   }
}

export { fetchImages, saveSearchTerm, getSearchTerms };