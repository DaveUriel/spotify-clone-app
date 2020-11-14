import React from 'react';
import './Login.css';
import { loginUrl } from './spotify';

function Login() {
  return (
    <div className="login">
      <img
        src="https://daviduriel.com/app-data/spotify-clone/images/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
