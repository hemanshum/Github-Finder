import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/SpinnerComponent';
import Repos from '../repos/ReposComponent';

const UserComponent = ({
  getUser,
  user,
  loading,
  match,
  getUserRepo,
  repos,
}) => {
  const username = match.params.login;
  useEffect(() => {
    getUser(username);
    getUserRepo(username);
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  if (loading) return <Spinner />;

  return (
    <React.Fragment>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className="fa fa-check text-success" />
      ) : (
        <i className="fa fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <React.Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </React.Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <React.Fragment>
                  <strong>Username: </strong> {login}
                </React.Fragment>
              )}
            </li>
            <li>
              {company && (
                <React.Fragment>
                  <strong>Company: </strong> {company}
                </React.Fragment>
              )}
            </li>
            <li>
              {blog && (
                <React.Fragment>
                  <strong>Website: </strong> {blog}
                </React.Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Publig Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </React.Fragment>
  );
};

export default UserComponent;
