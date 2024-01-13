import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
// import Typed from 'typed.js';
// import Waypoint from 'react-waypoint';
// import Isotope from 'isotope-layout';
// import AOS from 'aos';
// import GLightbox from 'glightbox';
// import Swiper from 'swiper';
// import PureCounter from 'purecounter';
import Kick from './icon/Kick.png'
import CustomButton from "./layouts/button";
import COLORS from './constants/colors';


const NavBar = ({title}) => {
  const [activeLink, setActiveLink] = useState('');

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

    (function() {
        "use strict";
      
        /**
         * Easy selector helper function
         */
        const select = (el, all = false) => {
          el = el.trim()
          if (all) {
            return [...document.querySelectorAll(el)]
          } else {
            return document.querySelector(el)
          }
        }
      
        /**
         * Easy event listener function
         */
        const on = (type, el, listener, all = false) => {
          let selectEl = select(el, all)
          if (selectEl) {
            if (all) {
              selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
              selectEl.addEventListener(type, listener)
            }
          }
        }
      
        /**
         * Easy on scroll event listener 
         */
        const onscroll = (el, listener) => {
          el.addEventListener('scroll', listener)
        }
      
        /**
         * Navbar links active state on scroll
         */
        let navbarlinks = select('#navbar .scrollto', true)
        const navbarlinksActive = () => {
          let position = window.scrollY + 200
          navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return
            let section = select(navbarlink.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
              navbarlink.classList.add('active')
            } else {
              navbarlink.classList.remove('active')
            }
          })
        }
        window.addEventListener('load', navbarlinksActive)
        onscroll(document, navbarlinksActive)
      
        /**
         * Scrolls to an element with header offset
         */
        const scrollto = (el) => {
          let elementPos = select(el).offsetTop
          window.scrollTo({
            top: elementPos,
            behavior: 'smooth'
          })
        }
      
        /**
         * Back to top button
         */
        let backtotop = select('.back-to-top')
        if (backtotop) {
          const toggleBacktotop = () => {
            if (window.scrollY > 100) {
              backtotop.classList.add('active')
            } else {
              backtotop.classList.remove('active')
            }
          }
          window.addEventListener('load', toggleBacktotop)
          onscroll(document, toggleBacktotop)
        }
      
        /**
         * Mobile nav toggle
         */
        on('click', '.mobile-nav-toggle', function(e) {
          select('body').classList.toggle('mobile-nav-active')
          this.classList.toggle('bi-list')
          this.classList.toggle('bi-x')
        })
      
        /**
         * Scrool with ofset on links with a class name .scrollto
         */
        on('click', '.scrollto', function(e) {
          if (select(this.hash)) {
            e.preventDefault()
      
            let body = select('body')
            if (body.classList.contains('mobile-nav-active')) {
              body.classList.remove('mobile-nav-active')
              let navbarToggle = select('.mobile-nav-toggle')
              navbarToggle.classList.toggle('bi-list')
              navbarToggle.classList.toggle('bi-x')
            }
            scrollto(this.hash)
          }
        }, true)
      
        /**
         * Scroll with ofset on page load with hash links in the url
         */
        window.addEventListener('load', () => {
          if (window.location.hash) {
            if (select(window.location.hash)) {
              scrollto(window.location.hash)
            }
          }
        });
      
        
      
        /**
         * Porfolio isotope and filter
         */


        // window.addEventListener('load', () => {
        //   let portfolioContainer = select('.portfolio-container');
        //   if (portfolioContainer) {
        //     let portfolioIsotope = new Isotope(portfolioContainer, {
        //       itemSelector: '.portfolio-item'
        //     });
      
        //     let portfolioFilters = select('#portfolio-flters li', true);
      
        //     on('click', '#portfolio-flters li', function(e) {
        //       e.preventDefault();
        //       portfolioFilters.forEach(function(el) {
        //         el.classList.remove('filter-active');
        //       });
        //       this.classList.add('filter-active');
      
        //       portfolioIsotope.arrange({
        //         filter: this.getAttribute('data-filter')
        //       });
        //       portfolioIsotope.on('arrangeComplete', function() {
        //         AOS.refresh()
        //       });
        //     }, true);
        //   }
      
        // });



      
        /**
         * Initiate portfolio lightbox 
         */
        // const portfolioLightbox = GLightbox({
        //   selector: '.portfolio-lightbox'
        // });
      
       
      
      
        /**
         * Initiate Pure Counter 
         */
        // new PureCounter();
      
      })()

 const onSubmit = () => {
  console.log("submit");
 }

  return (
    <header id="header" className="header">
    <div className="d-flex flex-column">

      <div className="profile">
        <img src={Kick} alt="" class="img-fluid"/>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
        <li><Link to="/dashboard" className={`nav-item text-nowrap ${activeLink === '/dashboard' ? 'active' : ''}`} onClick={() => handleNavLinkClick('/dashboard')}><i className="fas fa-home"></i> <span>Dashboard</span></Link></li>
          <li><Link to="/playmode" className={`nav-item text-nowrap ${activeLink === '/playmode' ? 'active' : ''}`} onClick={() => handleNavLinkClick('/playmode')}><i className="fas fa-play"></i> <span>Play Mode</span></Link></li>
          <li><Link to="/leaderboard" className={`nav-item text-nowrap ${activeLink === '/leaderboard' ? 'active' : ''}`} onClick={() => handleNavLinkClick('/leaderboard')}><i className="fas fa-pie-chart"></i> <span>LeaderBoard</span></Link></li>
          <li><Link to="/errorpage1" className={`nav-item text-nowrap ${activeLink === '/errorpage1' ? 'active' : ''}`} onClick={() => handleNavLinkClick('/errorpage1')}><i className="fas fa-users"></i> <span>Multiplayer</span></Link></li>
          <li><Link to="/errorpage2" className={`nav-item text-nowrap ${activeLink === '/errorpage2' ? 'active' : ''}`} onClick={() => handleNavLinkClick('/errorpage2')}><i className="fas fa-bar-chart"></i> <span>Gaming Stats</span></Link></li>
          <li><Link to="/errorpage3" className={`nav-item text-nowrap ${activeLink === '/errorpage3' ? 'active' : ''}`} onClick={() => handleNavLinkClick('/errorpage3')}><i className="fas fa-envelope"></i> <span>How to play</span></Link></li>
          <li><Link to="/errorpage4" className={`nav-item text-nowrap ${activeLink === '/errorpage4' ? 'active' : ''}`} onClick={() => handleNavLinkClick('/errorpage4')}><i className="fas fa-gear"></i> <span>Settings</span></Link></li>
          <li><Link to="/errorpage5" className={`nav-item text-nowrap ${activeLink === '/errorpage5' ? 'active' : ''}`} onClick={() => handleNavLinkClick('/errorpage5')}><i className="fas fa-question"></i> <span>Help</span></Link></li>
          <li><Link to="/errorpage6" className={`nav-item text-nowrap ${activeLink === '/errorpage6' ? 'active' : ''}`} onClick={() => handleNavLinkClick('/errorpage6')}><i className="fas fa-power-off"></i> <span>Logout</span></Link></li>
        </ul>
      </nav>


      <div className="card rounded-5 mycard" style={{ maxWidth: '200px', maxHeight: "150px" }}>
      <div className="card-body">
        <h5 className="card-title text-center small">Trivia of the day</h5>
        <p className="card-text text-center small m-0">
        Play trivia of the day to gain extra points and coins
        </p>
        <div className="d-flex justify-content-center">
  <CustomButton
    title="Play trivia"
    color={"white"}
    bG={COLORS.pink}
    style={{ width: 200, height: 40, marging: 0, }}
    onPress={onSubmit}
    outline={false}
    disabled={false}
    goTo="/nopage"
  />
</div>
      </div>
    </div>
    </div>
  </header>
  )
}





export default NavBar;
