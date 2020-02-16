import React, { useEffect, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import Repos from "../repos/Repos";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, repos, getRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.username);
    getRepos(match.params.username);
    // eslint-disable-next-line
  }, []);

  const {
    name,
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
    company
  } = user;

  const renderUser = () => {
    if (loading) {
      return <Spinner />;
    } else if (user) {
      return (
        <>
          <Link to="/" className="btn btn-light">
            Back To Search
          </Link>
          Hireable:{" "}
          {hireable ? (
            <i className="fas fa-check text-success" />
          ) : (
            <i className="fas fa-times-circle text-danger" />
          )}
          <div className="card grid-2">
            <div className="all-center">
              <img
                alt="avatar"
                src={avatar_url}
                className="round-img"
                style={{ width: "150px" }}
              />
              <h1>{name}</h1>
              <p>Location: {location}</p>
            </div>
            <div>
              {bio && (
                <>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </>
              )}
              <a href={html_url} className="btn btn-dark my-1">
                Visit Github Profile
              </a>
              <ul>
                <li>
                  {login && (
                    <>
                      <strong>Username: {login} </strong>
                    </>
                  )}
                </li>
                <li>
                  {company && (
                    <>
                      <strong>Company: {company} </strong>
                    </>
                  )}
                </li>
                <li>
                  {blog && (
                    <>
                      <strong>Website: {blog} </strong>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="card text-center">
            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-light">
              Public Repos: {public_repos}
            </div>
            <div className="badge badge-dark">Public Gists: {public_gists}</div>
          </div>
          <Repos repos={repos} />
        </>
      );
    } else {
      return <div>There is no such user</div>;
    }
  };

  return <div>{renderUser()}</div>;
};

export default User;
