import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "react-image-gallery/styles/css/image-gallery.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactImageGallery from 'react-image-gallery';
import './corporate.css'
import ScrollToTop from "react-scroll-to-top";

import { Link } from 'react-router-dom';
import { FaSquareWhatsapp } from 'react-icons/fa6';


const images = [
    {
        original: "https://www.v3events.in/images/about/corporate1.jpg",
        thumbnail: "https://www.v3events.in/images/about/corporate1.jpg",
    },
    {
        original: "https://www.v3events.in/images/about/corporate2.jpg",
        thumbnail: "https://www.v3events.in/images/about/corporate2.jpg",
    },
    {
        original: "https://www.v3events.in/images/about/corporate3.jpeg",
        thumbnail: "https://www.v3events.in/images/about/corporate3.jpeg",
    },
    {
        original: "https://www.v3events.in/images/about/corporate4.jpeg",
        thumbnail: "https://www.v3events.in/images/about/corporate4.jpeg",
    },
    {
        original: "https://www.v3events.in/images/about/corporate5.jpeg",
        thumbnail: "https://www.v3events.in/images/about/corporate5.jpeg",
    }
];

function Corporate() {

    return (
        <>

            <div class="nav-bar">
                <ul>
                    <img src="./Image/2__1___1_-removebg-preview.png" alt="" srcset="" style={{ height: "70px", width: "150px", position: "absolute", left: "10px", top: "9%" }} />
                    <li class="active"><Link className='link' to="/"> HOME</Link></li>
                    <li><a href=""><Link className='link' to="/About-us">ABOUT-US</Link></a></li>
                    <li><a href="">WHAT WE TO</a><i class="fa-solid fa-chevron-down"></i>
                        <div class="sub-menu-1">
                            <ul>
                                <li class="hover-me"><a href="">WEDDING SERVICES</a><i class="fa fa-angle-right"></i>
                                    <div class="sub-menu-2">
                                        <ul>
                                            <li><a href=""><Link className='link' to="/WeddingDecorators">WEDDING DECOR</Link></a></li>
                                            <li><a href=""><Link className='link' to="/WeddingPlaner">WEDDING PLANNERS</Link></a></li>
                                            <li><a href=""><Link className='link' to="/Hostilaty">HOSPITALITY</Link></a></li>
                                            <li><a href=""><Link className='link' to="/Catering">CATERING</Link></a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="hover-me"><a href="">WEDDING PLANNING & MANAGEMENT</a><i
                                    class="fa fa-angle-right"></i>
                                    <div class="sub-menu-2">
                                        <ul>
                                            <li><Link className='link' to="/Complete_wedding_planer">COMPLETE WEDDING PLANNING </Link></li>
                                            <li><Link className='link' to="/PARTIAL_WEDDING_PLANNING">PARTIAL WEDDING PLANNING </Link></li>
                                            <li><Link className='link' to="/Theme_Based_Wedding">THEME-BASED WEDDING PLANNING </Link></li>
                                            <li><Link className='link' to="/Wedding_Designers_In_India">WEDDING DESIGENERS IN INDIA </Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="hover-me"><a href="">EXCLUSIVE WEDDING DEALS </a><i class="fa fa-angle-right"></i>
                                    <div class="sub-menu-2">
                                        <ul>
                                            <li><Link className='link' to="/Beach_Wedding">BEACH WEDDING</Link> </li>
                                            <li><Link className='link' to="/Royal_Wedding">ROYAL WEDDING</Link> </li>
                                            <li><Link className='link' to="/Cruise_Wedding">CRUISE WEDDING</Link> </li>
                                            <li><Link className='link' to="/Desert_Wedding">DESERT WEDDING</Link> </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li><a href=""><Link className='link' to="/corporate-services">CORPORET EVENT</Link></a></li>
                    <li><a href="">MEMORIES</a><i class="fa fa-angle-down"></i>
                        <div class="sub-menu-1">
                            <ul>
                                <li><a href="">EVENT</a></li>
                                <li><a href="">WEDDING GALLERY</a></li>
                                <li><a href="">PHOTO GALLERY</a></li>
                                <li><a href="">VIDEO GALLERY</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="">BLOG</a></li>
                    <li><a href=""><Link className='link' to="/Reach-us">REACH US</Link></a></li>
                </ul>
            </div>

            <a style={{ color: "white" }} href="https://api.whatsapp.com/send?phone=9428553006"><FaSquareWhatsapp className='WhtsApp' /></a>
            <ScrollToTop smooth color="Black" style={{ height: "50px", width: "50px", display: "grid", alignItems: "center", justifyContent: "center", fontSize: "60px" }} />

            <div className="permers">
                <div className="position-CORPORET">
                    <h1 style={{
                        fontSize: "45px", color: "rgb(254,174,163)",
                        textShadow: "pink  0.5px 0 1.5px"
                    }}>Corporate Events Planner </h1>
                    <h4 style={{
                        fontSize: "20px", color: "white",
                    }}> < Link style={{ color: "white" }} to="/">Home</Link> / Corporate Events Planner </h4>
                </div>
            </div>
            {/* Celebrity Management section */}
            <div className='Icon'>
                <img src="https://www.v3events.in/images/title-icon.png" alt="" className='Testimonials-Icon' style={{ marginBottom: "20px", marginTop: "20px" }} />
                <h2 style={{ color: "black", textAlign: "center" }}>Corporate Events </h2>
                <div className='side-image'>
                    <ReactImageGallery items={images} showPlayButton={false} autoPlay={true} showNav={false} />
                </div>
                <div className='etc-CORPORET'>
                    <h5 style={{ color: "black", textAlign: "center", marginBottom: "3%", marginRight: "4.5%" }}>Corporate Event Management program arrangement with high-level expertise</h5>
                    <p className='pee-CORPORET'>Are you looking for the best corporate events management house to host your conferences, meetings and award shows? Your search ends here with us. We are not only the most experienced corporate events managers, but we are a complete management house to support you host the program with all the ingredients and arrangements you need.</p>
                    <p className='pee-CORPORET'>Our experience and infrastructural support would help you in the entire arrangement, where we would be maintaining all the fabrications of your homage and hostage. Right from the arrangement of the meeting room, sitting arrangement to arrangement of red carpet show, we are having the sensation and expertise in all possible ways.</p>
                    <p className='pee-CORPORET'>Arranging the sound system to the arrangement of escorting your guests with royal hospitality, we are there to give you the highest level of support in arrangement of your event. We are also comfortable in arranging the snacks or the grand or gala dinner party for your guests and the board meeting members.</p>
                    <p className='pee-CORPORET'>Arrangement of giant screens for large shows and even the arrangement of interpreter for foreign meets, we are every time beside you with all our equipment. Hence, reach us and just narrate the idea you want to establish. Modification and modernization of that idea until the execution of the same is our edge. And the most important thing is that when we will be arranging it for you, there will be no space for you to listen anything else than praise of the event.</p>
                    <p className='pee-CORPORET'>Hence, reach us now and experience the world-class event management euphoria before you.</p>
                    <div className='corporate-services'>
                        <h3 style={{ color: "black" }}>Our corporate services include:</h3>
                        <div className='service'>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "pink", marginRight: "7px" }} width="1.19em" height="1em" viewBox="0 0 1664 1408"><path fill="currentColor" d="M1408 802v318q0 119-84.5 203.5T1120 1408H288q-119 0-203.5-84.5T0 1120V288Q0 169 84.5 84.5T288 0h832q63 0 117 25q15 7 18 23q3 17-9 29l-49 49q-10 10-23 10q-3 0-9-2q-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V866q0-13 9-22l64-64q10-10 23-10q6 0 12 3q20 8 20 29m231-489l-814 814q-24 24-57 24t-57-24L281 697q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263l647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57" /></svg>
                            Consultation
                        </div>
                        <div className='service'>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "pink", marginRight: "7px" }} width="1.19em" height="1em" viewBox="0 0 1664 1408"><path fill="currentColor" d="M1408 802v318q0 119-84.5 203.5T1120 1408H288q-119 0-203.5-84.5T0 1120V288Q0 169 84.5 84.5T288 0h832q63 0 117 25q15 7 18 23q3 17-9 29l-49 49q-10 10-23 10q-3 0-9-2q-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V866q0-13 9-22l64-64q10-10 23-10q6 0 12 3q20 8 20 29m231-489l-814 814q-24 24-57 24t-57-24L281 697q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263l647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57" /></svg>
                            Sourcing appropriate vendors while staying within budget
                        </div>
                        <div className='service'>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "pink", marginRight: "7px" }} width="1.19em" height="1em" viewBox="0 0 1664 1408"><path fill="currentColor" d="M1408 802v318q0 119-84.5 203.5T1120 1408H288q-119 0-203.5-84.5T0 1120V288Q0 169 84.5 84.5T288 0h832q63 0 117 25q15 7 18 23q3 17-9 29l-49 49q-10 10-23 10q-3 0-9-2q-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V866q0-13 9-22l64-64q10-10 23-10q6 0 12 3q20 8 20 29m231-489l-814 814q-24 24-57 24t-57-24L281 697q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263l647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57" /></svg>
                            Team building events
                        </div>
                        <div className='service'>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "pink", marginRight: "7px" }} width="1.19em" height="1em" viewBox="0 0 1664 1408"><path fill="currentColor" d="M1408 802v318q0 119-84.5 203.5T1120 1408H288q-119 0-203.5-84.5T0 1120V288Q0 169 84.5 84.5T288 0h832q63 0 117 25q15 7 18 23q3 17-9 29l-49 49q-10 10-23 10q-3 0-9-2q-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V866q0-13 9-22l64-64q10-10 23-10q6 0 12 3q20 8 20 29m231-489l-814 814q-24 24-57 24t-57-24L281 697q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263l647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57" /></svg>
                            Concept and theme design
                        </div>
                        <div className='service'>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "pink", marginRight: "7px" }} width="1.19em" height="1em" viewBox="0 0 1664 1408"><path fill="currentColor" d="M1408 802v318q0 119-84.5 203.5T1120 1408H288q-119 0-203.5-84.5T0 1120V288Q0 169 84.5 84.5T288 0h832q63 0 117 25q15 7 18 23q3 17-9 29l-49 49q-10 10-23 10q-3 0-9-2q-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V866q0-13 9-22l64-64q10-10 23-10q6 0 12 3q20 8 20 29m231-489l-814 814q-24 24-57 24t-57-24L281 697q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263l647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57" /></svg>
                            Venue sourcing
                        </div>
                        <div className='service'>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "pink", marginRight: "7px" }} width="1.19em" height="1em" viewBox="0 0 1664 1408"><path fill="currentColor" d="M1408 802v318q0 119-84.5 203.5T1120 1408H288q-119 0-203.5-84.5T0 1120V288Q0 169 84.5 84.5T288 0h832q63 0 117 25q15 7 18 23q3 17-9 29l-49 49q-10 10-23 10q-3 0-9-2q-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V866q0-13 9-22l64-64q10-10 23-10q6 0 12 3q20 8 20 29m231-489l-814 814q-24 24-57 24t-57-24L281 697q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263l647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57" /></svg>
                            Vendor booking and management
                        </div>
                        <div className='service'>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "pink", marginRight: "7px" }} width="1.19em" height="1em" viewBox="0 0 1664 1408"><path fill="currentColor" d="M1408 802v318q0 119-84.5 203.5T1120 1408H288q-119 0-203.5-84.5T0 1120V288Q0 169 84.5 84.5T288 0h832q63 0 117 25q15 7 18 23q3 17-9 29l-49 49q-10 10-23 10q-3 0-9-2q-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V866q0-13 9-22l64-64q10-10 23-10q6 0 12 3q20 8 20 29m231-489l-814 814q-24 24-57 24t-57-24L281 697q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263l647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57" /></svg>
                            Staff recruitment and management
                        </div>
                        <div className='service'>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "pink", marginRight: "7px" }} width="1.19em" height="1em" viewBox="0 0 1664 1408"><path fill="currentColor" d="M1408 802v318q0 119-84.5 203.5T1120 1408H288q-119 0-203.5-84.5T0 1120V288Q0 169 84.5 84.5T288 0h832q63 0 117 25q15 7 18 23q3 17-9 29l-49 49q-10 10-23 10q-3 0-9-2q-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V866q0-13 9-22l64-64q10-10 23-10q6 0 12 3q20 8 20 29m231-489l-814 814q-24 24-57 24t-57-24L281 697q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263l647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57" /></svg>
                            Contract negotiation and management
                        </div>
                        <div className='service'>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "pink", marginRight: "7px" }} width="1.19em" height="1em" viewBox="0 0 1664 1408"><path fill="currentColor" d="M1408 802v318q0 119-84.5 203.5T1120 1408H288q-119 0-203.5-84.5T0 1120V288Q0 169 84.5 84.5T288 0h832q63 0 117 25q15 7 18 23q3 17-9 29l-49 49q-10 10-23 10q-3 0-9-2q-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V866q0-13 9-22l64-64q10-10 23-10q6 0 12 3q20 8 20 29m231-489l-814 814q-24 24-57 24t-57-24L281 697q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263l647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57" /></svg>
                            Timeline development
                        </div>
                        <div className='service'>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "pink", marginRight: "7px" }} width="1.19em" height="1em" viewBox="0 0 1664 1408"><path fill="currentColor" d="M1408 802v318q0 119-84.5 203.5T1120 1408H288q-119 0-203.5-84.5T0 1120V288Q0 169 84.5 84.5T288 0h832q63 0 117 25q15 7 18 23q3 17-9 29l-49 49q-10 10-23 10q-3 0-9-2q-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V866q0-13 9-22l64-64q10-10 23-10q6 0 12 3q20 8 20 29m231-489l-814 814q-24 24-57 24t-57-24L281 697q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263l647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57" /></svg>
                            Event design, installation and production management
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Corporate