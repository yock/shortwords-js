import React from 'react';
import FilteredWordList from './FilteredWordList';
import ConnectedSearch from './ConnectedSearch';

const ShortWords = () => (
  <div className="container">
    <ConnectedSearch />
    <FilteredWordList />
  </div>
);

export default ShortWords;
