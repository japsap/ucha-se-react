import React from 'react';

import { Link } from 'react-router-dom';

import './About.css';

import pic from '../../images/footer.png';
import logo from '../../images/logo.png'

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = ({ history }) => {
  const navbar = {
    position: 'fixed',
    width: '100%',
    height: '80px',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)',
    zIndex: '1'
  }
  //opening the mobile navbar
  function open() {
    document.getElementById('slidebar').classList.toggle('active');
  };
  //closing the mobile navbar
  function close() {
    document.getElementById('slidebar').classList.toggle('active');
  };
  //declaring its in onscroll
  // window.onscroll = function () {
  //     navbarFucntion();
  // }
  //navbar onscroll fucntion to change the color of the background
  // function navbarFucntion() {
  //     if (document.body.scrollTop < 0 || document.documentElement.scrollTop < 0) {       //optional if the customer needs it
  //         document.getElementById('navba__r').style.backgroundColor = 'transparent';
  //     } else {
  //         document.getElementById('navba__r').style.backgroundColor = 'white';
  //     }
  // }

  const style = {
    color:'#6c63ff'
  }
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
      <div id="navbar" className="navbar_ppc">
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

      <span className="circle"></span>

      {/* section 1 */}
      <Container className="section_1">
        <Row>
          <Col md="6" style={{ marginTop: '250px' }}>
            <img src={pic} className="section_pic" style={{ maxWidth: '100%', display: 'block', height: 'auto' }} />
          </Col>
          <Col md="6" className="section_1_col">
            <h1>Hello</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum
                quia commodi.
              </p>

            {/* btn section */}
            <a href="#us"><button className="section_login_button"><i style={{ marginRight: '10px', fontSize: '15px', rotate:'90deg' }} class="fad fa-angle-right"></i>Learn more</button></a>
            {/* btn section */}
          </Col>
        </Row>
      </Container>
      {/* section 1 */}
      <section id="us"className="section_2">
        <Container>
          <Row>
            <Col>
              <h1 class="text-center section_h1">Our team</h1>
            </Col>
          </Row>
        </Container>
        <main className="section_2_main">
          {/* Ui cards */}
          <section id="cards">
            <span className="circle_2"></span>
            <span className="circle_3"></span>
            <span className="circle_4"></span>
            <div className="container py-2">
              {/* cards */}
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 pt-5">
                  <div className="card shadow-sm border-0">
                    <div className="card-body">
                      <div className="user-picture">
                        <img src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" className="shadow-sm rounded-circle" height={130} width={130} />
                      </div>
                      <div className="user-content">
                        <h5 className="text-capitalize user-name">Carry Johnshon</h5>
                        <p className=" text-capitalize text-muted small blockquote-footer">Web developer</p>
                        <div className="small">
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star-half-alt text-warning" />
                          <i className="fas fa-star text-light" />
                        </div>
                        <p className="small text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum
                        quia commodi.</p>
                        <a  style={{ color: '#6c63ff', listStyle: 'none', display: 'inline-block' }} href="#"><li><i class="fab fa-facebook-square"></i></li></a>
                        <a  style={{ color: '#6c63ff', listStyle: 'none', display: 'inline-block' }} href="https://www.instagram.com/ivanoww02/"><li><i class="fab fa-instagram"></i></li></a>
                        <a  style={{ color: '#6c63ff', listStyle: 'none', display: 'inline-block' }} href="#"><li><i class="fab fa-twitter"></i></li></a>
                        <a  style={{ color: '#6c63ff', listStyle: 'none', display: 'inline-block' }} href="https://github.com/japsap"><li><i class="fab fa-github-square"></i></li></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 pt-5">
                  <div className="card shadow-sm border-0">
                    <div className="card-body">
                      <div className="user-picture">
                        <img src="https://images.unsplash.com/photo-1582003457856-20898dd7e1ea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" className="shadow-sm rounded-circle" height={130} width={130} />
                      </div>
                      <div className="user-content">
                        <h5 className="text-capitalize user-name">Alex Carry</h5>
                        <p className=" text-capitalize text-muted small blockquote-footer">Web developer</p>
                        <div className="small">
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star-half-alt text-warning" />
                          <i className="fas fa-star text-light" />
                          <i className="fas fa-star text-light" />
                        </div>
                        <p className="small text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum
                        quia commodi.</p>
                        <a style={{ color: '#6c63ff', listStyle: 'none', display: 'inline-block' }} href="#"><li><i class="fab fa-facebook-square"></i></li></a>
                        <a style={{ color: '#6c63ff', listStyle: 'none', display: 'inline-block' }} href="https://www.instagram.com/ivanoww02/"><li><i class="fab fa-instagram"></i></li></a>
                        <a style={{ color: '#6c63ff', listStyle: 'none', display: 'inline-block' }} href="#"><li><i class="fab fa-twitter"></i></li></a>
                        <a style={{ color: '#6c63ff', listStyle: 'none', display: 'inline-block' }} href="https://github.com/japsap"><li><i class="fab fa-github-square"></i></li></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 pt-5">
                  <div className="card shadow-sm border-0">
                    <div className="card-body">
                      <div className="user-picture">
                        <img src="https://images.unsplash.com/photo-1492447166138-50c3889fccb1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" className="shadow-sm rounded-circle" height={130} width={130} />
                      </div>
                      <div className="user-content">
                        <h5 className="text-capitalize user-name">John Smith</h5>
                        <p className=" text-capitalize text-muted small blockquote-footer">Web developer</p>
                        <div className="small">
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star-half-alt text-warning" />
                        </div>
                        <p className="small text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum
                        quia commodi.</p>
                        <a style={{ color: '#6c63ff', listStyle: 'none', display: 'inline-block' }} href="#"><li><i class="fab fa-facebook-square"></i></li></a>
                        <a style={{ color: '#6c63ff', listStyle: 'none', display: 'inline-block' }} href="https://www.instagram.com/ivanoww02/"><li><i class="fab fa-instagram"></i></li></a>
                        <a style={{ color: '#6c63ff', listStyle: 'none', display: 'inline-block' }} href="#"><li><i class="fab fa-twitter"></i></li></a>
                        <a style={{ color: '#6c63ff', listStyle: 'none', display: 'inline-block' }} href="https://github.com/japsap"><li><i class="fab fa-github-square"></i></li></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 pt-5">
                  <div className="card shadow-sm border-0">
                    <div className="card-body">
                      <div className="user-picture">
                        <img src="https://i.picsum.photos/id/836/130/130.jpg?hmac=Sot_REUw5W-XSuE6FmCjT9JenhZfiNqZYs3AQbfrZsc" className="shadow-sm rounded-circle" height={130} width={130} />
                      </div>
                      <div className="user-content">
                        <h5 className="text-capitalize user-name">George Alex</h5>
                        <p className=" text-capitalize text-muted small blockquote-footer">Web developer</p>
                        <div className="small">
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star-half-alt text-warning" />
                          <i className="fas fa-star text-light" />
                          <i className="fas fa-star text-light" />
                          <i className="fas fa-star text-light" />
                        </div>
                        <p className="small text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum
                        quia commodi.</p>
                        <a style={{ color: '#6c63ff', listStyle: 'none', display: 'inline-block' }} href="#"><li><i class="fab fa-facebook-square"></i></li></a>
                        <a style={{ color: '#6c63ff', listStyle: 'none', display: 'inline-block' }} href="https://www.instagram.com/ivanoww02/"><li><i class="fab fa-instagram"></i></li></a>
                        <a style={{ color: '#6c63ff', listStyle: 'none', display: 'inline-block' }} href="#"><li><i class="fab fa-twitter"></i></li></a>
                        <a style={{ color: '#6c63ff', listStyle: 'none', display: 'inline-block' }} href="https://github.com/japsap"><li><i class="fab fa-github-square"></i></li></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 pt-5">
                  <div className="card shadow-sm border-0">
                    <div className="card-body">
                      <div className="user-picture">
                        <img src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" className="shadow-sm rounded-circle" height={130} width={130} />
                      </div>
                      <div className="user-content">
                        <h5 className="text-capitalize user-name">Carry Johnshon</h5>
                        <p className=" text-capitalize text-muted small blockquote-footer">Web developer</p>
                        <div className="small">
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star-half-alt text-warning" />
                          <i className="fas fa-star text-light" />
                        </div>
                        <p className="small text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum
                        quia commodi.</p>
                        <a style={{ color: '#6c63ff', listStyle: 'none', display: 'inline-block' }} href="#"><li><i class="fab fa-facebook-square"></i></li></a>
                        <a style={{ color: '#6c63ff', listStyle: 'none', display: 'inline-block' }} href="https://www.instagram.com/ivanoww02/"><li><i class="fab fa-instagram"></i></li></a>
                        <a style={{ color: '#6c63ff', listStyle: 'none', display: 'inline-block' }} href="#"><li><i class="fab fa-twitter"></i></li></a>
                        <a style={{ color: '#6c63ff', listStyle: 'none', display: 'inline-block' }} href="https://github.com/japsap"><li><i class="fab fa-github-square"></i></li></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 pt-5">
                  <div className="card shadow-sm border-0">
                    <div className="card-body">
                      <div className="user-picture">
                        <img src="https://images.unsplash.com/photo-1582003457856-20898dd7e1ea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" className="shadow-sm rounded-circle" height={130} width={130} />
                      </div>
                      <div className="user-content">
                        <h5 className="text-capitalize user-name">Alex Carry</h5>
                        <p className=" text-capitalize text-muted small blockquote-footer">Web developer</p>
                        <div className="small">
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star-half-alt text-warning" />
                          <i className="fas fa-star text-light" />
                          <i className="fas fa-star text-light" />
                        </div>
                        <p className="small text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum
                        quia commodi.</p>
                        <a style={{ color: '#6c63ff', listStyle: 'none', display: 'inline-block' }} href="#"><li><i class="fab fa-facebook-square"></i></li></a>
                        <a style={{ color: '#6c63ff', listStyle: 'none', display: 'inline-block' }} href="https://www.instagram.com/ivanoww02/"><li><i class="fab fa-instagram"></i></li></a>
                        <a style={{ color: '#6c63ff', listStyle: 'none', display: 'inline-block' }} href="#"><li><i class="fab fa-twitter"></i></li></a>
                        <a style={{ color: '#6c63ff', listStyle: 'none', display: 'inline-block' }} href="https://github.com/japsap"><li><i class="fab fa-github-square"></i></li></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /cards */}
          </section>
          {/* /Ui cards */}
        </main>
      </section>
      {/* Section 2  */}
      
      {/* footer link menu */}
      <section id="section5" className=" py-5 bgwhite">
        <div className="container">
          <footer>
            <nav className="footer-inner">
              <section className="footer-item">
                <h1 style={{color:'white'}}>LOGO</h1>
                <h2 style={{color:'white'}}>We create possibilities <br />for the connected world.<br /><b className="color">Be Bold.</b></h2>
              </section>
              <section className="footer-item">
                <h3 style={{color:'white'}}>Explore</h3>
                <ul>
                  <li><a  href="#" style={{color:'white'}}>Home</a></li>
                  <li><a  href="#" style={{color:'white'}}>About</a></li>
                  <li><a  href="#" style={{color:'white'}}>Capabilities</a></li>
                  <li><a  href="#" style={{color:'white'}}>Careers</a></li>
                </ul>
              </section>
              <section className="footer-item">
                <h3 style={{color:'white'}}>Visit</h3>
                <a style={{color:'white'}} href="#">
                  <p>Envoy So. California</p>
                  <p>34 Tesla, Ste 100</p>
                  <p>Irvine, Ca, USA 92618</p>
                </a>
                <h3 className="desktop">New Business</h3>
                <p className="desktop"><a style={{color:'white'}} href="#">engage@weareenvoy.com</a></p>
                <p className="desktop"><a style={{color:'white'}} href="#">949.333.3106</a></p>
              </section>
              <section className="footer-item">
                <h3>New Business</h3>
                <p><a href="#">Email us</a></p>
                <p><a href="#">949.333.3106</a></p>
              </section>
              <section className="footer-item">
                <h3 style={{color:'white'}}>Follow</h3>
                <ul>
                  <li><a  href="#">Instagram</a></li>
                  <li><a  href="#">Twitter</a></li>
                  <li><a  href="#">LinkedIn</a></li>
                </ul>
              </section>
              <section className="footer-item">
                <h3 style={{color:'white'}}>Legal</h3>
                <ul>
                  <li style={{textDecoration:'none'}}><a href="#" style={{textDecoration:'none'}}>Terms</a></li>
                  <li style={{textDecoration:'none'}}><a href="#" style={{textDecoration:'none'}}>Privacy</a></li>
                </ul>
              </section>
            </nav>
          </footer>
        </div> 
      </section>
      {/* footer link menu */}

    </div>
  )
}
export default About