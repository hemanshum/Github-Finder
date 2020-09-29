import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/layout/NavbarComponent';
import User from './components/users/UsersComponent';
import Search from './components/users/SearchComponent';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clearBtn, setClearBtn] = useState(false);

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
    setClearBtn(true);
    setLoading(false);
  };

  //Clear Users
  const clearUsers = () => {
    setUsers([]);
    setClearBtn(false);
    setLoading(true);
    getUsers();
  };

  useEffect(() => {
    setLoading(true);
    getUsers();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Search
          searchUser={searchUser}
          clearUsers={clearUsers}
          showClear={clearBtn}
        />
        <User users={users} loading={loading} />
      </div>
    </div>
  );
}

export default App;
