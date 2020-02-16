import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ usr }) => {
  return (
    <div className="card text-center">
      <img
        src={usr.avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{usr.login}</h3>
      <div>
        <Link to={`/user/${usr.login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
