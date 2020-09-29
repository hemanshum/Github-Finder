import React from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItemComponent';
import Spinner from '../layout/SpinnerComponent';

const UsersComponent = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  }

  return (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

UsersComponent.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default UsersComponent;
