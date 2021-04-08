// import React, { Component } from 'react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// export class Search extends Component {
const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  // state = {
  //   search: '',
  // };
  const [text, setText] = useState('');

  // This is so multiple controls can use the same event since e.target.name will
  // resolve to which ever control invoked. ex. if you were tracking onChange for
  // Search box and Email - you would need 2 onChange events
  // onSearchChange = (e) => this.setState({ search: e.target.value });
  // onEmailChange = (e) => this.setState({ email: e.target.value });
  // const onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    // if preventDefault not used JS will ask to save html file
    e.preventDefault();
    if (text === '') {
      setAlert(
        'Please enter something into Search bar before clicking the  Search button.',
        'light'
      );
    } else {
      searchUsers(text); // passing a prop up ⬆️
      setText('');
    }
  };

  // render() {
  //   const { showClear, clearUsers } = this.props;
  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};
// }

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
