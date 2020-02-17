import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import UserItem from "./UserItem";
import Spinner from "../Spinner";

const UsersList = () => {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;

  const renderList = users => {
    return users.map(u => {
      return <UserItem usr={u} key={u.id} />;
    });
  };

  if (loading) {
    return <Spinner />;
  } else if (users) {
    return <div className="grid-3">{renderList(users)}</div>;
  } else {
    return null;
  }
};

export default UsersList;
