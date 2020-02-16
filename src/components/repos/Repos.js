import React from "react";
import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
  return repos ? repos.map(r => <RepoItem repo={r} key={r.id} />) : null;
};

export default Repos;
