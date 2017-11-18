import { connect } from 'react-redux';
import Search from './Search';

const mapStateToProps = state => ({
  text: state.searchTerm,
});

const mapDispatchToProps = dispatch => ({
  onChange(text) {
    dispatch({
      type: 'SET_SEARCH_TERM',
      text,
    });
  },
});

const ConnectedSearch = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

export default ConnectedSearch;
