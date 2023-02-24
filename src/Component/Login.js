import React from 'react';
import { Link } from 'react-router-dom';
import '../Login.css'
function Login(props) {
    return (
        <div class="box">
  <div class="title-box">
    <img src="https://i.postimg.cc/NMyj90t9/logo.png" alt="Facebook"/>
    <p>Facebook helps you connect and share with the people in your life.</p>
  </div>
  <br/>

  <div class="form-box">
    <form action="#">
      <input type="text" placeholder="Email address or phone number"/>
      <input type="password" placeholder="Password"/>
      <button type="submit">Log In</button>
      <a href="#">Forgotten Password</a>
    </form>
    <hr/>
    <div class="create-btn">
      <Link to="/register" style={{textDecoration: 'none' }}>
       Create New Account</Link>
    </div>
  </div>
</div>
    );
}

export default Login;