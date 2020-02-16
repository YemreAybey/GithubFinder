import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const [text, setText] = useState("");
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { searchUsers, clearUsers, users } = githubContext;
  const { handleAlert } = alertContext;

  const handleSubmit = e => {
    e.preventDefault();
    if (text !== "") {
      searchUsers(text);
      setText("");
    } else {
      handleAlert("Please enter something", "light");
    }
  };

  const renderClear = () => {
    if (users.length > 0) {
      return (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      );
    }
    return null;
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {renderClear()}
    </>
  );
};

export default Search;
