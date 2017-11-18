import PropTypes from 'prop-types';

const Word = ({ text }) => text;

Word.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Word;
