import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import errorsvg from './image/404.svg'

const Nopage = ({title}) => {

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

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


  
// const doSomething=(e)={
//      x = -e.clientX / 5,
//         y = -e.clientY / 5;
//         errorContain=document.getElementById("errorcontain");
//     errorContain.style.backgroundPositionX = x + "px";
//     errorContain.style.backgroundPositionY = y + "px";

// }



  return (
  <div className={`dashboard row ms-3 p-5 h-100 w-100`}>
   {/* <div className="text-end lead pb-3 d-lg-none d-block" onClick={summonNav}>
        <i className="fas fa-bars text-light"></i></div> */} 
  <div className="text-end lead pb-3 d-lg-none d-block" style={{ marginLeft: 'auto', }} onClick={summonNav}>
  <i className={`fas text-light ${isNavbarVisible?"fa-bars":"fa-x"}`}></i></div>  
    <section id="errorcontain" className="errorpage dashboard bg-deepest mx-auto p-5">  

    <div className="errordisplay">
      {/*<h2>4<span>0</span>4</h2>*/}
    <h2><img src={errorsvg} alt="error404" /></h2>
      <h4 className="bg-brightest text-deepest">Opps! Page Not Found</h4>
      <p className="text-brightest fw-bold">
        The page you are looking for doesn't exist or may be, not uploaded till now. Otherwise You may have
        mistyped the address or the page may have moved
      </p>
      <Link to="/dashboard" className="errorlink">Go Back To Home</Link>
    </div>
  </section>
  </div>
  )
}






export default Nopage;