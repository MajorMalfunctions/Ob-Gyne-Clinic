import React from 'react'

import '../../styles/login.css';

const Login = () => {
  return (
    <div class="container">
        <div class="box">
            <div class="heading"></div>
            <form class="login-form">
                <div class="field">
                    <label for="username">Phone Number OR Email</label>
                    <input id="username" type="name" placeholder="Phone number, username, or email" />
                </div>
                <div class="field">
                    <input id="password" type="password" placeholder="password" />
                    <label for="password">Password</label>
                </div>
                <button class="login-button" title="login">Log In</button>
                <div class="separator">
                    <div class="line"></div>
                    <p>OR</p>
                    <div class="line"></div>
                </div><br />
                <div class="other">
                    <br />
                    <button class="fb-login-btn" type="button">
                        <i class="fa fa-facebook-official fb-icon"></i>
                        <span class="">Log in with Facebook</span>
                    </button>
                    <a class="forgot-password" href="/forgot">Forgot password?</a>
                </div>
            </form>
        </div>
        {/* <div class="box">
            <p>Don't have an account? <a class="signup" href="#">Sign Up</a></p>
        </div> */}
    </div>
  )
}

export default Login
