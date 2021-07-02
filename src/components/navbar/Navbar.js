import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import logo from '../../images/logo.png'
import './navbar.css';

const Navbar = () => {
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
      <div id="navbar" className="navbar_ppc">
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
        </div>
    )
}

export default Navbar
