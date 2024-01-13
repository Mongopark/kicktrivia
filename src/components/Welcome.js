import React from 'react';
import COLORS from './constants/colors';
import CustomButton from "./layouts/button";
import Kick from './icon/Kick.png'
import Ball from './icon/Ball.svg'

const Personal = () => {


    
  const handleSubmit = () => {
    console.log("submit");
  };


  const containerStyle = {
    backgroundColor: COLORS.primary,
    height: '100vh', // 100% of the viewport height
    display: 'flex',
    flexDirection: 'column',
    padding: '20px', // Add padding as needed
    paddingTop: 50,
  };

  const textStyle = {
    color: COLORS.textgrey,
  };

//   const columnLeft = {
    
//   };

  return (
    <section style={containerStyle} className="h-100">
            <div className="text-brightest small text-center p-5 m-5 h-100">
      <div className="text-brightest small text-center">
        Ready to play? Get Started
      </div>
      <div style={textStyle} className="small text-center">
        Dive into the game, Kick off and compete with others
      </div>
    <img src={Ball} alt="Ball Icon" className="small mt-3 ms-3 justify-self-center" style={{position: "absolute", top: 100, right: 110, width: 40, height: 40,}}/>
    <img src={Ball} alt="Ball Icon" className="small mt-3 ms-3 justify-self-center" style={{position: "absolute",bottom: 100, left: 90, width: 80, height: 80,}}/>
      </div>
      <div className="container-fluid justify-content-between row ms-auto">
        {/* Left Column */}
        <div className="container-fluid col-md-6 text-center text-md-start" style={{ borderRight: "2px solid #FF1975",
    paddingTop: 100,
    paddingBottom: 100,
    }}>
          <h1 style={textStyle} className="text-center small pb-3">
            New to KICK? Sign Up and Score Big!
          </h1>
          <h1 style={textStyle} className="text-center small">
            Become a part of the KICK community. Create your account and unlock exclusive features, compete with friends, and rise through the ranks as you prove yourself as the ultimate football trivia champion
          </h1>
          <div className="text-deepest small d-flex justify-content-center justify-content-md-start">
            <CustomButton
                  title="Register"
                  color={"white"}
                  bG={COLORS.pink}
                  style={{width: 300, height: 40, margin: "0 auto", marginTop: 20, }}
                  onPress={handleSubmit}
                  outline={false}
                  disabled={false}
                  goTo="/register"
                />
          </div>
        </div>

        {/* Right Column */}
        <div className="container-fluid col-md-6 text-center text-md-start" style={{ 
    paddingTop: 100,
    paddingBottom: 100,
    }}>
          <h1 style={textStyle} className="text-center small pb-3">
          Already a KICK superstar? Let's Play!
          </h1>
          <h1 style={textStyle} className="text-center small pb-3">
          Welcome back to the pitch, KICK champion! Log in to continue your journey, tackle new challenges, and keep your winning streak alive
          </h1>
          <div className="text-deepest small d-flex justify-content-center justify-content-md-start">
          <CustomButton
                  title="Log In"
                  color={"white"}
                  bG={COLORS.btngrey}
                  style={{width: 200, height: 40, margin: "0 auto", marginTop: 20, }}
                  onPress={handleSubmit}
                  outline={false}
                  disabled={false}
                />
          </div>
        </div>
      </div>
      <div className="text-deepest small d-flex justify-content-center">
    <img src={Kick} alt="Kick Logo" className="small mt-3 ms-3 justify-self-center" style={{width: 60, height: 20,}}/>
</div>
    </section>
  );
};

export default Personal;
