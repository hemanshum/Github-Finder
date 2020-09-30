import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import About from './components/pages/AboutPage';

import Navbar from './components/layout/NavbarComponent';
import Alert from './components/layout/AlertComponent';

import Users from './components/users/UsersComponent';
import UserDetails from './components/users/UserComponent';
import Search from './components/users/SearchComponent';

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [clearBtn, setClearBtn] = useState(false);
  const [showAlert, setShowAlert] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [userRepo, setUserRepo] = useState([]);

  const getUsers = async () => {
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data);
    setLoading(false);
  };

  //Search GitHub users
  const searchUser = async (term) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${term}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data.items);
    setSearchTerm(term);
    setClearBtn(true);
    setLoading(false);
  };

  //Clear Users
  const clearUsers = () => {
    setUsers([]);
    setClearBtn(false);
    setLoading(true);
    setSearchTerm('');
    getUsers();
  };

  //Set Alert
  const setAlert = (msg, type) => {
    setShowAlert({ msg, type });
    setTimeout(() => setShowAlert(null), 3000);
  };

  //Get single GitHub User
  const getUser = async (username) => {
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUser(res.data);
  };

  //Get users Repos
  const getUserRepo = async (username) => {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUserRepo(res.data);
  };

  useEffect(() => {
    setLoading(true);
    getUsers();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={showAlert} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <Search
                    searchUser={searchUser}
                    clearUsers={clearUsers}
                    showClear={clearBtn}
                    setAlert={setAlert}
                  />
                  {searchTerm !== '' ? (
                    <h2>Search Result for '{searchTerm}' </h2>
                  ) : null}
                  <Users users={users} loading={loading} />
                </React.Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <UserDetails
                  {...props}
                  getUser={getUser}
                  getUserRepo={getUserRepo}
                  user={user}
                  loading={loading}
                  repos={userRepo}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
