import { words } from '../data/words.json';

const reducer = (state = { searchTerm: '', words }, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM': {
      const searchTerm = action.text;
      const newVisibleWords = searchTerm ?
        words.filter(word => word.includes(searchTerm)) : words;
      return Object.assign({}, state, { searchTerm, words: newVisibleWords });
    }
    default:
      return state;
  }
};

export default reducer;
