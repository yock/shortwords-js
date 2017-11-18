import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ text, onChange }) => {
  let input;
  return (
    <form>
      <input
        type="text"
        onChange={() => onChange(input.value)}
        value={text}
        ref={(node) => { input = node; }}
      />
    </form>
  );
};

Search.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Search;
