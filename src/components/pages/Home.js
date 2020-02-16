import React from "react";
import Search from "../users/Search";
import UserList from "../users/UsersList";

const Home = props => {
  return (
    <>
      <Search />
      <UserList />
    </>
  );
};

export default Home;
