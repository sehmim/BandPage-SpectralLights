import React from 'react';
import './css/navbarStart.css';
import $ from 'jquery';
import 'react-bootstrap/lib';


import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaMusic from 'react-icons/lib/fa/music';
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square';

const navIconsLinks = {
    facebook : "https://www.facebook.com/SpectraLightsOfficial/",
    instagram: "https://www.instagram.com/spectral.lights/",
    bandcamp:"https://spectralights.bandcamp.com/",
    twitter: "https://twitter.com/sehmim"
}

const func = () => $(".hamburger").click(function(){
    $(".stickOne").toggleClass("stickMovedOne");
    $(".stickTwo").toggleClass("stickMovedTwo");
});

const scrollToView = (myElement) => {
    $('html, body').animate({
        scrollTop: ($(myElement).offset().top)
    },500);
}

const NavbarStart = () => (
    <div>
        <div className="nav-body">
            <nav className="navbar navbar-inverse">
                <div className="container-fluid nav-body-fluid">
                    <ul className="nav navbar-nav">
                            <li><img className="spectral-logo" src={require('./images/logo.png')} alt={ 'logo' } /></li>
                            <li><a className="logo-wubble" href={navIconsLinks.facebook}><FaFacebookOfficial className="nav-logo" /></a></li>
                            <li><a className="logo-wubble" href={navIconsLinks.instagram}><FaInstagram className="nav-logo" /></a></li>
                            <li><a className="logo-wubble" href={navIconsLinks.bandcamp}><FaMusic className="nav-logo" /></a></li>
                            <li><a className="logo-wubble" href={navIconsLinks.twitter}><FaTwitterSquare className="nav-logo" /></a></li>
                    </ul>
                </div>
            </nav>
        </div>

        <div class="dropdown">
            <div className="hamburger" onClick={func}>
                <div className="stickOne" ></div>
                <div className="stickTwo" ></div>
            </div>
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div> 

    </div>
);



  export default NavbarStart;