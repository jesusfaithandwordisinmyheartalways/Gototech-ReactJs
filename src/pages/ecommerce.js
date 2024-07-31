




import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import '../components/ecommerce/ecommerce.css';
import ManCartoon from '../images/mancaartoon.png';
import ManCartoonTwo from '../images/marcarttontwo.png';
import AppleLogo from '../images/appleiconlogo.png';
import SamsungLogo from '../images/samsunglogo.jpg'
import MicrosoftLogo from '../images/microsoftlogo.png';
import AppleMacBook from '../images/m3 macbook pro 16inch.jpg';
import AppleIPhone from '../images/Apple-iPhone-15-Pro.jpg';
import AppleWatch from '../images/applewatchseris9gps.jpg';
import SamsungLaptop from '../images/samsunggalaxybook4laptop .jpg';
import SamsungGalaxyS24ultra from '../images/samsung galaxy s24 ultra.jpg';
import SamsungTablet from '../images/samsunggalaxy-tabs9ultra-graphite-front(1).jpg';
import MicrosoftLaptop from '../images/microsoftlaptopsurfacego.png';
import MicrosoftSurfacePro from '../images/micrsoftsurfacepro.png';
import MicrosoftBandWatch from '../images/microsoft-bandwatch.png';
import AppleSectionLogo from '../images/appleiconlogo.png';
import AppleBackground from '../images/applebackground.jpg';
import MicrosoftBackgroundLogo from '../images/Microsoft-Logo.png';
import SamsungLogoPng from '../images/samsunglogo.png 03-22-17-058.png';
import AllLogo from '../images/alllogos.png';
import {useNavigate} from "react-router-dom";





export const Ecommerce = () => {
        const [data, setData] = useState(null)
        const [error, setError] = useState(null)
        const [slideIndex, setSlideIndex] = useState(1);
        const totalSlides = 9;
        const navigate = useNavigate();

        
        const UserSelection = (id) => {
            navigate(`#${id}`)
           const element = document.getElementById(id);
           if(element) {
            element.scrollIntoView({behavior: 'smooth'})
           }
        }



        const UserContact = () => {
            const username =  prompt('Enter Full Name');
             const contact =  prompt('Enter Contact #');
              const email = prompt('Enter Your email address');

              if(username && contact && email) {
                  setTimeout(() => {
                      alert('Our team wil reach out to you')
                  }, 1000)
              }
           }


           const UserContactApple = () => {
            const username =  prompt('Enter Full Name');
             const contact =  prompt('Enter Contact #');
              const email = prompt('Enter Your email address');
              const appleQ = prompt('What Question do you have about our apple inventory');

              if(username && contact && email && appleQ) {
                  setTimeout(() => {
                      alert('Our Apple Support team wil reach out to you')
                  }, 1000)
              }
           }

           const UserContactMicrosoft = () => {
            const username =  prompt('Enter Full Name');
             const contact =  prompt('Enter Contact #');
              const email = prompt('Enter Your email address');
              const microsoftQ = prompt('What Question do you have about our microsoft inventory');

              if(username && contact && email && microsoftQ ) {
                  setTimeout(() => {
                      alert('Our Microsoft Support team wil reach out to you')
                  }, 1000)
              }
           }


           const UserContactSamsung = () => {
            const username =  prompt('Enter Full Name');
             const contact =  prompt('Enter Contact #');
              const email = prompt('Enter Your email address');
              const samsungQ = prompt('What Question do you have about our samung inventory');

              if(username && contact && email && samsungQ ) {
                  setTimeout(() => {
                      alert('Our Samsung Support team wil reach out to you')
                  }, 1000)
              }
           }



          



           
          
    
        useEffect(() => {
            const HeaderJson = async () => {
                try {
                    const response = await fetch('/tech.json');
                    if(response.status === 200) {
                        const res = await response.json();
                        setData(res)
                    } else if (response.status === 404) {
                        setError('Page not found')
                    } else if (response.status === 500) {
                        setError('Internal Server error')
                    } else {
                        setError('Network error has occurred')
                    }

                } catch(error) {
                        setError(`Unable to process data ${error}`)
                }
            }
                HeaderJson();


        }, [])





        useEffect(() => {
            showSlides(slideIndex);
        }, [slideIndex]);
    
        const plusSlides = (n) => {
            setSlideIndex((prevIndex) => {
                const newIndex = prevIndex + n;
                if (newIndex > totalSlides) return 1;
                if (newIndex < 1) return totalSlides;
                return newIndex;
            });
        };
    
        const currentSlides = (n) => {
            setSlideIndex(n);
        };
    
        const showSlides = (n) => {
            const slides = document.getElementsByClassName("mySlides");
            const dots = document.getElementsByClassName("dot");
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            if (slides.length > 0 && dots.length > 0) {
                slides[n - 1].style.display = "block";
                dots[n - 1].className += " active";
            }
        };


       

        


        return (
            <>
            
            {/*------------------------NAVBAR -----------------*/}

              <nav className="Nav-Container">
                <div className="Nav-Wrapper">
                    <div className="navbar-header">
                    {data && <div><h3>{data.header}</h3></div>}
                    {error && (
                        <div><p>{error}</p></div>
                    )}
                    </div>




                   <div className="navbar-button-wrapper">
                   <div className="navbar-content">
                        <div onClick={() => UserSelection('our')}><button className="btn" type="button">Our Team</button></div>
                    </div>

                    <div className="navbar-content">
                    <div onClick={() => UserSelection('offer')}><button className="btn-two"type="button">Gadgets</button></div>
                    </div>

                    <div className="navbar-content">
                    <div onClick={() => UserSelection('contact')}><button className="btn-three" type="button">Connect</button></div>
                    </div>

                   </div>


                </div>



              </nav>




                            {/*------------------------------------------HEADER -----------------------------*/}


                        <header className="Header-Container">

                        <div className="header-left-content"><div></div></div>

                        {data && <div className="header-tag-line">
                            <div><h3>{data.headerContent}</h3></div>
                        </div>}

                        <div className="Header-Wrapper">

                                {data && <div>
                                    <div className="header-content"><p>{data.headerText}</p></div>
                                </div>}
                            

                                <div className="header-content-two">
                                    <div><img src={ManCartoon} alt="man"></img></div>
                                </div>

                                <div className="header-content-three">
                                    <div><img src={ManCartoonTwo} alt="man-two"></img></div>
                                </div>


                            </div>


                        </header>
                        
                        
                        
                        
                        
                        
                        
                        
                        
                         {/*--------------------------------------------TITLE  ---------------------------------*/}
                       <div className="Title-Container">
                         <div className="Title-Wrapper">


                         <div class="content">
                             <div class="content__container">
                             <p class="content__container__text">
                             </p>
    
                      <ul class="content__container__list">
                      <li class="content__container__list__item">Go To Tech </li>
                          <li class="content__container__list__item">Apple Products <img src={AppleLogo} alt="apple"></img></li>
                         <li class="content__container__list__item">Samsung Products <img src={SamsungLogo} alt="samsung"></img></li>
                          <li class="content__container__list__item">Windows Products <img src={MicrosoftLogo} alt="microsoft"></img></li>
                         </ul>
                         </div>
                        </div>




                         </div>



                       </div>
                       
                       
                       
                       
                       
                       
                       {/*------------------------WHAT WE OFFER-----------------*/}

                       <div className="Offer-Container" >

                         <div className="Offer-Wrapper" id="offer">
                            <div><div><h3>What We Offer</h3></div></div>
                         </div>



                       </div>
                       
                       
                       
                       
                       
                       
                       {/*-------------------------------------IMAGE CAROUSEL------------------------------------*/}
                         
                       <div className="slideshow-container" >
                        <div className="mySlides fade">
                    <div className="numbertext">1 / {totalSlides}</div>
                    <img src={AppleMacBook} alt="Apple Macbook" style={{ width: "390px" }} />
                    <div className="text">Apple Macbook</div>
                </div>
                <div className="mySlides fade">
                    <div className="numbertext">2 / {totalSlides}</div>
                    <img src={AppleWatch} alt="Apple Watch" style={{width: "390px"  }} />
                    <div className="text">Apple Watch</div>
                </div>
                <div className="mySlides fade">
                    <div className="numbertext">3 / {totalSlides}</div>
                    <img src={AppleIPhone} alt="Apple IPhone" style={{ width: "390px"  }} />
                    <div className="text">Apple IPhone</div>
                </div>
                <div className="mySlides fade">
                    <div className="numbertext">4 / {totalSlides}</div>
                    <img src={MicrosoftBandWatch} alt="Microsoft Band Watch" style={{  width: "390px"  }} />
                    <div className="text">Microsoft Band Watch</div>
                </div>
                <div className="mySlides fade">
                    <div className="numbertext">5 / {totalSlides}</div>
                    <img src={MicrosoftLaptop} alt="Microsoft Laptop" style={{  width: "390px"  }} />
                    <div className="text">Microsoft Laptop</div>
                </div>
                <div className="mySlides fade">
                    <div className="numbertext">6 / {totalSlides}</div>
                    <img src={MicrosoftSurfacePro} alt="Microsoft Surface Pro" style={{  width: "390px" }} />
                    <div className="text">Microsoft Surface Pro</div>
                </div>
                <div className="mySlides fade">
                    <div className="numbertext">7 / {totalSlides}</div>
                    <img src={SamsungTablet} alt="Samsung Tablet" style={{ width: "390px"  }} />
                    <div className="text">Samsung Tablet</div>
                </div>
                <div className="mySlides fade">
                    <div className="numbertext">8 / {totalSlides}</div>
                    <img src={SamsungGalaxyS24ultra} alt="Samsung Galaxy S24 Ultra" style={{  width: "390px" }} />
                    <div className="text">Samsung Galaxy S24 Ultra</div>
                </div>
                <div className="mySlides fade">
                    <div className="numbertext">9 / {totalSlides}</div>
                    <img src={SamsungLaptop} alt="Samsung Laptop" style={{ width: "390px"  }} />
                    <div className="text">Samsung Laptop</div>
                </div>
                <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
                <a className="next" onClick={() => plusSlides(1)}>❯</a>
            </div>

            <div style={{ textAlign: 'center' }}>
                {[...Array(totalSlides)].map((_, i) => (
                    <span
                        key={i}
                        className={`dot ${slideIndex === i + 1 ? "active" : ""}`}
                        onClick={() => currentSlides(i + 1)}
                    ></span>
                ))}
            </div>
            
            
            
            
            
            {/*------------------------APPLE SECTION----------------------------------------*/}

                    <div className="Apple-Container">

                        <div className="Apple-Wrapper">

                            <div><div><img src={AppleSectionLogo} alt="apple-section"></img></div></div>

                        </div>

                        <div className="Apple-Details-Wrapper">
                            <div className="apple-content">
                                <div style={{ color: 'red'}}>
                                <div><h3>Performance</h3></div>
                                </div>

                                {data && <div style={{color: 'black'}}><h3>{data.appleLaptop}</h3></div> }
                                 <br></br>

                                {<div className="apple-text-content">
                                <div style={{color: 'white', fontSize: "1rem"}}><h3>RAM</h3></div> {data && (
                                    <div><p>{data.macRam}</p></div>
                                )}
                                </div>}

                                {<div className="apple-text-content">
                                    <div><h3>Storage</h3></div> {data && (
                                        <div><p>{data.macStorage}</p></div>
                                    )}
                                </div>}

                                {<div className="apple-text-content">
                                    <div><h3>Graphics</h3></div> {data && (
                                        <div><p>{data.macGraphics}</p></div>
                                    )}
                                </div>}

                                {<div className="apple-text-content">
                                    <div><h3>Battery Life</h3></div> {data && (
                                        <div><p>{data.macBattery}</p></div>
                                    )}
                                </div>}

                                <div onClick={UserContactApple} className="apple-content-btn"><div><button type="button">Learn More on Apple</button></div></div>



                             </div>







                             <div className="apple-content">
                                <div style={{ color: 'royalBlue'}}>
                                 <div><h3>Features</h3></div>
                                  {data && (
                                    <div style={{color: 'black'}}><div><h3>{data.applePhoneName}</h3></div></div>
                                  )}
                             </div>
                                    <br></br>

                                    <div className="apple-text-content">
                                    <div><h3>Operating System</h3></div>
                                    </div>
                                    {data && (
                                        <div className="apple-text-content"><div><p>{data.applePhoneSystem}</p></div></div>
                                    )}
                                    <div className="apple-text-content"><h3>Connectivity</h3></div>
                                      {data && (
                                        <div className="apple-text-content"><div><p>{data.applePhoneConnect}</p></div></div>
                                      )}

                                      <div className="apple-text-content"><h3>Security</h3></div>
                                      {data && (
                                        <div className="apple-text-content"><div><p>{data.applePhoneSecurity}</p></div></div>
                                      )}

                                      <div className="apple-text-content"><h3>Special Features</h3></div>
                                      {data && (
                                        <div className="apple-text-content"><div><p>{data.applePhoneFeatures}</p></div></div>
                                      )}


                                      <div onClick={UserContactApple} className="apple-content-btn apple-content-btn-two"><div><button type="button">Learn More on Apple</button></div></div>


                             </div>






                             <div className="apple-content">
                              <div style={{ color: 'coral'}}><div><h3>Design</h3></div></div>
                               {data && (
                                <div><div><h3>{data.appleWatchName}</h3></div></div>
                               )}

                               <br></br>


                               <div className="apple-text-content"><div><h3>Build Materials</h3></div></div>
                               {data && (
                                <div className="apple-text-content"><div><p>{data.appleWatchBuild}</p></div></div>
                               )}

                               <div className="apple-text-content"><div><h3>Display</h3></div></div>
                               {data && (
                                <div className="apple-text-content"> <div><p>{data.appleWatchDisplay}</p></div></div>
                               )}

                               <div className="apple-text-content"><div><h3>Form Factor</h3></div></div>
                               {data && (
                                <div className="apple-text-content"><div><p>{data.appleForm}</p></div></div>
                               )}


                               <div className="apple-text-content"><div><h3>Buttons and Controls</h3></div></div>
                               {data && (
                                <div className="apple-text-content"><div><p>{data.appleButtonControls}</p></div></div>
                               )}



                               <div onClick={UserContactApple} className="apple-content-btn apple-content-btn-three"><div><button type="button">Learn More on Apple</button></div></div>



                            </div>

                        </div>

                    </div>
                    
                    
                    
                    
                    
                    
                    {/*------------------------MICROSOFT SECTION----------------------------------------*/}

                    <div className="Microsoft-Container">


                     <div className="Microsoft-Wrapper">
                     <div><div><img src={MicrosoftBackgroundLogo} alt="microsoft-background"></img></div></div>

                     </div>


                     <div className="Microsoft-Details-Wrapper ">

                     <div className="microsoft-content">

                       <div style={{color:'dodgerblue', fontSize: "1.2rem"}} className="microsoft-text-content"><h3>Performance</h3></div>
                         <br></br>
                         {data && <div style={{color: 'black'}}><h3>{data.microsoftName}</h3></div> }
                                 <br></br>

                                 <div className="microsoft-text-content"><div><h3>Processor</h3></div></div>
                                 {data && (
                                    <div style={{color: 'black'}} className="microsoft-text-content"><div><p>{data.microsoftProcessor}</p></div></div>
                                 )}


                                 <div className="microsoft-text-content"><div><h3>RAM</h3></div></div>
                                 {data && (
                                    <div style={{color: 'black'}} className="microsoft-text-content"><div><p>{data.microsoftRam}</p></div></div>
                                 )}


                                 <div className="microsoft-text-content"><div><h3>Storage</h3></div></div>
                                 {data && (
                                    <div style={{color: 'black'}} className="microsoft-text-content"><div><p>{data.microsoftStorage}</p></div></div>
                                 )}


                                 <div className="microsoft-text-content"><div><h3>Battery Life</h3></div></div>
                                 {data && (
                                    <div style={{color: 'black'}} className="microsoft-text-content"><div><p>{data.microsoftBattery}</p></div></div>
                                 )}

                                 <div onClick={UserContactMicrosoft} className="microsoft-content-btn microsoft-content-btn"><div><button type="button">Learn More on Microsoft</button></div></div>




                     </div>



                     <div className="microsoft-content">
                        <div style={{color: 'dodgerblue'}}><h3>Features</h3></div>
                          <br></br>
                          <div style={{color: 'black', fontSize: '1.2rem'}} className="microsoft-text-content"><div><h3>Surface Laptops</h3></div></div>
                            <br></br>
                            <div className="microsoft-text-content"><div><h3>Operating System</h3></div></div>
                            {data && (
                                    <div style={{color: 'black'}} className="microsoft-text-content"><div><p>{data.microsoftLaptopOperatingSystem}</p></div></div>
                                 )}

                                 <div className="microsoft-text-content"><div><h3>Connectivity</h3></div></div>
                                 {data && (
                                    <div style={{color: 'black'}} className="microsoft-text-content"><div><p>{data.microsoftLaptopConnectivity}</p></div></div>
                                 )}

                                 <div className="microsoft-text-content"><div><h3>Security</h3></div></div>
                                 {data && (
                                    <div style={{color: 'black'}} className="microsoft-text-content"><div><p>{data.microsoftLaptopSecurity}</p></div></div>
                                 )}

                                 <div className="microsoft-text-content"><div><h3>Special Features</h3></div></div>
                                 {data && (
                                    <div style={{color: 'black'}} className="microsoft-text-content"><div><p>{data.microsoftLaptopFeatures}</p></div></div>
                                 )}

                                 <div onClick={UserContactMicrosoft} className="microsoft-content-btn microsoft-content-btn-two"><div><button type="button">Learn More on Microsoft</button></div></div>


                        </div>






                     <div className="microsoft-content">
                     <div style={{color: 'dodgerblue'}}><h3>Design</h3></div>
                       <br></br>

                     <div style={{color: 'black', fontSize: '1.2rem'}} className="microsoft-text-content"><div><h3>Microsoft Band</h3></div></div>
                      <br></br>
                      <div className="microsoft-text-content"><div><h3>Build Materials</h3></div></div>
                      {data && (
                        <div style={{color: 'black'}} className="microsoft-text-content"><div><p>{data.microsoftfBandBuild}</p></div></div>
                         )}

                         <div className="microsoft-text-content"><div><h3>Display</h3></div></div>
                         {data && (
                        <div style={{color: 'black'}} className="microsoft-text-content"><div><p>{data.microsoftfBandDisplay}</p></div></div>
                         )}

                         <div className="microsoft-text-content"><div><h3>Form Factor</h3></div></div>
                         {data && (
                        <div style={{color: 'black'}} className="microsoft-text-content"><div><p>{data.microsoftfBandForm}</p></div></div>
                         )}

                         <div className="microsoft-text-content"><div><h3>Buttons and Controls</h3></div></div>
                         {data && (
                        <div style={{color: 'black'}} className="microsoft-text-content"><div><p>{data.microsoftfBandButtons}</p></div></div>
                         )}

                         <div onClick={UserContactMicrosoft} className="microsoft-content-btn microsoft-content-btn-three"><div><button type="button">Learn More on Microsoft</button></div></div>


                     </div>


                     </div>


                    </div>
                    
                    
                    
                    
                    
                    
                    
                    
                     {/*------------------------SAMSUNG SECTION----------------------------------------*/}

                            <div className="Samsung-Container">
                              <div className="Samsung-Wrapper">

                              <div><div><img src={SamsungLogoPng} alt="microsoft-background"></img></div></div>

                              </div>


                             <div className="Samsung-Details-Wrapper">

                             <div className="samsung-content">
                                
                             <div style={{color:'whitesmoke'}} className="samsung-text-content"><h3>Performance</h3></div>
                                  <br></br>

                                  <div style={{color: 'white'}} className="samsung-text-content"><div><h3>Samsung Laptops</h3></div></div>
                                   <br></br>

                                   <div style={{color: 'black'}}  className="samsung-text-content"><div><h3>Processor</h3></div></div>
                                   {data && (
                                     <div className="samsung-text-content"><div><p>{data.samsungProcessor}</p></div></div>
                                        )}


                                        <div style={{color: 'black'}}  className="samsung-text-content"><div><h3>RAM</h3></div></div>
                                        {data && (
                                     <div className="samsung-text-content"><div><p>{data.samsungRam}</p></div></div>
                                        )}


                                        <div style={{color: 'black'}}  className="samsung-text-content"><div><h3>Storage</h3></div></div>
                                        {data && (
                                     <div className="samsung-text-content"><div><p>{data.samsungStorage}</p></div></div>
                                        )}  

                                        <div style={{color: 'black'}} className="samsung-text-content"><div><h3>Battery Life</h3></div></div>
                                         {data && (
                                     <div className="samsung-text-content"><div><p>{data.samsungBattery}</p></div></div>
                                        )} 

                                        <div onClick={UserContactSamsung} className="samsung-content-btn samsung-content-btn"><div><button type="button">Learn More on Samsung</button></div></div>


                             </div>






                             <div className="samsung-content">
                              <div style={{color:'whitesmoke'}} className="samsung-text-content"><div><h3>Features</h3></div></div>
                                <br></br>

                                <div style={{color: 'white'}} className="samsung-text-content"><div><h3>Samsung Galaxy S24 Ultra</h3></div></div>
                                   <br></br>

                                   <div style={{color: 'black'}}  className="samsung-text-content"><div><h3>Processor</h3></div></div>
                                   {data && (
                                     <div className="samsung-text-content"><div><p>{data.samsungGalaxyProcessor}</p></div></div>
                                        )}

                                        <div style={{color: 'black'}}  className="samsung-text-content"><div><h3>RAM</h3></div></div>
                                        {data && (
                                     <div className="samsung-text-content"><div><p>{data.samsungGalaxyRAM}</p></div></div>
                                        )}

                                        <div style={{color: 'black'}}  className="samsung-text-content"><div><h3>Storage</h3></div></div>
                                        {data && (
                                     <div className="samsung-text-content"><div><p>{data.samsungGalaxyStorage}</p></div></div>
                                        )}

                                        <div style={{color: 'black'}}  className="samsung-text-content"><div><h3>Battery Life</h3></div></div>
                                        {data && (
                                     <div className="samsung-text-content"><div><p>{data.samsungGalaxyBatteryLife}</p></div></div>
                                        )}

                                        <div onClick={UserContactSamsung} className="samsung-content-btn samsung-content-btn-two"><div><button type="button">Learn More on Samsung</button></div></div>

                                
                                </div>





                                <div className="samsung-content">
                                 <div style={{color:'whitesmoke'}} className="samsung-text-content"><div><h3>Design</h3></div></div>
                                   <br></br>

                                   <div style={{color: 'white'}} className="samsung-text-content"><div><h3>Samsung Tablets</h3></div></div>
                                   <br></br>

                                   <div style={{color: 'black'}}  className="samsung-text-content"><div><h3>Processor</h3></div></div>
                                   {data && (
                                     <div className="samsung-text-content"><div><p>{data.samsungTabletProcessor}</p></div></div>
                                        )}


                                        <div style={{color: 'black'}}  className="samsung-text-content"><div><h3>RAM</h3></div></div>
                                        {data && (
                                     <div className="samsung-text-content"><div><p>{data.samsungTabletRam}</p></div></div>
                                        )}


                                        <div style={{color: 'black'}}  className="samsung-text-content"><div><h3>Storage</h3></div></div>
                                        {data && (
                                     <div className="samsung-text-content"><div><p>{data.samsungTabletStorage}</p></div></div>
                                        )}


                                        <div style={{color: 'black'}}  className="samsung-text-content"><div><h3>Battery Life</h3></div></div>
                                        {data && (
                                     <div className="samsung-text-content"><div><p>{data.samsungTabletBatteryLife}</p></div></div>
                                        )}

                                        <div onClick={UserContactSamsung} className="samsung-content-btn samsung-content-btn-three"><div><button type="button">Learn More on Samsung</button></div></div>




                                </div>





                             </div>






                            </div>
                            
                            
                            
                            
                            
                            
                            
                            {/*------------------------OUR TEAM SECTION----------------------------------------*/}

                            <div className="Our-Team-Container" id="our">

                              <div className="Our-Team-Wrapper">
                               
                                <div className="our-team-content">
                                    <div><div><img src={AllLogo}></img></div></div>
                                </div>


                                <div className="our-team-content-two">
                                  <div className="our-team-content-text"><div><h3><span style={{color: 'green', fontSize: '1.8rem'}}>Go To Tech-</span> Take Advantage With Us</h3></div></div>
                                  <div className="our-team-content-para"><div><p>For enthusiasts of high-quality electronics,
                                   Apple, Microsoft, and Samsung offer an impressive array of products that cater to various
                                    needs and preferences. Apple stands out with its seamless ecosystem, encompassing the MacBook,
                                     iPhone, and Apple Watch. MacBooks are renowned for their sleek aluminum designs,
                                      powerful M1/M2 chips, and Retina displays, ensuring top-notch performance and aesthetics.
                                       The iPhone, celebrated for its cutting-edge A-series chips, high-resolution
                                        Super Retina displays, and advanced camera systems, delivers a premium mobile experience.
                                         Apple Watches complement this ecosystem with health-focused features 
                                         like ECG and blood oxygen monitoring, all wrapped in a stylish and customizable design,
                                   making them a perfect accessory for fitness enthusiasts and tech-savvy users alike.</p></div></div>

                                   <div className="our-team-content-para"><div><p>Microsoft and Samsung also provide compelling choices for tech lovers. 
                                   Microsoft's Surface line, including laptops and the Surface Pro, combines powerful Intel and AMD processors with versatile
                                    designs that can transition from laptop to tablet modes. The Surface devices, with their high-resolution
                                     PixelSense displays, robust security features, and Windows OS integration, offer a productive and flexible 
                                     user experience. Samsung, known for innovation and cutting-edge technology, presents a range of products
                                      from the Galaxy S24 Ultra to laptops and tablets. The Galaxy S24 Ultra boasts top-tier performance with Snapdragon
                                       or Exynos processors, a stunning AMOLED display, and versatile S Pen support. Samsung laptops and tablets feature
                                        sleek designs, AMOLED screens, and seamless integration with other Samsung devices, providing a cohesive
                                         and user-friendly experience across their product lineup. Whether you prefer Apple's cohesive ecosystem,
                                          Microsoft's productivity-centric devices,
                                    or Samsung's innovative and versatile offerings, each brand delivers exceptional quality and performance.</p></div></div>


                                </div>


                              </div>



                            </div>
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            {/*------------------------FOOTER----------------------------------------*/}

                            <footer className="Footer-Container">

                            <div className="Footer-Wrapper">

                                <div className="go-to-tech"><div><h3>Go To Tech</h3></div></div>

                                <div className="contact-us-wrapper">
                                <div className="contact-us"><div className="contact-us-arrow"><h3>Contact US</h3></div></div>
                                </div>





                                <div onClick={UserContact} className="animation-container" id="contact">
                                <div class="letter-image">
                                <div class="animated-mail">
                                   <div class="back-fold"></div> 
                                    <div class="letter">
                                    <div class="letter-border"></div>
                                     <div class="letter-title"></div>
                                     <div class="letter-context"></div>
                                     <div class="letter-stamp">
                                     <div class="letter-stamp-inner"></div>
                                 </div>
                                 </div>
                                 <div class="top-fold"></div>
                                 <div class="body"></div>
                                 <div class="left-fold"></div>
                                 </div>
                                <div class="shadow"></div>
                                    </div>

                                </div>


                                
                            </div>



                              <div className="Footer-Wrapper-Copyright">
                                <div><div><p> © 2024 All rights reserved</p></div></div>
                              </div>



                            </footer>






                           



            </>
        )
}