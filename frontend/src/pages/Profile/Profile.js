import React from "react"
import image from "../../assets/male_avatar.png";
import "../../styles/account.css";

import { useNavigate, Navigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../redux/actions/auth";

const Profile = () => {

  const navigate = useNavigate();

  const { user: currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  console.log(state);

  const user = useSelector((state) => state.auth);

  const handleSignOut = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    navigate('/');
  };

  if (!currentUser) {
    return <Navigate to="/" />;
  };

  return (
    <>
      <section className='accountInfo'>
        <div className='container boxItems'>
          <h1>Account Information</h1>
          <div className='content'>
            <div className='left'>
              <div className='img flexCenter'>
                <input type='file' accept='image/*' src={image} alt='img' />
                <img src={image} alt='image' class='image-preview' />
              </div>
            </div>
            <header className="jumbotron">
        <h2>
          Welcome: <strong>{currentUser.name}</strong>
        </h2>

        <div>
            <img src={currentUser.cover} alt='image' class='image-preview' />
        </div>
      </header>
            <div className='right'>
              <p>
                <strong>Access Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
                {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
              </p>
                      <p>
                <strong>Refresh Token:</strong> {currentUser.refreshToken}
              </p>
              <p>
                <strong>Id:</strong> {currentUser.id}
              </p>
              <p>
                <strong>Email:</strong> {currentUser.email}
              </p>
              <div className="jumbotron">
                <strong>Authorities:</strong>
                <ul>
                  {currentUser.roles &&
                    currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                </ul>
              </div>
              <p>
                <strong>User IP:</strong> {currentUser.ip}
              </p>
              <button className="logs" onClick={handleLogout}>Logout</button>

              <button
                        edge="end"
                        color="inherit"
                        // className={classes.authButton}
                        onClick={() => handleSignOut()}
                      >
                        <Link to="/">
                          SignOut
                        </Link>
              </button>
              <button className='button'>Update</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile;