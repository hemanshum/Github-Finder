import React from 'react';
import PropTypes from 'prop-types';

const RepoItemsComponent = ({ repo }) => {
  return (
    <div className="card">
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};

RepoItemsComponent.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItemsComponent;
