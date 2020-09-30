import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItemsComponent';

const ReposComponent = ({ repos }) => {
  return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
};

ReposComponent.propsType = {
  repos: PropTypes.array.isRequired,
};

export default ReposComponent;
