import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';

import './first.css'
import logo from '../../../images/logo.png';
import photo from '../../../images/photo.svg';
import parent from '../../../images/parent.svg';
import student from '../../../images/student.svg';
import teacher from '../../../images/teacher.svg'
import drug from '../../../images/drug.svg';

const FirstStep = ({ history }) => {
    function open() {
        document.getElementById('slidebar').classList.toggle('active');
    }

    function close() {
        document.getElementById('slidebar').classList.toggle('active');
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
      <div id="navbar" className="first">
        <img className="navbar__logo" id="logo" src={logo}/>

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
          <a href="#"><li><Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>У нас</Link></li></a>

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
            <div className="textovo-pole">
                <h2>Стани част от Уроци.бг!</h2>
                <p style={{ fontSize: '15px', marginBottom: '20px', textAlign:'center'}}>Само с едно бързо логване ще намриш твоят учител</p>
                <p>Вече имаш акаунт?  <button onClick={() => { history.push('/sign') }}> Влез тук!</button></p>
            </div>
            <div class="tashak">
                <section class="step-indicator">
                    <div class="step step1 active">
                        <div class="step-icon">1</div>
                    </div>
                    <div class="indicator-line active"></div>
                    <div class="step step2">
                        <div class="step-icon">2</div>
                    </div>
                    <div class="indicator-line"></div>
                    <div class="step step3">
                        <div class="step-icon">3</div>
                    </div>
                </section>
            </div>
            <section className="py-5 mt-5">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h1 style={{ fontWeight: "bold" }}> Aз съм: </h1>
                        </Col>
                    </Row>
                </Container>
                {/* pc container */}
                <div className="pc">
                    <div class="boxesContainer d-flex justify-content-center">
                        <div class="cardBox" onClick={() => {history.push('/c')}}>
                            <div class="card-1">
                                <img className="img-dlu" src={teacher} />
                                <h4 className="name-text">Учител</h4>
                            </div>
                        </div>

                        <div class="cardBox"  onClick={() => {history.push('/c')}}>
                            <div class="card-1">
                                <img className="img-dlu" src={parent} />
                                <h4 className="name-text">Родител</h4>
                            </div>
                        </div>

                        <div class="cardBox"  onClick={() => {history.push('/c')}}>
                            <div class="card-1">
                                <img className="img-dlu" src={student} />
                                <h4 className="name-text">Ученик</h4>
                            </div>
                        </div>

                        <div class="cardBox"  onClick={() => {history.push('/c')}}>
                            <div class="card-1">
                                <img className="img-dlu" src={drug} />
                                <h4 className="name-text">Друг</h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* pc container */}

                {/* mobile container */}
                <div className="mobile">
                    <div class="boxesContainer"  onClick={() => {history.push('/c')}}>
                        <div class="cardBox">
                            <div class="card-1">
                                <img className="img-dlu" src={teacher} />
                                <h4 className="name-text">Учител</h4>
                            </div>
                        </div>

                        <div class="cardBox"  onClick={() => {history.push('/c')}}>
                            <div class="card-1">
                                <img className="img-dlu" src={parent} />
                                <h4 className="name-text">Родител</h4>
                            </div>
                        </div>
                                        
                        <div class="cardBox"  onClick={() => {history.push('/c')}}>
                            <div class="card-1">
                                <img className="img-dlu" src={student} />
                                <h4 className="name-text">Ученик</h4>
                            </div>
                        </div>

                        <div class="cardBox"  onClick={() => {history.push('/c')}}>
                            <div class="card-1">
                                <img className="img-dlu" src={drug} />
                                <h4 className="name-text">Друг</h4>
                            </div>
                        </div>
                    </div>
                </div>
                 {/* mobile container */}
            </section>
            {/* end of the section */}

    {/* footer link menu */}
    <div className="containerrrr">
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
    </div>
      {/* footer link menu */}
        </div>
    )
}

export default FirstStep;
