import React, {useState, useEffect} from 'react'
import DashboardImage from './image/dashboard.jpg'
import Frame1 from './image/Frame1.png'
import Frame2 from './image/Frame2.png'
import Frame3 from './image/Frame3.png'
import Frame4 from './image/Frame4.png'
import COLORS from './constants/colors';
import User from './icon/User.png';

const Dashboard = () => {
    const [isNavbarVisible, setNavbarVisible] = useState(true);

//   const summonNav = () => {
//     setNavbarVisible((prev) => !prev);
//   };

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const navbar = document.getElementById('header');
      if (viewportWidth >= 992) {
        // If the screen size is larger than or equal to 992 pixels,
        // ensure the navbar is visible.
        setNavbarVisible(true);
        navbar.style.display = 'block'
      }
      if (viewportWidth <= 992) {
        // If the screen size is larger than or equal to 992 pixels,
        // ensure the navbar is visible.
        navbar.style.display = 'none'
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    const summonNav = () => {
        const navbar = document.getElementById('header');

  if (navbar.style.display === 'none' || navbar.style.display === '') {
    navbar.style.display = 'block';
  } else {
    navbar.style.display = 'none';
  }
    }
  return (<div className={`row ${isNavbarVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
    <div className="dashboard col-12 col-lg-9 ms-lg-auto ms-3 p-5 h-100" style={{ backgroundColor: COLORS.primary, height: "100%", }}>
    
    {/* <div className="text-end lead pb-3 d-lg-none d-block" onClick={summonNav}>
        <i className="fas fa-bars text-light"></i></div> */}
        <div className="text-end lead pb-3 d-lg-none d-block" onClick={summonNav}>
        <i className="fas fa-bars text-light"></i>
      </div>
<div className="d-flex heading">    
    <div><span className="text-light">Hi Stella</span></div>
    <div>
    <i className="fas fa-bell rounded-5 text-light px-5"></i>
    <img src={User} alt="User Icon" className="rounded-3 user-icon"/>
    </div>
</div>
<div className="d-flex heading">
    <span className="text-light small">KickStart your day with high points</span>
</div>
     <section className="container-fluid">
    <div className="container-fluid row">

<div className="container row col-12 justify-content-center justify-content-md-between g-1 ms-auto">
    <div className="row container-fluid my-2 my-md-0 bg-light rounded-3 col-sm-8 col-md-8">
        Thank you Jesus
   <div className="container-fluid my-2 my-md-0 fw-bold h3 align-self-end col-12">Protect what matters</div>
    </div>


    <div className="row container-fluid p-4 bg-light rounded-3 col-sm-8 col-md-4">
        Thank you Jesus
        <div className="container-fluid fw-bold h3 align-self-end col-12">Many means <br />to one goal</div>
    </div>
</div>
</div>
</section>



<div className="d-flex heading mt-2">    
    <div><span className="text-light small">Top players this week</span></div>
    <div><span className="text-light small">View LeaderBoard</span></div>
</div>
<section className="bg-deeper mb-2 rounded-4">
    <img src={DashboardImage} alt="Kick Logo" className="w-100 rounded-4"/>
</section>  






<section className="bg-brightest" style={{backgroundColor: COLORS.primary,}}>
<div className="d-flex heading mt-2"  style={{backgroundColor: COLORS.primary,}}>    
    <div><span className="text-light small">Recommended for you</span></div>
</div>
    <div className="row spanfullwidth" style={{backgroundColor: COLORS.primary,}}>
        <div className="container text-deepest text-center col-6 col-md-3">
        <img src={Frame1} alt="Kick Logo" className="w-100 rounded-3"/>
        </div>

        <div className="container text-deepest text-center col-6 col-md-3">
        <img src={Frame2} alt="Kick Logo" className="w-100 rounded-3"/>
                    </div>

                    <div className="container text-deepest text-center col-6 col-md-3 ">
        <img src={Frame3} alt="Kick Logo" className="w-100 rounded-3 mt-3 mt-lg-0"/>
                                </div>

        <div className="container text-deepest text-center col-6 col-md-3">
        <img src={Frame1} alt="Kick Logo" className="w-100 rounded-3 mt-3 mt-lg-0"/>
        </div>

    </div>
</section> 
</div>
</div>
  )
}

export default Dashboard

