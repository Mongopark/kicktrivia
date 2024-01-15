import React, {useState, useEffect, useContext} from 'react'
import Base1 from './icon/Base1.svg'
import Base2 from './icon/Base2.svg'
import Base3 from './icon/Base3.svg'
import Badge from './icon/Badge.svg'
import Soccer from './icon/Soccer.svg'
import PlayGirl from './icon/PlayGirl.png'
import PlayBoy from './icon/PlayBoy.png'
import COLORS from './constants/colors';
import CustomButton from "./layouts/button";
import {AllProvider, AllContext} from './context/AllContext';




const YourUniqueComponent = () => {
  const {isNavbarVisible, setIsNavbarVisible} = useContext(AllContext);

  //   const summonNav = () => {
  //     setIsNavbarVisible((prev) => !prev);
  //   };
  
    useEffect(() => {
                  // Set isNavbarVisible to false on page load
    setIsNavbarVisible(true);

    // Get the navbar element by ID
    const navbar = document.getElementById('header');

    // Set the initial display style to none
    navbar.style.display = 'none';


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



  const onSubmit = () => {
    console.log("submit");
   }




  return (
  <div className={`row ${isNavbarVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
  <div className="dashboard col-12 col-lg-9 ms-lg-auto ms-3 p-5 h-100" style={{ backgroundColor: COLORS.primary, height: "100%", }}>

   {/* <div className="text-end lead pb-3 d-lg-none d-block" onClick={summonNav}>
        <i className="fas fa-bars text-light"></i></div> */} 
  <div className="text-end lead pb-3 d-lg-none d-block" style={{ marginLeft: 'auto', }} onClick={summonNav}>
  <i className={`fas text-light ${isNavbarVisible?"fa-bars":"fa-x"}`}></i></div>  
      <div className="heading">    
    <div><span className="text-light">Hey Stella,</span></div>
</div>
<div className="heading">    
    <span className="text-light small">CHOOSE PLAY MODE</span>
</div>
      <div className="row">        

        <div className="col-md-7">
          <div className="row">
            <div className="col-md-12">
              <div className="container mb-2 py-1 rounded-2 second-largest-card" style={{backgroundColor: COLORS.playcard}}>
                <div className="card-body d-flex align-items-center justify-content-between">
                  {/* Content for the first small card */}
                  <div className="card mysmallcard rounded-4 col-3">
    <img src={Base1} alt="Base Icon" className="small base-icon"/><img src={Badge} alt="Badge Icon" className="small play-badge"/>
    </div>
    <div className="fw-bold text-start col-9">SINGLE PLAYER MODE</div>
                   </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
            <div className="container my-2 py-1 rounded-2 second-largest-card" style={{backgroundColor: COLORS.playcard}}>
                <div className="card-body d-flex align-items-center justify-content-between">
                  {/* Content for the second small card */}
                  <div className="card mysmallcard rounded-4 col-3">
    <img src={Base2} alt="Base Icon" className="small base-icon"/><img src={Badge} alt="Badge Icon" className="small play-badge"/>
    </div>
    <div className="fw-bold text-start col-9">MULTI PLAYER MODE</div>
                   </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="container my-2 py-1 rounded-2 second-largest-card" style={{backgroundColor: COLORS.playcard}}>
                <div className="card-body d-flex align-items-center justify-content-between">
                  {/* Content for the third small card */}
                  <div className="card mysmallcard rounded-4 col-3">
    <img src={Base3} alt="Base Icon" className="small base-icon"/><img src={Badge} alt="Badge Icon" className="small play-badge"/>
    </div>
    <div className="fw-bold text-start col-9">CHALLENGE MODE</div>
                   </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="card mt-2 playboy-card">
                <div className="card-body">
                <img src={PlayGirl} alt="Base Icon" className="small play-girl"/>
                <img src={PlayBoy} alt="Badge Icon" className="small play-boy"/>
                  {/* Content for the second largest card */}
                  <div className="card-body my-4">
        <h5 className="card-title text-center small text-light">FEATURED</h5>
        <p className="card-text text-center small m-4 text-light">
        Take part in challenges with friends or<br /> other players
        </p>
        <div className="d-flex justify-content-center">
  <CustomButton
    title="Find Friends"
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
            </div>
          </div>
        </div>

        
        

        <div className="col-md-5">
          <div className="card largest-card" style={{backgroundColor: COLORS.playcard}}>
            <div className="card-body">
            <div className="text-center overflow-y-auto overflow-x-hidden" style={{height: 505,}}>
              <div className="lead fw-bold">HOW TO PLAY</div>
    <img src={Soccer} alt="Kick Logo" className="small"/>
              {/* Content for the largest card */}
              <div className="d-flex">
                    <div><span className="text-danger">■</span></div>
                    <div className="row text-start mx-2"><div className="fw-bold">Start a New Game</div><div>Tap the "Start Game" button to begin a new game.</div><div>You can also choose the difficulty level: Easy, Medium, or Hard.</div></div>
                  </div>
                  {/* Content for the largest card */}
              <div className="d-flex">
                    <div><span className="text-danger">■</span></div>
                    <div className="row text-start mx-2"><div className="fw-bold">Answer Questions</div><div>A series of football-related questions will appear on the screen</div><div>Read each question carefully and select the correct answer from the options provided</div></div>
                  </div>
                  {/* Content for the largest card */}
              <div className="d-flex">
                    <div><span className="text-danger">■</span></div>
                    <div className="row text-start mx-2"><div className="fw-bold">Earn Points</div><div>Correct answers will earn you points based on the question's difficulty. The faster you answer, the more points you'll receive.</div></div>
                  </div>
                  {/* Content for the largest card */}
              <div className="d-flex">
                    <div><span className="text-danger">■</span></div>
                    <div className="row text-start mx-2"><div className="fw-bold">Achievements and Leaderboard</div><div>Complete achievements to earn special badges.</div><div>Compete with other players and climb the leaderboard to show off your knowledge</div></div>
                  </div>
                  {/* Content for the largest card */}
              <div className="d-flex">
                    <div><span className="text-danger">■</span></div>
                    <div className="row text-start mx-2"><div className="fw-bold">Game Over</div><div>The game ends when you answer a question incorrectly, run out of time, or finish all the questions.</div><div>Your total points will be displayed along with your rank</div><div>Share your score on social media and challenge your friends to beat your high score.</div></div>
                  </div>
                  {/* Content for the largest card */}
              <div>
                    <div className="row text-start"><div className="fw-bold">Remember:</div><div>• The more you play, the more you'll learn about football.</div><div>• Keep an eye on the timer, as some questions can be challenging.</div><div>• Test your knowledge across various football topics and difficulty levels</div></div>
                  </div>
                  {/* Content for the largest card */}
                    <div className="row text-start my-3"><div> Get ready to dive into the world of football trivia and become the ultimate soccer expert! Have fun and enjoy the game. Good luck!</div></div>

                 </div>
            </div>
          </div>
        </div>


      </div>
    </div>
    </div>
  );
}

export default YourUniqueComponent;
