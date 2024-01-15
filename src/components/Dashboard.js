import React, {useState, useEffect} from 'react'
import DashboardImage from './image/dashboard.jpg'
import Frame1 from './image/Frame1.png'
import Frame2 from './image/Frame2.png'
import Frame3 from './image/Frame3.png'
import Frame4 from './image/Frame4.png'
import COLORS from './constants/colors';
import User from './icon/User.png';
import CustomButton from "./layouts/smallbutton";

const Dashboard = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const onSubmit = () => {
      console.log("submit");
     }


     //   const summonNav = () => {
     //     setIsNavbarVisible((prev) => !prev);
     //   };
     
       useEffect(() => {
         const handleResize = () => {
           const viewportWidth = window.innerWidth;
           const navbar = document.getElementById('header');
           if (viewportWidth >= 992) {
             // If the screen size is larger than or equal to 992 pixels,
             // ensure the navbar is visible.
             setIsNavbarVisible(false);
             navbar.style.display = 'block'
           }
           if (viewportWidth <= 992) {
             // If the screen size is larger than or equal to 992 pixels,
             // ensure the navbar is visible.
             navbar.style.display = 'none'
             setIsNavbarVisible(true);
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
         setIsNavbarVisible(false);
       } else {
         navbar.style.display = 'none';
         setIsNavbarVisible(true);
       }
         }






  return (<div className={`dashboard row ms-3 p-5 h-100 w-100 ${isNavbarVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
    <div className="col-12 col-lg-9 ms-lg-auto" style={{ backgroundColor: COLORS.primary, height: "100%", }}>
      {/* <div className="text-end lead pb-3 d-lg-none d-block" onClick={summonNav}>
        <i className="fas fa-bars text-light"></i></div> */} 
  <div className="text-end lead pb-3 d-lg-none d-block" style={{ marginLeft: 'auto', }} onClick={summonNav}>
  <i className={`fas text-light ${isNavbarVisible?"fa-bars":"fa-x"}`}></i></div>  
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
  <div className="container-fluid col-7 align-items-between">
  <div className="container-fluid pt-3 d-flex text-nowrap">
    Your Wallet Balance <i className={`fas px-4 text-dark d-md-block d-none ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-light no-bother`} onClick={togglePasswordVisibility} style={{zIndex: 10,}}></i>
  </div>
  <div className="container-fluid fw-bold d-flex">
    {showPassword ? '$4500.99' : '****'}
    <i className={`fas px-4 text-dark d-md-none d-block ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-light no-bother`} onClick={togglePasswordVisibility} style={{zIndex: 10,}}></i>
  </div>
  <div className="mt-4 mb-2 mb-lg-0 d-md-flex d-inline smallbtn-cont" style={{ 
  zIndex: 10,
 }}>
 <button
      type="button"
      className="btn p-1 m-1 smallbtn"
      onClick={onSubmit}
    ><span className="small text-nowrap text-light">Earn More</span>
          </button>
          <button
      type="button"
      className="btn p-1 m-1 smallbtns"
      onClick={onSubmit}
    ><span className="small text-nowrap">Deposit</span>
          </button>
          <button
      type="button"
      className="btn p-1 m-1 smallbtns"
      onClick={onSubmit}
    ><span className="small text-nowrap">Withdraw</span>
          </button>
  </div>
  </div>
  <div className="container-fluid p-4 rounded-3 col-4 m-2" style={{ backgroundImage: 'linear-gradient(to bottom, #B86E9F, #FFFFFF)',
  border: '1px solid #FF1975', // Add a white border with 2px thickness
  zIndex: 1,
 }}>
  {/* Content for the second div */}
</div>

</div>



    <div className="row container-fluid p-4 bg-light rounded-3 col-sm-8 col-md-4 text-light">
        Kick Trivia
        <div className="container-fluid fw-bold h3 align-self-end col-12 text-light">Your Sport <br /> Quiz Platform</div>
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

