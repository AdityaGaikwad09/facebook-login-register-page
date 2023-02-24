import React from 'react';
import { Link } from 'react-router-dom';
import '../Register.css'
function Register(props) {
    return (
        <div className="main">
      <form className='form'>
        <h2 className="first_title">Sign Up</h2>
        <p className="first_sub_title" id="sub_title">It's quick and easy.</p>
        <hr />
        {/* <!--Input section start--> */}
        <div className="input">
          <input type="text" placeholder="First Name" class="first_name" id="all" required />
          <input type="text" placeholder="Sure Name" class="sure_name" id="all" required />
          <br />
          <input type="email" placeholder="Mobile number or email address" id="all1" required />
          <br />
          <input type="password" placeholder="New password" id="all1" required />
          <br />
        </div>
        {/* <!--Input section end--> */}
        {/* <!--Date of Birth section start--> */}
        <p className="sub_title_2" id="sub_title">Date of Birth</p>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
        <select>
          <option>Jan</option>
          <option>Feb</option>
          <option>Mar</option>
          <option>Apr</option>
          <option>May</option>
          <option>Jun</option>
          <option>Jul</option>
          <option>Aug</option>
          <option>Sep</option>
          <option>Oct</option>
          <option>Nov</option>
          <option>Dec</option>
        </select>
        <select>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
          <option>2018</option>
          <option>2017</option>
          <option>2016</option>
          <option>2015</option>
          <option>2014</option>
          <option>2013</option>
          <option>2012</option>
          <option>2011</option>
        </select>
        {/* <!--Date of Birth section end--> */}
        <br />
       {/*  <!--Gender section start--> */}
        <p className="sub_title_3" id="sub_title">Gender</p>
        <div class="female" id="all_gender">
          <label for="female"><b>Female</b> </label>
          <input type="radio" name="gender" value="female" />
        </div>
        <div className="male" id="all_gender">
          <label for="male"><b>Male</b></label>
          <input type="radio" name="gender" value="male" />
        </div>
        <div className="other" id="all_gender">
          <label for="other"><b>Custom</b></label>
          <input type="radio" name="gender" value="other" />
        </div>
        {/* <!--Gender section end--> */}
        <br />
        <p className="sub_title_4">
        People who use our service may have uploaded your contact information to Facebook. 
        <p><a href="#"> Learn more. </a></p>    
        </p>
        <br/>
        <p className="sub_title_4">
          By clicking Sign Up, you agree to our <a href="#"> Terms, Data Policy</a> and
          <a href="">Cookie</a>
          Policy. You may receive SMS notifications from us and can opt out at any time.
        </p>
        <hr/>
        <input type="submit" value="Signup" class="submit" />
        <div class="create-btn">
      <Link to="/" style={{textDecoration: 'none' }}>
        <br/>
       Already have a Account ?</Link>
    </div>
      </form>
      
    </div>
    );
}

export default Register;