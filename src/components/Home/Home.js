import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Switch } from '@headlessui/react'
import { Container, Col, Row } from 'react-bootstrap';
import { Carousel } from "react-responsive-carousel";

import logo from '../../images/logo.png'

import $ from 'jquery'

import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const Home = ({ history }) => {
  function open() {
    document.getElementById('slidebar').classList.toggle('active');
  }

  function close() {
    document.getElementById('slidebar').classList.toggle('active');
  }

  function check() {
    var checkBox = document.getElementById("checbox");
    var text1 = document.getElementsByClassName("text1");
    var text2 = document.getElementsByClassName("text2");

    for (var i = 0; i < text1.length; i++) {
      if (checkBox.checked == true) {
        text1[i].style.display = "block";
        text2[i].style.display = "none";
      } else if (checkBox.checked == false) {
        text1[i].style.display = "none";
        text2[i].style.display = "block";
      }
    }
  }
  check();


  return (
    <div>
      {/*mobile navbar*/}
      <div div id="slidebar" >
        <div className="slidebar__close__btn" onClick={close}>
          <i class="fad fa-times"></i>
        </div>
        <ul className="ul__slidebar__links">
          <a className="active" style={{ textDecoration: 'none', color: 'black' }} href="#"><li><Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}><i style={{ color: '#9ebe2b', marginRight: '10px' }} class="fal fa-home"></i>У нас</Link></li></a>
          <a style={{ textDecoration: 'none', color: 'black' }} href="#"><li><Link style={{ textDecoration: 'none', color: 'black' }} to={'/contact'}><i style={{ color: '#9ebe2b', marginRight: '10px' }} class="fal fa-concierge-bell"></i>Пишете ни</Link></li></a>
          <a style={{ textDecoration: 'none', color: 'black' }} href="#"><li><Link style={{ textDecoration: 'none', color: 'black' }} to={'/404'}><i style={{ color: '#9ebe2b', marginRight: '10px' }} class="fal fa-exclamation"></i>Грешка</Link></li></a>
        </ul>
      </div >
      {/*mobile navbar*/}
      <div id="navbar" className="navbar_11">
        <img className="navbar__logo" id="logo" onClick={() => {history.push('/')}} src={logo}/>

        {/* toggle mobile navbar btn */}
        <div className="slidebar__toggle__btn" id="open" onClick={open}>
          <i class="fal fa-bars"></i>
        </div>
        {/* toggle mobile navbar btn */}

        {/* pc navbar links*/}
        <div className="navbar__links">
          <ul class="dropdown">
            <li><a href="#">Меню</a>
              <ul>
                <li><a href="#"><i style={{ color: '#9ebe2b', marginRight: '10px' }} class="far fa-pi"></i> Математика <i class="fad fa-caret-right icon-right"></i></a>
                  <ul>
                   <li><a href="">1. клас</a></li>
                    <li><a href="">2. клас</a></li>
                    <li><a href="">3. клас</a></li>
                    <li><a href="">4. клас</a></li>
                    <li><a href="">5. клас</a></li>
                    <li><a href="">6. клас</a></li>
                    <li><a href="">7. клас</a></li>
                    <li><a href="">8. клас</a></li>
                    <li><a href="">9. клас</a></li>
                    <li><a href="">10. клас</a></li>
                    <li><a href="">11. клас</a></li>
                    <li><a href="">12. клас</a></li>
                  </ul>
                </li>
                <li><a href="#"><i style={{ color: '#9ebe2b', marginRight: '10px' }} class="fal fa-language"></i> Български език <i class="fad fa-caret-right icon-right"></i></a>
                  <ul>
                  <li><a href="">1. клас</a></li>
                    <li><a href="">2. клас</a></li>
                    <li><a href="">3. клас</a></li>
                    <li><a href="">4. клас</a></li>
                    <li><a href="">5. клас</a></li>
                    <li><a href="">6. клас</a></li>
                    <li><a href="">7. клас</a></li>
                    <li><a href="">8. клас</a></li>
                    <li><a href="">9. клас</a></li>
                    <li><a href="">10. клас</a></li>
                    <li><a href="">11. клас</a></li>
                    <li><a href="">12. клас</a></li>
                  </ul>
                </li>
                <li><a href="#"><i style={{ color: '#9ebe2b', marginRight: '10px' }} class="fal fa-book-alt"></i> Литература <i class="fad fa-caret-right icon-right"></i></a>
                  <ul>
                    <li><a href="">1. клас</a></li>
                    <li><a href="">2. клас</a></li>
                    <li><a href="">3. клас</a></li>
                    <li><a href="">4. клас</a></li>
                    <li><a href="">5. клас</a></li>
                    <li><a href="">6. клас</a></li>
                    <li><a href="">7. клас</a></li>
                    <li><a href="">8. клас</a></li>
                    <li><a href="">9. клас</a></li>
                    <li><a href="">10. клас</a></li>
                    <li><a href="">11. клас</a></li>
                    <li><a href="">12. клас</a></li>
                  </ul>
                </li>
                <li><a href="#"><i style={{ color: '#9ebe2b', marginRight: '10px' }} class="fal fa-atom"></i> Химия <i class="fad fa-caret-right icon-right"></i></a>
                  <ul>
                  <li><a href="">1. клас</a></li>
                    <li><a href="">2. клас</a></li>
                    <li><a href="">3. клас</a></li>
                    <li><a href="">4. клас</a></li>
                    <li><a href="">5. клас</a></li>
                    <li><a href="">6. клас</a></li>
                    <li><a href="">7. клас</a></li>
                    <li><a href="">8. клас</a></li>
                    <li><a href="">9. клас</a></li>
                    <li><a href="">10. клас</a></li>
                    <li><a href="">11. клас</a></li>
                    <li><a href="">12. клас</a></li>
                  </ul>
                </li>
                <li><a href="#"><i style={{ color: '#9ebe2b', marginRight: '10px' }} class="fal fa-bolt"></i> Физика <i class="fad fa-caret-right icon-right"></i></a>
                  <ul>
                  <li><a href="">1. клас</a></li>
                    <li><a href="">2. клас</a></li>
                    <li><a href="">3. клас</a></li>
                    <li><a href="">4. клас</a></li>
                    <li><a href="">5. клас</a></li>
                    <li><a href="">6. клас</a></li>
                    <li><a href="">7. клас</a></li>
                    <li><a href="">8. клас</a></li>
                    <li><a href="">9. клас</a></li>
                    <li><a href="">10. клас</a></li>
                    <li><a href="">11. клас</a></li>
                    <li><a href="">12. клас</a></li>
                  </ul>
                </li>
                <li><a href="#"><i style={{ color: '#9ebe2b', marginRight: '10px' }} class="fal fa-fingerprint"></i> Биология <i class="fad fa-caret-right icon-right"></i></a>
                  <ul>
                  <li><a href="">1. клас</a></li>
                    <li><a href="">2. клас</a></li>
                    <li><a href="">3. клас</a></li>
                    <li><a href="">4. клас</a></li>
                    <li><a href="">5. клас</a></li>
                    <li><a href="">6. клас</a></li>
                    <li><a href="">7. клас</a></li>
                    <li><a href="">8. клас</a></li>
                    <li><a href="">9. клас</a></li>
                    <li><a href="">10. клас</a></li>
                    <li><a href="">11. клас</a></li>
                    <li><a href="">12. клас</a></li>
                  </ul>
                </li>
                <li><a href="#"><i style={{ color: '#9ebe2b', marginRight: '10px' }} class="fal fa-landmark"></i> История <i class="fad fa-caret-right icon-right"></i></a>
                  <ul>
                  <li><a href="">1. клас</a></li>
                    <li><a href="">2. клас</a></li>
                    <li><a href="">3. клас</a></li>
                    <li><a href="">4. клас</a></li>
                    <li><a href="">5. клас</a></li>
                    <li><a href="">6. клас</a></li>
                    <li><a href="">7. клас</a></li>
                    <li><a href="">8. клас</a></li>
                    <li><a href="">9. клас</a></li>
                    <li><a href="">10. клас</a></li>
                    <li><a href="">11. клас</a></li>
                    <li><a href="">12. клас</a></li>
                  </ul>
                </li>
                <li><a href="#"><i style={{ color: '#9ebe2b', marginRight: '10px' }} class="fal fa-globe-americas"></i> География <i class="fad fa-caret-right icon-right"></i></a>
                  <ul>
                  <li><a href="">1. клас</a></li>
                    <li><a href="">2. клас</a></li>
                    <li><a href="">3. клас</a></li>
                    <li><a href="">4. клас</a></li>
                    <li><a href="">5. клас</a></li>
                    <li><a href="">6. клас</a></li>
                    <li><a href="">7. клас</a></li>
                    <li><a href="">8. клас</a></li>
                    <li><a href="">9. клас</a></li>
                    <li><a href="">10. клас</a></li>
                    <li><a href="">11. клас</a></li>
                    <li><a href="">12. клас</a></li>
                  </ul>
                </li>
                <li><a href="#"><i style={{ color: '#9ebe2b', marginRight: '10px' }} class="fal fa-feather-alt"></i> Философия <i class="fad fa-caret-right icon-right"></i></a>
                  <ul>
                  <li><a href="">1. клас</a></li>
                    <li><a href="">2. клас</a></li>
                    <li><a href="">3. клас</a></li>
                    <li><a href="">4. клас</a></li>
                    <li><a href="">5. клас</a></li>
                    <li><a href="">6. клас</a></li>
                    <li><a href="">7. клас</a></li>
                    <li><a href="">8. клас</a></li>
                    <li><a href="">9. клас</a></li>
                    <li><a href="">10. клас</a></li>
                    <li><a href="">11. клас</a></li>
                    <li><a href="">12. клас</a></li>
                  </ul>
                </li>
                <li><a href="#"><i style={{ color: '#9ebe2b', marginRight: '10px' }} class="fal fa-phone-laptop"></i> И.Т <i class="fad fa-caret-right icon-right"></i></a>
                  <ul>
                  <li><a href="">1. клас</a></li>
                    <li><a href="">2. клас</a></li>
                    <li><a href="">3. клас</a></li>
                    <li><a href="">4. клас</a></li>
                    <li><a href="">5. клас</a></li>
                    <li><a href="">6. клас</a></li>
                    <li><a href="">7. клас</a></li>
                    <li><a href="">8. клас</a></li>
                    <li><a href="">9. клас</a></li>
                    <li><a href="">10. клас</a></li>
                    <li><a href="">11. клас</a></li>
                    <li><a href="">12. клас</a></li>
                  </ul>
                </li>
                <li><a href="#"><i style={{ color: '#9ebe2b', marginRight: '10px' }} class="fal fa-leaf"></i> Човек и природа <i class="fad fa-caret-right icon-right"></i></a>
                  <ul>
                  <li><a href="">1. клас</a></li>
                    <li><a href="">2. клас</a></li>
                    <li><a href="">3. клас</a></li>
                    <li><a href="">4. клас</a></li>
                    <li><a href="">5. клас</a></li>
                    <li><a href="">6. клас</a></li>
                    <li><a href="">7. клас</a></li>
                    <li><a href="">8. клас</a></li>
                    <li><a href="">9. клас</a></li>
                    <li><a href="">10. клас</a></li>
                    <li><a href="">11. клас</a></li>
                    <li><a href="">12. клас</a></li>
                  </ul>
                </li>
                <li><a href="#"><i  style={{ color: '#9ebe2b', marginRight: '10px' }}class="fal fa-people-carry"></i> Човек и общество</a>
                  <ul>
                  <li><a href="">1. клас</a></li>
                    <li><a href="">2. клас</a></li>
                    <li><a href="">3. клас</a></li>
                    <li><a href="">4. клас</a></li>
                    <li><a href="">5. клас</a></li>
                    <li><a href="">6. клас</a></li>
                    <li><a href="">7. клас</a></li>
                    <li><a href="">8. клас</a></li>
                    <li><a href="">9. клас</a></li>
                    <li><a href="">10. клас</a></li>
                    <li><a href="">11. клас</a></li>
                    <li><a href="">12. клас</a></li>
                  </ul>
                </li>
                <li><a href="#"><i style={{ color: '#9ebe2b', marginRight: '10px' }} class="fal fa-tint"></i> Околен свят <i class="fad fa-caret-right icon-right"></i></a>
                  <ul>
                  <li><a href="">1. клас</a></li>
                    <li><a href="">2. клас</a></li>
                    <li><a href="">3. клас</a></li>
                    <li><a href="">4. клас</a></li>
                    <li><a href="">5. клас</a></li>
                    <li><a href="">6. клас</a></li>
                    <li><a href="">7. клас</a></li>
                    <li><a href="">8. клас</a></li>
                    <li><a href="">9. клас</a></li>
                    <li><a href="">10. клас</a></li>
                    <li><a href="">11. клас</a></li>
                    <li><a href="">12. клас</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <a href="#"><li><Link style={{ textDecoration: 'none', color: 'black' }} to={'contact'}>Пишете ни</Link></li></a>
          <a href="#"><li><Link style={{ textDecoration: 'none', color: 'black' }} to={'/f'}>Регистрация</Link></li></a>

        </div>
        {/* pc navbar links*/}

        {/* search bar */}
        <div className="search-a">
          <form action="/search" method="get" onClick={() => { document.getElementById('logo').style.textAlign = 'center' }}>
            <input class="search expandright" id="searchright" type="search" name="q" placeholder="Потърси..." />
            <label class="button1__btn searchbutton" for="searchright"><span class="mglass"><i class="fal fa-search"></i></span></label>
          </form>
        </div>
        {/* search bar */}
      </div>
      {/* banner section */}
      <section id="seciton-1" style={{ marginTop: '50px' }}>
        <div className="banner">
          <h1 className="banner__h1">Нямаш акаунт?</h1>
          <p className="banner__p">Направи си акаунт или влез в наща <span className="color-green">нова</span> и <span className="color-green">лесна</span>  за изполване апликация за помагане на учениците.</p>
          <p className="banner__pc">Направи си акаунт или влез в наща <span className="color-green">нова</span> <br></br>и <span className="color-green">лесна</span>  за изполване апликация за помагане на учениците.</p>
          <button onClick={() => {history.push('/f') }} className="banner__btn"><i style={{ marginRight: '10px', fontSize: '15px' }} class="fal fa-sign-in-alt"></i>Регистрирай се</button>
        </div>
      </section>

      <section className="fist-section py-5 mt-5" style={{ marginTopL: "2000px" }}>
        <Container>
          <Row>
            <Col className="text-center">
              <p className="section-p" style={{ letterSpacing: '3px' }}>КАКВО Е ТОВА</p>
              <h2 className="section-h1 mb-5">Улеснете живота си </h2>
            </Col>
          </Row>
        </Container>
        <Container className=" mt-5">
          <Row>
            <Col md="3" className="mt-1 responsive-design">
              <div className="hover-design">
                <div className="bolt">
                  <i class="fas fa-bolt az az-3"></i>
                </div>
                <h4 className="cont-h3 my-3">Пълна свобода</h4>
                <p class="gray-p" style={{color:'gray'}}>Свържете се с професионален преподавател по Ваш избор от всеки край на България.</p>
              </div>
            </Col>
            <Col md="3" className="responsive-design">
              <div className="hover-design">
                <div className="suitcase">
                  <i class="fas fa-suitcase az"></i>
                </div>
                <h4 className="cont-h3 my-3">Никакви усилия</h4>
                <p class="gray-p" style={{color:'gray'}}>Само с няколко клика запишете своя частен урок в удобно за Вас и за учителя време.</p>
              </div>
            </Col>
            <Col md="3" className="responsive-design">
              <div className="hover-design"><div className="crown">
                <i class="fas fa-crown az"></i>
              </div>
                <h4 className="cont-h3 my-3">Истински резултати</h4>
                <p class="gray-p" style={{color:'gray'}}>Следете резултатите си от успехите в училище и в платформата.</p> </div>
            </Col>
            <Col md="3" className="responsive-design">
              <div className="hover-design">
                <div className="commet">
                  <i class="fas fa-comment-alt az"></i>
                </div>
                <h4 className="cont-h3 my-3">Учебни материали</h4>
                <p class="gray-p" style={{color:'gray'}}>Сдобийте се със статия на тема по Ваш избор, за да увеличите знанията си. </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 mt-5">
        <Container>
          <Row>
            <Col md="6">
              <span className="circle-2"></span>
              <img className="img-fluid img-section" style={{ borderRadius: "20px" }} src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
            </Col>
            <Col md="6">
              <h5 class="video-h5" style={{ color: '#9ebe2b', letterSpacing: '3px' }}>ЦЕЛИ</h5>
              <h1 className="video-h1">Нашите цели</h1>
              <Row className="mt-4">
                <Col md="2">
                  <div className="commet-2">
                    <i class="fas fa-house-signal az-2"></i>
                  </div>
                </Col>
                <Col md="10">
                  <h3 className="cont-h3 restext">Навсякъде, по всяко време</h3>
                  <p className="restext" style={{color:'gray'}}>Да развием Вашия цялостен потенциал</p>
                </Col>
              </Row>
              <Row>
                <Col md="2">
                  <div className="commet-3 mb-5">
                    <i class="fas fa-shield az-2"></i>
                  </div>
                </Col>
                <Col md="10">
                  <h3 className="cont-h3 restext">Личностно развитие</h3>
                  <p className="restext" style={{color:'gray'}}>Да Ви изградим като отговорна и зряла личност</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* https://codepen.io/imilenig/details/mdOyWrx */}
      {/* <section className="pricing pt-5 mt-5 mb-5 py-5">
        <div className="container">
          <div className="pricing-head text-center mb-3">
            <p className="section-p" style={{ letterSpacing: '3px' }}>PRICING PLAN</p>
            <h2 className="section-h1 mb-5">Choose your pricing policy</h2>
          </div>
          <div className="top">
            <div className="toggle-btn">
              <span style={{ margin: '0.8em' }}>Annually</span>
              <label className="switch">
                <input type="checkbox" id="checbox" onClick={check} />
                <span className="slider round" />
              </label>
              <span style={{ margin: '0.8em' }}>Monthly</span></div>
          </div>
          <div className="package-container">
            <div className="packages">
              <div className="pricing-title pb-3">
                <h4 className="pricingg-h1">Free Plan</h4>
                <p className="gray-p pricingg-gray-p">For small teams or office</p>
              </div>
              <ul className="list text-left"> 
                <li><i class="fas fa-check-circle" style={{ color: '#9ebe2b', marginRight: '10px' }}></i>1,000's of Templates</li>
                <li><i class="fas fa-check-circle" style={{ color: '#9ebe2b', marginRight: '10px' }}></i>Drag &#38; Drop Builder </li>
                <li>Blog Support Tools</li>
                <li>eCommerce Store</li>
              </ul>
              <h2 className="text1  text-center">$0/<p className="d-sm-inline-block mb-2 gray-p">Monthly</p></h2>
              <h2 className="text2  text-center">$0/<p className="d-sm-inline-block mb-2 gray-p">Yearly</p></h2>
              <a href="#" style={{ textDecoration: 'none' }} className="button pricing-button  text-center">Start Free Trial</a>
            </div>
            <div className="packages">
              <div className="pricing-title">
                <h4 className="pricingg-h1">Business King</h4>
                <p className="gray-p pricingg-gray-p">For small teams or office</p>
              </div>
              <ul className="list text-left">
                <li><i class="fas fa-check-circle" style={{ color: '#9ebe2b', marginRight: '10px' }}></i>1,000's of Templates</li>
                <li><i class="fas fa-check-circle" style={{ color: '#9ebe2b', marginRight: '10px' }}></i>Drag &#38; Drop Builder </li>
                <li><i class="fas fa-check-circle" style={{ color: '#9ebe2b', marginRight: '10px' }}></i>Blog Support Tools</li>
                <li><i class="fas fa-check-circle" style={{ color: '#9ebe2b', marginRight: '10px' }}></i>Blog Usefull Tools</li>
                <li><i class="fas fa-check-circle" style={{ color: '#9ebe2b', marginRight: '10px' }}></i>eCommerce Store</li>
              </ul>
              <h2 className="text1  text-center">$19/<p className="d-sm-inline-block mb-2 gray-p">Monthly</p></h2>
              <h2 className="text2  text-center">$239/<p className="d-sm-inline-block mb-2 gray-p">Yearly</p></h2>
              <a href="#" style={{ textDecoration: 'none' }} className="button pricing-button  text-center">Buy now</a>
              <p className="text-center pricingg-p">Or start a 10 days trail</p>
            </div>
            <div className="packages">
              <div className="pricing-title">
                <h4 className="pricingg-h1">Pro Master</h4>
                <p className="gray-p pricingg-gray-p">For small teams or office</p>
              </div>
              <ul className="list text-left">
                <li><i class="fas fa-check-circle" style={{ color: '#9ebe2b', marginRight: '10px' }}></i>1,000's of Templates</li>
                <li><i class="fas fa-check-circle" style={{ color: '#9ebe2b', marginRight: '10px' }}></i>Drag &#38; Drop Builder </li>
                <li><i class="fas fa-check-circle" style={{ color: '#9ebe2b', marginRight: '10px' }}></i>Blog Support Tools</li>
                <li>eCommerce Store</li>
              </ul>
              <h2 className="text1 text-center">$29/<p className="d-sm-inline-block mb-2 gray-p">Monthly</p></h2>
              <h2 className="text2  text-center">$359/<p className="d-sm-inline-block mb-2 gray-p">Yearly</p></h2>
              <a href="#" style={{ textDecoration: 'none' }} className="button pricing-button  text-center">Let's Talk</a>
              <p className="text-center pricingg-p">Or start a 10 days trail</p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-5 mt-5 my-5">
        <Container>
          <Row>
            <Col md="5">
              <p class="video-h5" style={{ color: '#9ebe2b', letterSpacing: '3px' }}>ГЛАВНИ ВЪВЕДЕНИЯ</p>
              <h1 className="video-h1 resposinve-h1">Намерете това, от което се нуждаете</h1>
              <p className="restext" style={{ marginTop: '20px', fontSize: '15px',color:'gray'}}>Имате възможността да вземете учебни материали (видеоуроци, есета, тестове, презентации) на тема по ваш избор, изготвена от нашите експертни учители<br></br></p>
              <button onClick={() => {history.push('/about')}} className="section-4-btn"><i style={{ marginRight: '10px', fontSize: '15px' }} class="fal fa-sign-in-alt"></i>Научете още</button>
            </Col>
            <Col md="6">
              <img className="img-fluid img-section" style={{ borderRadius: "20px" }} src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 mt-5" id="section-5">
        <Container>
          <Row>
            <Col className="text-center">
              <p className="section-5-p">ПЛАТФОРМАТА</p>
              <h2 className="section-5-h2">Разберете как работи платформата</h2>
            </Col>
          </Row>
        </Container>
        <div class="mobile-none-form">
          <span className="form-1"></span>
          <span className="form-2"></span>
          <span className="form-3"></span>
          <span className="form-4"></span>
        </div>
        <Container className=" my-5 py-5">
          <Row>
            <Col md="3" className="mb-5">
              <div className="backwhite mb-4 shitx2">
                <i class="far fa-dice-one backwhite-1"></i>
              </div>
              <h5 className="section-5-h5 shit">Често задавани въпроси</h5>
              <p className="section-5-p2 shit">Запознайте се с най-често задаваните въпроси</p>
            </Col>
            <Col md="3" className="mb-5">
              <div className="backwhite mb-4 shitx2">
                <i class="far fa-dice-two backwhite-1"></i>
              </div>
              <h5 className="section-5-h5 shit">Видове потребители</h5>
              <p className="section-5-p2 shit" >Разберете в коя категория попадате и каква е вашата роля</p>
            </Col>
            <Col md="3" className="mb-5">
              <div className="backwhite mb-4 shitx2">
                <i class="far fa-dice-three backwhite-1"></i>
              </div>
              <h5 className="section-5-h5 shit">Заплащането</h5>
              <p className="section-5-p2 shit">Как работи и къде отиват парите </p>
            </Col>
            <Col md="3">
              <div className="backwhite mb-4 shitx2">
                <i class="far fa-dice-four backwhite-1"></i>
              </div>
              <h5 className="section-5-h5 shit">Питайте ни въпроси</h5>
              <p className="section-5-p2 shit">Нашият support team ще Ви отговори по всяко време</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 mt-5">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div>
            <div className="myCarousel">
            <div style={{ color: '#9ebe2b' }} className="text-left mb-2">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <h4 className="text-left carosel-h4">Modren Look &#38;trending design </h4>
              <p className="text-left carosel-p">
               С помощта на Уроци.Бг успях да намрея моят учител и да повиша успехът си.
            </p>
              <img className="float-left"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsDlBa--t9SPfBVaqdE-sc9Jbt8dav2cp0OA&usqp=CAU"/>
              <h6 className="carosel-name text-left">Sophie Monro</h6><br></br>
              <p className="carosel-media-1 text-left">@sophie.m</p>              
            </div>
          </div>

          <div>
            <div className="myCarousel">
              <div style={{ color: '#9ebe2b' }} className="text-left mb-2">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <h4 className="text-left carosel-h4">Design Quality &#38; Preformance</h4>
              <p className="text-left carosel-p">
                Обичам Уроци.Бг защото учителите там ме мотивират да уча с усмивка.
            </p>
            <img className="float-left"src="https://pbs.twimg.com/profile_images/483129073208528896/3_wpD7SL.jpeg"/>
              <h6 className="carosel-name text-left">John Jonhnson</h6><br></br>
              <p className="carosel-media-2 text-left">@John.j</p>
            </div>
          </div>

          <div>
            <div className="myCarousel">
            <div style={{ color: '#9ebe2b' }} className="text-left mb-2">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <h4 className="text-left carosel-h4">Layout and organized layers</h4>
              <p className="text-left carosel-p">
                Учителите на Уроци.Бг правят ученето по-лесно и забавно! Благодаря ви!
            </p>
            <img className="float-left"src="data:image/jpeg;base64,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" alt="maika ti guza"/>
              <h6 className="carosel-name text-left">Theo Sorel</h6><br></br>
              <p className="carosel-media text-left">@Theo.S</p>
            </div>
          </div>
        </Carousel>

      </section>

      {/* footer section */}
      <section id="section5" className=" py-5 bgwhite">
        <div className="container">
          <footer>
            <nav className="footer-inner">
              <section className="footer-item">
                <h1 style={{ color: 'white' }}>Уроци.Бг</h1>
                <h2 style={{ color: 'white' }}>We create possibilities <br />for the connected world.<br /><b className="color">Be Bold.</b></h2>
              </section>
              <section className="footer-item">
                <h5 style={{ color: 'white' }}>Изследвайте</h5>
                <ul>
                  <li><a href="#" style={{ color: 'white', textDecoration:"none" }}><Link>У нас</Link></a></li>
                  <li><a href="#" style={{ color: 'white', textDecoration:"none" }}><Link to='/contact'>Свържете се с нас</Link></a></li>
                  <li><a href="#" style={{ color: 'white', textDecoration:"none" }}><Link to='/about'>За нас</Link></a></li>
                  <li><a href="#" style={{ color: 'white', textDecoration:"none" }}><Link to='/dashboard'>Dashboard</Link></a></li>
                </ul>
              </section>
              <section className="footer-item">
                <h3 style={{ color: 'white' }}>Посетете</h3>
                <a style={{ color: 'white',textDecoration:"none"  }} href="#">
                  <p>Envoy So. California</p>
                  <p>34 Tesla, Ste 100</p>
                  <p>Irvine, Ca, USA 92618</p>
                </a>
                <h3 className="desktop">Пишете ни</h3>
                <p className="desktop"><a style={{ color: 'white', textDecoration:"none" }} href="#">urocibg2@gmail.com</a></p>
                <p className="desktop">+359 87 634 2755</p>
              </section>
              <section className="footer-item">
                <h3>New Business</h3>
                <p><a href="#">Email us</a></p>
                <p><a href="#">949.333.3106</a></p>
              </section>
              <section className="footer-item">
                <h4 style={{ color: 'white' }}>Follow</h4>
                <ul>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">LinkedIn</a></li>
                </ul>
              </section>
              <section className="footer-item">
                <h3 style={{ color: 'white' }}>Legal</h3>
                <ul>
                  <li style={{ textDecoration: 'none' }}><a href="#" style={{ textDecoration: 'none' }}>Terms</a></li>
                  <li style={{ textDecoration: 'none' }}><a href="#" style={{ textDecoration: 'none' }}>Privacy</a></li>
                </ul>
              </section>
            </nav>
          </footer>
        </div>
      </section>
    </div >
  )
}
export default Home