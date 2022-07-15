import { getSearchTerms, saveSearchTerm } from './fetcher';

afterEach(() => {
   global.localStorage.clear();
})

test('saves searched term to the localStorage', () => {
   saveSearchTerm('apple');
   expect(localStorage.getItem("recentSearches")).toEqual("[\"apple\"]");
})

test('loads back all the searched terms into an array', () => {
   saveSearchTerm('apple');
   saveSearchTerm('pirate');
   expect(getSearchTerms()).toEqual(['apple', 'pirate']);
})