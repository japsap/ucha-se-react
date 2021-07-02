import React from 'react';
import { Container } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import './404.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import $ from "jquery";

const connectionLost404 = ({ history }) => {
    $(function () {
        var liWidth = $("li").css("width");
        $("li").css("height", liWidth);
        $("li").css("lineHeight", liWidth);
        var totalHeight = $("#wordsearch").css("width");
        $("#wordsearch").css("height", totalHeight);
    });
    $(window).on('resize', function () {
        var liWidth = $(".one").css("width");
        $("li").css("height", liWidth);
        $("li").css("lineHeight", liWidth);
        var totalHeight = $("#wordsearch").css("width");
        $("#wordsearch").css("height", totalHeight);
    });



    $(function () {
        /* 4 */
        $(this).delay(1500).queue(function () {
            $(".one").addClass("selected");
            $(this).dequeue();
        })
            /* 0 */
            .delay(100).queue(function () {
                $(".two").addClass("selected");
                $(this).dequeue();
            })
            /* 4 */
            .delay(100).queue(function () {
                $(".three").addClass("selected");
                $(this).dequeue();
            })
            /* P */
            .delay(100).queue(function () {
                $(".four").addClass("selected");
                $(this).dequeue();
            })
            /* A */
            .delay(100).queue(function () {
                $(".five").addClass("selected");
                $(this).dequeue();
            })
            /* G */
            .delay(100).queue(function () {
                $(".six").addClass("selected");
                $(this).dequeue();
            })
            /* E */
            .delay(100).queue(function () {
                $(".seven").addClass("selected");
                $(this).dequeue();
            })
            /* N */
            .delay(100).queue(function () {
                $(".eight").addClass("selected");
                $(this).dequeue();
            })
            /* O */
            .delay(100).queue(function () {
                $(".nine").addClass("selected");
                $(this).dequeue();
            })
            /* T */
            .delay(100).queue(function () {
                $(".ten").addClass("selected");
                $(this).dequeue();
            })
            /* F */
            .delay(100).queue(function () {
                $(".eleven").addClass("selected");
                $(this).dequeue();
            })
            /* O */
            .delay(100).queue(function () {
                $(".twelve").addClass("selected");
                $(this).dequeue();
            })
            /* U */
            .delay(100).queue(function () {
                $(".thirteen").addClass("selected");
                $(this).dequeue();
            })
            /* N */
            .delay(100).queue(function () {
                $(".fourteen").addClass("selected");
                $(this).dequeue();
            })
            /* D */
            .delay(100).queue(function () {
                $(".fifteen").addClass("selected");
                $(this).dequeue()
            });
    });

    const navbar = {
        position: 'fixed',
        width: '100%',
        height: '80px',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)',
        zIndex: '1',
        marginTop: '150px'
    }
    //opening the mobile navbar
    function open() {
        document.getElementById('slidebar').classList.toggle('active');
    }
    //closing the mobile navbar
    function close() {
        document.getElementById('slidebar').classList.toggle('active');
    }

    return (
        <div>
            <div className="wrapper">
                <div id="wrap">
                    <div id="wordsearch">
                        <ul>
                            <li>k</li>
                            <li>v</li>
                            <li>n</li>
                            <li>z</li>
                            <li>i</li>
                            <li>x</li>
                            <li>m</li>
                            <li>e</li>
                            <li>t</li>
                            <li>a</li>
                            <li>x</li>
                            <li>l</li>
                            <li className="one">4</li>
                            <li className="two">0</li>
                            <li className="three">4</li>
                            <li>y</li>
                            <li>y</li>
                            <li>w</li>
                            <li>v</li>
                            <li>b</li>
                            <li>o</li>
                            <li>q</li>
                            <li>d</li>
                            <li>y</li>
                            <li>p</li>
                            <li>a</li>
                            <li className="four">p</li>
                            <li className="five">a</li>
                            <li className="six">g</li>
                            <li className="seven">e</li>
                            <li>v</li>
                            <li>j</li>
                            <li>a</li>
                            <li className="eight">n</li>
                            <li className="nine">o</li>
                            <li className="ten">t</li>
                            <li>s</li>
                            <li>c</li>
                            <li>e</li>
                            <li>w</li>
                            <li>v</li>
                            <li>x</li>
                            <li>e</li>
                            <li>p</li>
                            <li>c</li>
                            <li>f</li>
                            <li>h</li>
                            <li>q</li>
                            <li>e</li>
                            <li className="eleven">f</li>
                            <li className="twelve">o</li>
                            <li className="thirteen">u</li>
                            <li className="fourteen">n</li>
                            <li className="fifteen">d</li>
                            <li>s</li>
                            <li>w</li>
                            <li>q</li>
                            <li>v</li>
                            <li>o</li>
                            <li>s</li>
                            <li>m</li>
                            <li>v</li>
                            <li>f</li>
                            <li>u</li>
                        </ul>
                    </div>
                    <div id="main-content">
                        <h1>We couldn't find what you were looking for.</h1>
                        <p style={{ color: '#9ebe2b' }}>Unfortunately the page you were looking for could not be found. It may be
            temporarily unavailable, moved or no longer exist.</p>
                        <button onClick={() => { history.push('/') }} className="btn-1"><i style={{ marginRight: '10px', fontSize: '15px' }} class="fal fa-home"></i>Home page</button>
                        <button onClick={() => { history.push('/about') }} className="btn-2"><i style={{ marginRight: '20px', fontSize: '15px' }} class="fal fa-arrow-to-left"></i>Previouse page</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connectionLost404




         