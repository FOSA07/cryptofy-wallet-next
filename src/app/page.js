'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
// import image from ''
// import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faLock, faUsersLine, faHouse, faList, faHeart, faCaretDown, faCaretUp, faCancel, faXmark } from '@fortawesome/free-solid-svg-icons';

const image = '/Assets/aeroplane.jpg';
const image1 = '/Assets/black-woman-with-suitcase-airport.jpg';
const image2 = '/Assets/abu-dhabi-seascape-with-skyscrapers.jpg';
const image3 = '/Assets/view-dubai-with-sun-sunrise-uae.jpg';
const image4 = '/Assets/book-laptop-pencil-clock-wooden-table-library-education-learning-concept.jpg';
// import image5 from '../Assets/study-group-african-people (1).jpg';
const image6 = '/Assets/study-group-african-people.jpg';


function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const handlePancakeClick = () => {
      // window.open('https://pancakeswap.finance/swap?outputCurrency=0x885c99a787BE6b41cbf964174C771A9f7ec48e04', '_blank', 'noopener,noreferrer');
  };

  const controlIsOpen = () => {
      if (isOpen){
          setIsOpen(false);
      }else {
          setIsOpen(true);
      }
      
    };


  return <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light" style={{  }}>
      {isOpen && <MobileNavOverlay isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div class="container-fluid">
      <a class="navbar-brand text-light" style={{ fontFamily: "Poppins", width: '165px', height: '50px' }} href="#">
          {/* <img src={image2} style={{width: '100%', height: '100%'}} alt="Logo" /> */}
      </a>

          <div className='d-none d-lg-block'>
          <div class="navbar-nav ml-auto d-flex ">
              <a class="nav-item nav-link text-dark " href="#about" style={{fontFamily: 'Poppins'}}>About</a>
              <a class="nav-item nav-link text-dark " href="#tokenomics" style={{fontFamily: 'Poppins'}}>Team</a>
              <a class="nav-item nav-link text-dark " href="#roadmap" style={{fontFamily: 'Poppins'}}>Whitepaper</a>
              <a class="nav-item nav-link text-dark " href="#how2buy" style={{fontFamily: 'Poppins'}}>How to buy</a>
              <a class="nav-item nav-link text-dark " href="#faq" style={{fontFamily: 'Poppins'}}>Tokenomics</a>
              {/* <a class="nav-item nav-link text-dark " href="#socials" style={{fontFamily: 'Poppins'}}>Socials</a> */}

              {/* <div className=" d-lg-none"><a class="text-light bg-danger px-3 py-1 rounded-3" href="#" style={{ textDecoration: 'none', fontWeight: 'bold', background: 'linear-gradient(180deg, #FF8A00 0%, #FFC200 100%)', boxShadow: '0px 5px 4px 0px rgba(0, 0, 0, 0.70)', fontFamily: 'Poppins' }}>Buy Now</a></div> */}
          </div>
          </div>

          <div className='d-none d-md-flex d-lg-none'>
          {/* <div class="navbar-nav ml-auto d-flex "> */}
              <a class="nav-item nav-link text-dark px-2" href="#about" style={{fontFamily: 'Poppins'}}>About</a>
              <a class="nav-item nav-link text-dark px-2" href="#tokenomics" style={{fontFamily: 'Poppins'}}>Team</a>
              <a class="nav-item nav-link text-dark px-2" href="#roadmap" style={{fontFamily: 'Poppins'}}>Whitepaper</a>
              <a class="nav-item nav-link text-dark px-2" href="#how2buy" style={{fontFamily: 'Poppins'}}>How to buy</a>
              <a class="nav-item nav-link text-dark px-2" href="#faq" style={{fontFamily: 'Poppins'}}>Tokenomics</a>
              {/* <a class="nav-item nav-link text-light px-2" href="#socials" style={{fontFamily: 'Poppins'}}>Socials</a> */}
              
              

              <div className=""><a class="text-light bg-danger px-3 py-1 rounded-5" style={{ textDecoration: 'none', background: 'linear-gradient(180deg, #FF8A00 0%, #FFC200 100%)', cursor: 'pointer', fontFamily: 'Poppins' }} onClick={handlePancakeClick}>Join Waitlist</a></div>
              {/* <div className=" d-lg-none"><a class="text-light bg-danger px-3 py-1 rounded-3" href="#" style={{ textDecoration: 'none', fontWeight: 'bold', background: 'linear-gradient(180deg, #FF8A00 0%, #FFC200 100%)', boxShadow: '0px 5px 4px 0px rgba(0, 0, 0, 0.70)', fontFamily: 'Poppins' }}>Buy Now</a></div> */}
          {/* </div> */}
          </div>

          <div className='d-md-none'>
              {/* <i className="bi bi-list btn p-1 rounded-3 mobile-nav-toggle text-light" onClick={() => setIsOpen(true)} style={{ boxShadow: "0px 5px 30px rgba(65, 84, 241, 0.4)", transition: "0.5s", fontWeight: 'bold', fontSize: '15px'}}/> */}
              <FontAwesomeIcon icon={faList} style={{ color: 'black', margin: '', fontSize: '20px', cursor: 'pointer' }}  onClick={controlIsOpen}/>
          </div>

          <div className="d-none d-lg-block"><a class="text-light bg-danger px-3 py-1 rounded-5" style={{ textDecoration: 'none', background: 'linear-gradient(180deg, #FF8A00 0%, #FFC200 100%)', cursor: 'pointer', fontFamily: 'Poppins' }} onClick={handlePancakeClick}>Join Waitlist</a></div>
      </div>
  </nav>
}

  const MobileNavOverlay = ({ isOpen, setIsOpen }) =>{

      const handleOverlayClick = () => {
          setIsOpen(false);
        };
      
        return (
          <div className='container-fluid bg-white' style={{ borderRadius: '10px', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999 }}>
          {/* <i className="bi bi-x bi-3x mobile-nav-toggle mx-auto" style={{color: "ButtonShadow", paddingLeft: "95vw"}} onClick={() => setIsOpen(false)} /> */}
          <div className="mobile-nav-overlay bg-white" onClick={handleOverlayClick} style={{ borderRadius: '10px', position: 'fixed', top: 0, left: 0, width: '100%', height: '80%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999 }}>
          <div className='d-flex justify-content-center align-items-center'>
            <nav id="navbar" className="navbar p-0 m-0">
            <FontAwesomeIcon icon={faXmark} className='mx-auto pb-3' style={{ color: 'black', margin: '', fontSize: '20px', fontWeight: 'bold', cursor: 'pointer' }}  onClick={() => setIsOpen(false)}/>
              {/* <i className="bi bi-x bi-3x mobile-nav-toggle mx-auto pb-3" style={{color: 'black', fontSize: '30px'}} onClick={() => setIsOpen(false)} /> */}
              <ul className="list-unstyled d-flex align-items-center" style={{ flexDirection: 'column', alignItems: 'center', width: "100%" }}>
                {/* <li style={{width: "100%"}}><a className="nav-link scrollto position-relative text-dark" href="#services">Lorem</a></li> */}
                <li style={{width: "100%"}}><a className="nav-link scrollto position-relative text-dark text-center py-3" href="#" style={{fontFamily: 'Poppins'}}>About</a></li>
                <li style={{width: "100%"}}><a className="nav-link scrollto position-relative text-dark text-center py-3" href="#" style={{fontFamily: 'Poppins'}}>Team</a></li>
                <li style={{width: "100%"}}><a className="nav-link scrollto position-relative text-dark text-center py-3" href="#" style={{fontFamily: 'Poppins'}}>Whitepaper</a></li>
                <li style={{width: "100%"}}><a className="nav-link scrollto position-relative text-dark text-center py-3" href="#" style={{fontFamily: 'Poppins'}}>How to buy</a></li>
                <li style={{width: "100%"}}><a className="nav-link scrollto position-relative text-dark text-center py-3" href="#" style={{fontFamily: 'Poppins'}}>Tokenomics</a></li>
                {/* <li style={{width: "100%"}}><Link to="/signUp" className="getstarted scrollto position-relative ">Become Viking</Link></li> */}
              </ul>
            </nav>
            </div>
          </div>
          </div>
        );
  }

function Hero (){

  return (
      <div className='container-fluid d-flex justify-content-center align-items-center' style={{minHeight: '80vh', fontFamily: 'Space Mono'}}>

          <div className='container-fluid d-block d-md-none py-5 ' >
              <h1 className='pt-5' style={{fontFamily: 'Space Mono', fontWeight: '700', fontSize: '50px', color: 'linear-gradient(180deg, #FFC700 0%, #FF7A00 100%)' }}>Get ready to be Protected</h1>
              
              <form className='pt-3'>
                  <div class="form-group py-3">
                      {/* <label for="exampleInputEmail1">Email address</label> */}
                      <input type="email" class="form-control border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address" style={{  }}/>
                      <small id="emailHelp" class="form-text text-muted pb-3">We'll never share your email with anyone else.</small>
                  </div>
                  
                  <button type="submit" class="btn btn-primary rounded-3">Sign up for our Waitlist</button>
              </form>
          </div>

          <div className='container-fluid d-none d-md-block py-5 px-4' style={{  }}>
              <h1 className='pt-5' style={{fontFamily: 'Space Mono', fontWeight: '700', fontSize: '70px', color: 'linear-gradient(180deg, #FFC700 0%, #FF7A00 100%)', width: '70vw'}}>Get ready to be Protected</h1>
              
              <form className='pt-3'>
                  <div class="form-group py-3">
                      {/* <label for="exampleInputEmail1">Email address</label> */}
                      <input type="email" class="form-control border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address" style={{width: '70vw'}}/>
                      <small id="emailHelp" class="form-text text-muted pb-3">We'll never share your email with anyone else.</small>
                  </div>
                  
                  <button type="submit" class="btn btn-primary rounded-3">Sign up for our Waitlist</button>
              </form>
          </div> 

      </div>
  );
}


function About (){

  return (
      <div className='container-fluid'>
          <div className='container'>
          <div className='d-flex justify-content-center align-items-center'>
              <h3 style={{fontFamily: 'Poppins', fontWeight: '600'}}>
                  About Phoenix Bot
              </h3><br/>
              
          </div>
          <div className='d-flex justify-content-center align-items-center'>
              <p className='text-center' style={{fontFamily: 'Poppins'}}>
                  In the dynamic and ever-evolving world of cryptocurrency, security is paramount, Meet SecureBot, your dedicated companion in the crypto realm, designed to provide maximum security through innovative features and robust functionalities.
              </p>
          </div>
          </div>

          <div className='pt-3'>

              <div className='container'>

                  <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2' style={{ }}>
                      <div className='bg-danger border-dark rounded-4 ' style={{  }}>
                      
                      </div>

                      <div className='bg-danger border-dark rounded-4 d-md-none px-4 py-4' style={{height: '100vw'}}>
                      
                      </div>

                      <div>
                      <div className='px-md-4 py-4'>
                          <h3 style={{fontWeight: 'bolder'}}>
                              Smart Contract Check
                          </h3>
                          <p >
                              PhoenixBot employs cutting-edge technology to conduct thorough smart contract audits. By meticulously scrutinizingn every line of code, it ensures that the contracts you engage with are Secure
                              and free from vulnerabilities. The proactive approach migrates the risk associated with smart contract explots, offering you peace of mind as you navigate the decentralized landscape
                          </p>
                      </div>

                      <div className='px-md-4 py-4'>
                          <div className='bg-danger border-dark rounded-4 d-md-none' style={{width: '35vw', height: '35vw'}}>
                      
                          </div><br />
                          <h3 style={{fontWeight: 'bolder'}}>
                              News Verification
                          </h3>
                          <p>
                              Staying informed is crucial in the crypto space, but misinformation can pose significant threats. PhoenixBot goes beyond conventional news aggregators by employing advanced algorithms to verify the authenticity of news sources. It filters out unreliable information, allowing you to make well-informed decisions based on accurate and verified news, reducing the likelihood of falling victim to scams or market manipulation.
                          </p>
                      </div>

                      <div className='px-md-4 py-4'>
                          <div className='bg-danger border-dark rounded-4 d-md-none' style={{width: '35vw', height: '35vw'}}>
                      
                          </div><br />
                          <h3 style={{fontWeight: 'bolder'}}>
                              Wallets & DApps Alerts
                          </h3>
                          <p>
                              Your crypto assets deserve the utmost protection, and PhoenixBot takes this responsibility seriously. With real-time monitoring capabilities, it actively scans the blockchain for any suspicious activities related to your wallet. Whether it's an unauthorized access attempt or an unusual transaction pattern, PhoenixBot promptly alerts you, empowering you to take immediate action and safeguard your funds.
                          </p>
                      </div>

                      <div className='px-md-4 py-4'>
                          <div className='bg-danger border-dark rounded-4 d-md-none' style={{width: '35vw', height: '35vw'}}>
                      
                          </div><br />
                          <h3 style={{fontWeight: 'bolder'}}>
                              User Friendly Interface
                          </h3>
                          <p>
                              Navigating the complexities of the crypto world is made simple with PhoenixBot's user-friendly interface. Accessible on various devices, this intuitive platform provides a seamless experience, allowing users to customize security preferences, set alerts, and receive notifications effortlessly.

                          </p>
                      </div>

                      <div className='px-md-4 py-4'>
                          <div className='bg-danger border-dark rounded-4 d-md-none' style={{width: '35vw', height: '35vw'}}>
                      
                          </div><br />

                          <h3 style={{fontWeight: 'bolder'}}>
                              Continuous Evolution
                          </h3>
                          <p>
                              Security threats are ever-evolving, and so is PhoenixBot. Our dedicated team of experts consistently updates the platform to stay ahead of emerging risks and vulnerabilities. By choosing PhoenixBot, you align yourself with a proactive and adaptive solution that evolves with the 
                              rapidly changing crypto landscape.
                          </p>
                      </div>

                  </div></div>
              </div>

              
          </div>
      </div>

  );
}


function Buy() {

  return (
      <div className='container pt-5'>
          <div className='d-flex justify-content-center align-items-center'>
              <h3 style={{fontFamily: 'Poppins', fontWeight: '600'}}>
                  How To Buy $PHT
              </h3><br/>
              
          </div>

          <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2'>
              <div className=''>

              </div>

              <div className='p-3 p-md-5' style={{fontFamily: 'Space Mono'}}>
                  <p style={{fontFamily: 'Poppins', marginBottom: '0px', fontWeight: 'bolder'}}>CREATE A WALLET</p>
                  <p>Go to the App Store and Download any Custodial wallet (E.g. Trust Wallet, Metamask, SafaPal)</p>

                  <p style={{fontFamily: 'Poppins', marginBottom: '0px', fontWeight: 'bold'}}>PURCHASE BNB</p>
                  <p>Purchase BNB Smart Chain (Bep 20) via any CEX (Binance, kucoin etc...) and deposit into your wallet address.</p>

                  <p style={{fontFamily: 'Poppins', marginBottom: '0px', fontWeight: 'bolder'}}>SWAP BNB TO PHT</p>
                  <p>Copy the Contract Address and head over to PancakeSwap or Poocoin DEX, Paste the Contract Address to import $PHT then proceed to swap BNB to PHT.</p>

              </div>
          </div>
      </div>
  );
}

function Test() {

  return (
      // <body className="container-fluid" style={{margin: 0, padding: 0}}>
          <div className="container-fluid" style={{position: 'relative', margin: 0, padding: 0}}>
              <div className='bg-primary' style={{position: 'fixed', width: '100vw', height: '100vh', top: 0, left: 0, objectFit: 'cover', zIndex: -1}}>
                  <img src={image} alt="Underlay image" style={{width: '100vw', height: '100vh'}}/>
              </div>
              
              <div className="main-content" style={{ width: '100%', boxSizing: 'border-box', zIndex: '1000', backgroundColor: 'rgba(60, 60, 60, 0.5)' }}>
              {/* backgroundColor: 'rgba(60, 60, 60, 0.5)' */}
                  <div style={{height: '100vh',}}><h1>JUST A TEXT TO TEST</h1></div>
                  <div className='bg-dark' style={{height: ''}}>
                      {/* <div className='d-flex justify-content-center align-items-center bg-danger'> */}
                      {/* <div className='d-md-flex d-block justify-content-md-around justify-content-sm-center align-items-center' style={{}}>
                          <div className='col-3'>
                              <div className='bg-success' style={{height: '30vh'}}>

                              </div>
                          </div>
                          <div className='col-3'>
                              <div className='bg-success' style={{height: '30vh'}}>

                              </div>
                          </div>
                          <div className='col-3'>
                              <div className='bg-success' style={{height: '30vh'}}>

                              </div>
                          </div>

                      </div> */}
                      {/* </div> */}
                      <div className='container-fluid py-5 '>
                      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2">
                  <div class="col mb-4">
                      <div class="card rounded-4 bg-dark text-light" style={{  }}>
                          {/* <img src="your-icon-1.png" class="card-img-top" alt="Icon 1" /> */}

                          <div className='d-flex justify-content-center align-items-center mt-4' style={{ height: '65px', width: '100%' }}>
                              {/* <div className=''><FontAwesomeIcon icon={faUsersLine} style={{ color: 'white', margin: '0 auto', fontSize: '75px' }} /></div> */}
                          </div>
                          <div class="card-body text-center">
                          </div>
                          <div className="card-title mb-4 text-center d-flex justify-content-center align-items-center p-1" style={{ height: '10px', fontFamily: 'Poppins' }}>
                              <h5 style={{ fontWeight: '800'}}>RENOUNCED OWNERSHIP</h5>
                          </div>
                          {/* <div className="card-body" style={{ height: '170px' }}>
                              <p class="text-center" style={{ fontFamily: 'Poppins' }}>Ownership has been renounced and this means the project is Community Driven.</p>
                          </div> */}

                      </div>
                  </div>

                  <div class="col mb-4">
                      <div class="card rounded-4 bg-dark text-light" style={{  }}>
                          {/* <img src="your-icon-2.png" class="card-img-top" alt="Icon 2" /> */}
                          {/* <i style={{color: 'blue', margin: '0 auto'}} class="bi bi-lock-fill"></i> */}
                          <div className='d-flex justify-content-center align-items-center mt-4' style={{ height: '65px', width: '100%' }}>
                              {/* <div className=''><FontAwesomeIcon icon={faLock} style={{ color: 'white', margin: '0 auto', fontSize: '75px' }}/></div> */}
                          </div>
                          <div class="card-body text-center">
                          </div>
                          <div className="card-title mb-4 text-center d-flex justify-content-center align-items-center p-1" style={{ height: '10px' }}>
                              <h5 style={{ fontWeight: '800'}}>LOCKED LIQUIDITY</h5>
                          </div>
                          {/* <div className="card-body" style={{ height: '170px' }}>
                              <p class="text-center">Liquidity have been locked and this guarantee safe trading for everyone</p>
                          </div> */}
                      </div>
                  </div>

                  <div class="col mb-4">
                      <div class="card rounded-4 bg-dark text-light" style={{  }}>
                          {/* <img src="your-icon-3.png" class="card-img-top" alt="Icon 3" /> */}
                          {/* <i style={{color: 'blue', margin: '0 auto'}} class="bi bi-fire-fill"></i> */}
                          <div className='d-flex justify-content-center align-items-center mt-4' style={{ height: '65px', width: '100%' }}>
                              {/* <div className=''><FontAwesomeIcon icon={faFire} style={{ color: 'white', margin: '0 auto', fontSize: '75px' }}/></div> */}
                          </div>
                          <div class="card-body text-center">
                          </div>
                          <div className="card-title mb-4 text-center d-flex justify-content-center align-items-center p-1" style={{ height: '10px' }}>
                              <h5 style={{ fontWeight: '800'}}>DEFLATIONARY MECHANISM</h5>
                          </div>
                          
                      </div>
                  </div>

                  <div class="col mb-4">
                      <div class="card rounded-4 bg-dark text-light" style={{  }}>

                          <div className='d-flex justify-content-center align-items-center mt-4' style={{ height: '65px', width: '100%' }}>
                          </div>
                          <div class="card-body text-center">
                          </div>
                          <div className="card-title mb-4 text-center d-flex justify-content-center align-items-center p-1" style={{ height: '10px', }}>
                              <h5 style={{ fontWeight: '800'}}>CHARITY</h5>
                          </div>
                          
                      </div>
                  </div>
                  </div>
              </div>

                  </div>
                  <div style={{height: '100vh'}}>
                      <div className='d-flex'>
                          <div className='bg-success d-flex justify-content-center align-items-center' style={{flex: '1', height: '100vh'}}>text 1</div>
                          <div style={{flex: '1'}}>
                          <img src={image} alt="Underlay image" style={{ maxWidth: '80%', maxHeight: '80%'  }}/>
                          </div>
                      </div>
                  </div>
                  {/* Main content of your page */}
              </div>
          </div>
      // </body>
  );


}


function Welcome (){

  return(
      <body className="container-fluid p-0 m-0" style={{fontFamily: 'Roboto'}}>

          <div><Navbar /></div>
          <div className='pt-5'><Hero /></div>
          <div className='pt-5'><About /></div>
          <div><Buy /></div>
      </body>
  );
}

export default Welcome;