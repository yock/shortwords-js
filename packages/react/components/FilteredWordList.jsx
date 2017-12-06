import { connect } from 'react-redux';
import WordList from './WordList';

const FilteredWordList = connect(state => ({ words: state.words }))(WordList);

export default FilteredWordList;
