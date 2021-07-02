import React from 'react';

import Navbar from '../navbar/Navbar';

import { Link } from 'react-router-dom';

import emailjs, { send } from 'emailjs-com';

import { init } from 'emailjs-com';

import './Contact.css';

import shape from './shape.png';

import logo from '../../images/logo.png';

export default function ContactUs({ history }) {

    const style = {
        color: 'white'                                   // colors
    }

    const font = {
        fontSize: '15px',                                // colors
        listStyle: 'none'
    }

    function open() {
        document.getElementById('slidebar').classList.toggle('active');
    }

    function close() {
        document.getElementById('slidebar').classList.toggle('active');
    }

    const inputs = document.querySelectorAll("neshto");

    function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus1");
    }

    function blurFunc() {
        let parent = this.parentNode;
        if (this.value == "") {
            parent.classList.remove("focus1");
        }
    }

    inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
    }, []);

    init("user_qHRtjD52N9wxMLunTPm9I");                 //email js api

    function sendEmail(e) {
        e.preventDefault();
        var tempParam = {
            from_name: document.getElementById('fromName').value,
            email: document.getElementById('email').value,
            message: document.getElementById('msg').value,
            phone: document.getElementById('phone').value,
        };

        emailjs.send('service_1gcj4nu', 'template_y8zddfz', tempParam)
            .then(function (res) {
                console.log('succsess', res.status);
            });
    }

    function sumbit(e) {
        var name = document.getElementById('fromName').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var message = document.getElementById('msg').value;
        var error_message = document.getElementById('error_message');

        error_message.style.padding = '0px'

        var text;

        if (name.lenght < 5) {
            text = alert('oh maa god')
            //error_message.innerHTML = text;
            return false;
        };
        if (email.indexOf('@') == -1 || email.lenght < 6) {
            text = alert('oh maa god')
            //error_message.innerHTML = text;
            return false;
        };
        if (isNaN(phone) || phone.lenght != 12) {
            text = alert('oh maa god')
            //error_message.innerHTML = text;
            return false;
        };
        if (message.lenght <= 20) {
            text = alert('oh maa god')
            //error_message.innerHTML = text;
            return false;
        };
        e.preventDefault();
        return true;
    };

    return (
        <div class="body">
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
                <img className="navbar__logo" id="logo" src={logo} />

                {/* toggle mobile navbar btn */}
                <div className="slidebar__toggle__btn" id="open" onClick={open}>
                    <i class="fal fa-bars"></i>
                </div>
                {/* toggle mobile navbar btn */}

                {/* pc navbar links*/}
                <div className="navbar__links">
                    <a href="#"><li><Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>У нас</Link></li></a>
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
            <button className="contact__btn" onClick={() => { history.push('/') }}><i style={{ fontSize: '25px', color: '#9ebe2b', marginLeft: '20px', marginTop: '20px' }} class="fal fa-times-circle"></i></button>
            <div className="cont">
                {/* contact form */}
                <span className="bc" />
                {/* right side contact form */}
                <img src={shape} className="square" alt="" />
                <div className="f">
                    <div className="ci">
                        <p id="error_message">

                        </p>
                        <h3 className="ti">Да се ​​свържем !</h3>
                        <p style={font} className="t">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                            dolorum adipisci recusandae praesentium dicta!
        </p>
                        <div className="inf">
                            <div className="information">
                                <p style={font}><i style={{ marginRight: '10px', fontSize: '15px', color: '#9ebe2b' }} class="fal fa-map-signs"></i>1 ul. „Strahil Voivoda“
София, България</p>
                            </div>
                            <div className="information">
                                <p style={font}><i style={{ marginRight: '10px', fontSize: '15px', color: '#9ebe2b' }} class="fal fa-envelope"></i>urocibg2@gmail.com</p>
                            </div>
                            <div className="information">
                                <p style={font}><i style={{ marginRight: '10px', fontSize: '15px', color: '#9ebe2b' }} class="fal fa-phone"></i>+359-89-634-2755</p>
                            </div>
                        </div>
                        <div className="sm">
                            <p style={{ fontSize: '15px' }}>Свържете се с нас чрез:</p>
                            <div className="si">
                                <a href="#">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* right side contact form */}

                    {/* right side contact form */}
                    <div className="cf">
                        <span className="c one" />
                        <span className="c two" />
                        <form className="form" autoComplete="off">
                            <h3 className="title " style={{ color: 'white', marginTop: '20px', marginBottom: '-20px' }}>Свържете се с нас</h3>
                            <div className="ic">
                                <label for="" className="l" style={style}><i style={{ marginRight: '10px', fontSize: '18px' }} class="fal fa-signature"></i>Име</label><br></br>
                                <input type="text" name="name" id="fromName" className="i" />
                            </div>
                            <div className="ic">
                                <label for="" className="l" style={style}><i style={{ marginRight: '10px', fontSize: '18px' }} class="fal fa-envelope"></i>Имейл</label><br></br>
                                <input type="email" name="email" id="email" className="i" />
                            </div>
                            <div className="ic">
                                <label for="" className="l" style={style}><i style={{ marginRight: '10px', fontSize: '15px' }} class="fal fa-phone"></i>Телефон</label><br></br>
                                <input type="tel" name="phone" id="phone" className="i" />
                            </div>
                            <div className="ic textarea">
                                <label for="" className="l" style={style}><i style={{ marginRight: '10px', fontSize: '15px' }} class="fal fa-sticky-note"></i>Съобщение</label><br></br>
                                <textarea name="message" className="i" id="msg" defaultValue={""} />
                            </div>
                            <input type="submit" defaultValue="Send" className="b" textarea="send" onClick={sendEmail} id="send" />
                        </form>
                    </div>
                    {/* right side contact form */}
                </div>
                {/* contact form */}
            </div>
        </div>
    )
}

//245faw










