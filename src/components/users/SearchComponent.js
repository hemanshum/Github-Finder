import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchComponent = ({ searchUser, clearUsers, showClear }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    searchUser(searchTerm);
    setSearchTerm('');
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={searchTerm}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear ? (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      ) : null}
    </div>
  );
};

SearchComponent.propTypes = {
  searchUser: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
};

export default SearchComponent;
