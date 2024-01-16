import React, {useState, useEffect, useContext} from 'react'
import LeaderBoardImage from './image/leaderboard.jpg'
import COLORS from './constants/colors';
import LeaderGirl from './icon/LeaderGirl.png';
import Medal from './icon/Medal.svg';
import {AllProvider, AllContext} from './context/AllContext';

const Dashboard = () => {
  const {isNavbarVisible, setIsNavbarVisible} = useContext(AllContext);
    const [isConfettiHidden, setIsConfettiHidden] = useState(false);



    //   const summonNav = () => {
    //     setIsNavbarVisible((prev) => !prev);
    //   };
    
      useEffect(() => {
              // Set isNavbarVisible to false on page load
    // setIsNavbarVisible(true);

    // Get the navbar element by ID
    const navbar = document.getElementById('header');

    // Set the initial display style to none
    navbar.style.display = 'block';


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

      useEffect(() => {
        const timeoutId = setTimeout(() => {
          setIsConfettiHidden(true);
        }, 1000);
    
        // Clean up the timeout to avoid memory leaks
        return () => clearTimeout(timeoutId);
      }, []);

    const confettiShapes = Array.from({ length: 100 }, (_, index) => ({
        left: `${(Math.random() * 100)+50}vw`,      
        animationDelay: `${Math.random()}s`,
        backgroundColor: COLORS.confettiColors[Math.floor(Math.random() * COLORS.confettiColors.length)],
        transform: `rotate(${Math.random() * 360}deg)`,
      }));
  return (
<div className={`row ${isNavbarVisible ? 'navbar-visible' : 'navbar-hidden'}`} style={{zIndex: 20, }}>
    <div className="dashboard col-12 col-lg-9 ms-lg-auto ms-3 p-5 h-100" style={{ backgroundColor: COLORS.primary, height: "100%", }}>
    
   {/* <div className="text-end lead pb-3 d-lg-none d-block" onClick={summonNav}>
        <i className="fas fa-bars text-light"></i></div> */} 
  <div className="text-end lead pb-3 d-lg-none d-block" style={{ marginLeft: 'auto', }} onClick={summonNav}>
  <i className={`fas text-light ${isNavbarVisible?"fa-bars":"fa-x"}`}></i></div>  
       

<div className="heading">   
   {/* Confetti background */}
   {/* <div className="confetti">
        {confettiShapes.map((confettiShape, index) => (
          <div
            key={index}
            className="confetti-shape"
            style={{
              position: 'absolute',
              width: '10px',
              height: '10px',
              zIndex: isConfettiHidden ? 25 : 30,
              display: isConfettiHidden ? 'none' : 'block',
              background: 'transparent',
              transformOrigin: '50% 50%',
              animation: 'confettiAnimation 5s 2',
              ...confettiShape,
            }}
          />
        ))}
      </div>  */}
    <div><span className="text-light">Hello Stella,</span></div>
</div>
<div className="d-flex heading">    
    <span className="text-light small w-75 my-3">Welcome to the Leaderboard! Here's where champions are recognized. Check out the top performers, see who's dominating the trivia game, and strive to claim the throne. Can you climb to the highest ranks and become a trivia legend? Compete, conquer, and make your mark on the leaderboard today!</span>
</div>



<section className="bg-deeper mb-2 rounded-4">
<img src={LeaderBoardImage} alt="Kick Logo" className="w-100 rounded-4"/>
</section>  






<div className="">
      <div className="row">
        {/* First Column */}
        <div className="col-md-6">
          <div className="container my-4 py-1 rounded-2" style={{ backgroundColor: COLORS.pink, }}>
            <div className="card-body d-flex justify-content-between align-items-center" >
              {/* Content for the first card */}
              <div>
              <span className="text-light small">01</span>
              <img src={LeaderGirl} alt="Leader Girl Icon" className="rounded-4 px-3"/>
              <span className="text-light small">Francis</span>
              </div>
              <span className="text-light small">1720pts</span>
              <img src={Medal} alt="Medal Icon" className="rounded-4 px-5"/>
            </div>
          </div>
          
          <div className="container mb-4 py-1 rounded-2" style={{ backgroundColor: COLORS.pink, }}>
            <div className="card-body d-flex justify-content-between align-items-center" >
              {/* Content for the second card */}
              <div>
              <span className="text-light small">01</span>
              <img src={LeaderGirl} alt="Leader Girl Icon" className="rounded-4 px-3"/>
              <span className="text-light small">Francis</span>
              </div>
              <span className="text-light small">1720pts</span>
              <img src={Medal} alt="Medal Icon" className="rounded-4 px-5"/>
            </div>
          </div>
          
          <div className="container mb-4 py-1 rounded-2" style={{ backgroundColor: COLORS.pink, }}>
            <div className="card-body d-flex justify-content-between align-items-center" >
              {/* Content for the third card */}
              <div>
              <span className="text-light small">01</span>
              <img src={LeaderGirl} alt="Leader Girl Icon" className="rounded-4 px-3"/>
              <span className="text-light small">Francis</span>
              </div>
              <span className="text-light small">1720pts</span>
              <img src={Medal} alt="Medal Icon" className="rounded-4 px-5"/>
            </div>
          </div>
          
          <div className="container mb-2 py-1 rounded-2" style={{ backgroundColor: COLORS.pink, }}>
            <div className="card-body d-flex justify-content-between align-items-center" >
              {/* Content for the forth card */}
              <div>
              <span className="text-light small">01</span>
              <img src={LeaderGirl} alt="Leader Girl Icon" className="rounded-4 px-3"/>
              <span className="text-light small">Francis</span>
              </div>
              <span className="text-light small">1720pts</span>
              <img src={Medal} alt="Medal Icon" className="rounded-4 px-5"/>
            </div>
          </div>
        </div>



        {/* Second Column */}
        <div className="col-md-6">
        <div className="container my-4 py-1 rounded-2" style={{ backgroundColor: COLORS.pink, }}>
            <div className="card-body d-flex justify-content-between align-items-center" >
              {/* Content for the first card */}
              <div>
              <span className="text-light small">01</span>
              <img src={LeaderGirl} alt="Leader Girl Icon" className="rounded-4 px-3"/>
              <span className="text-light small">Francis</span>
              </div>
              <span className="text-light small">1720pts</span>
              <img src={Medal} alt="Medal Icon" className="rounded-4 px-5"/>
            </div>
          </div>
          
          <div className="container mb-4 py-1 rounded-2" style={{ backgroundColor: COLORS.pink, }}>
            <div className="card-body d-flex justify-content-between align-items-center" >
              {/* Content for the second card */}
              <div>
              <span className="text-light small">01</span>
              <img src={LeaderGirl} alt="Leader Girl Icon" className="rounded-4 px-3"/>
              <span className="text-light small">Francis</span>
              </div>
              <span className="text-light small">1720pts</span>
              <img src={Medal} alt="Medal Icon" className="rounded-4 px-5"/>
            </div>
          </div>
          
          <div className="container mb-4 py-1 rounded-2" style={{ backgroundColor: COLORS.pink, }}>
            <div className="card-body d-flex justify-content-between align-items-center" >
              {/* Content for the third card */}
              <div>
              <span className="text-light small">01</span>
              <img src={LeaderGirl} alt="Leader Girl Icon" className="rounded-4 px-3"/>
              <span className="text-light small">Francis</span>
              </div>
              <span className="text-light small">1720pts</span>
              <img src={Medal} alt="Medal Icon" className="rounded-4 px-5"/>
            </div>
          </div>
          
          <div className="container mb-2 py-1 rounded-2" style={{ backgroundColor: COLORS.pink, }}>
            <div className="card-body d-flex justify-content-between align-items-center" >
              {/* Content for the forth card */}
              <div>
              <span className="text-light small">01</span>
              <img src={LeaderGirl} alt="Leader Girl Icon" className="rounded-4 px-3"/>
              <span className="text-light small">Francis</span>
              </div>
              <span className="text-light small">1720pts</span>
              <img src={Medal} alt="Medal Icon" className="rounded-4 px-5"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Dashboard

