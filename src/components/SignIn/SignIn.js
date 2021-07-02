import React, { Component } from 'react';
import './SignIn.css';

import signin from '../../images/signin.svg';
import login from '../../images/loin.svg';
import Navbar from '../navbar/Navbar'

import { Link } from 'react-router-dom';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.toggleFunction = this.toggleFunction.bind(this)
  }



  toggleFunction() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container1");
    const body = document.getElementById('body')


    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <div id="body" class="container1">
          <div class="forms-container1">
            <div class="signin-signup">
              <form action="#" class="sign-in-form">
                <h1 style={{ color: 'black' }} class="title">Влез</h1>
                <div class="input-field">
                  <i class="fas fa-user padding"></i>
                  <input type="text" placeholder="Email" />
                </div>
                <div class="input-field">
                  <i class="fas fa-lock padding"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <input type="submit" value="Login" class="btn solid" />
                <p class="social-text">Or Sign in with social platforms</p>
                <div class="social-media">
                  <a href="#" class="social-icon">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="fab fa-google"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
                {/* back button */}
         
                {/* back button */}
              </form>


              <form id="form" action="#" class="sign-up-form">
                <h1 style={{ color: 'black' }} class="title">Регистрирай се</h1>
                <div class="input-field">
                  <i class="fas fa-user padding"></i>
                  <input type="text" placeholder="Name" />
                </div>
                <div class="input-field">
                  <i class="fas fa-user padding"></i>
                  <input type="text" placeholder="Username" />
                </div>
                <div class="input-field">
                  <i class="fas fa-envelope padding"></i>
                  <input type="email" placeholder="Email" />
                </div>
                <div class="input-field">
                  <i class="fas fa-lock padding"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <input type="submit" class="btn" value="Sign up" />
                <p class="social-text">Or Sign up with social platforms</p>
                <div class="social-media">
                  <a href="#" class="social-icon">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="fab fa-google"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
                {/* back button */}
      
                {/* back button */}
              </form>
            </div>
          </div>

          <div class="panels-container1">
            <div class="panel left-panel">
              <div class="content">
                <h3 className="h3">Нов си тук?</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                  ex ratione. Aliquid!
            </p>
                <button style={{ width: '220px' }} class="btn transparent" onClick={this.toggleFunction} id="sign-up-btn">
                  <i style={{ marginRight: '10px' }} class="fal fa-sign-in-alt"></i>Регистрирай се
            </button>
              </div>
              <img src={login} class="image" alt="" />
            </div>
            <div class="panel right-panel">
              <div class="content">
                <h3 className="h3">Един от нас?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                  laboriosam ad deleniti.
            </p>
                <button style={{ width: '150px' }} class="btn transparent" id="sign-in-btn" onClick={this.toggleFunction}>
                  <i style={{ marginRight: '10px' }} class="fal fa-sign-in-alt"></i> Влез
            </button>
              </div>
              <img src={signin} class="image" alt="" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignIn