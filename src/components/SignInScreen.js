import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SignInScreen.css";
export default function SignInScreen(props) {
  //   useEffect(() => {
  //     effect;
  //     return () => {
  //       //
  //     };
  //   }, []);

  return (
    <div>
      <div class="login-page">
        <div class="form">
          <form class="register-form">
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="email" placeholder="email address" />
            <button>create</button>
            <p class="message">
              Already registered? <a href="#">Sign In</a>
            </p>
          </form>
          <form class="login-form">
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <Link to="/">
              <button>login</button>
            </Link>
            <p class="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
