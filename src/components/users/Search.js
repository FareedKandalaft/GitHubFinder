import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    search: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };
  // This is so multiple controls can use the same event since e.target.name will
  // resolve to which ever control invoked. ex. if you were tracking onChange for
  // Search box and Email - you would need 2 onChange events
  // onSearchChange = (e) => this.setState({ search: e.target.value });
  // onEmailChange = (e) => this.setState({ email: e.target.value });
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    // if preventDefault not used JS will ask to save html file
    e.preventDefault();
    if (this.state.search === '') {
      this.props.setAlert(
        'Please enter something into Search bar before clicking the  Search button.',
        'light'
      );
    } else {
      this.props.searchUsers(this.state.search); // passing a prop up ⬆️
      this.setState({ search: '' });
    }
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='search'
            placeholder='Search Users...'
            value={this.state.search}
            onChange={this.onChange}
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
  }
}

export default Search;
