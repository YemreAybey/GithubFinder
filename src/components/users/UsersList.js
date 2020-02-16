import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import UserItem from "./UserItem";
import Spinner from "../Spinner";

const UsersList = () => {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;

  const renderUsers = () => {
    if (loading) {
      return <Spinner />;
    } else if (users) {
      return users.map(u => {
        return <UserItem usr={u} key={u.id} />;
      });
    } else {
      return null;
    }
  };

  return <div style={userStyle}>{renderUsers()}</div>;
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default UsersList;
