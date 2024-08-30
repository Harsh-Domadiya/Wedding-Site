import React from 'react';
import Slider from 'react-slick';//
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';//
import "@fortawesome/fontawesome-free/css/all.min.css";//
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';//s
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from 'react-image-gallery';
import ScrollToTop from "react-scroll-to-top";

import { Link } from 'react-router-dom';
import './App.css'
import { FaSquareWhatsapp } from 'react-icons/fa6';


// import './WO.css'

const imagestyles = {
    width: "310px",
    height: "220px",
    alignItems: "center",
    borderRadius: "25px",
    marginBottom: "10px"
};

const settings = {
    // dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false
};

const images = [
    {
        original: "src/What-We-Do/WEDDING-DECOR/Image/wedding_event23.jpg",
        thumbnail: "src/What-We-Do/WEDDING-DECOR/Image/wedding_event23.jpg",
    },
    {
        original: "src/What-We-Do/WEDDING-DECOR/Image/wedding_event14.jpg",
        thumbnail: "src/What-We-Do/WEDDING-DECOR/Image/wedding_event14.jpg",
    },
    {
        original: "src/What-We-Do/WEDDING-DECOR/Image/wedding_event16.jpg",
        thumbnail: "src/What-We-Do/WEDDING-DECOR/Image/wedding_event16.jpg",
    },
    {
        original: "src/What-We-Do/WEDDING-DECOR/Image/wedding_event28 (1).jpg",
        thumbnail: "src/What-We-Do/WEDDING-DECOR/Image/wedding_event28 (1).jpg",
    },
    {
        original: "src/What-We-Do/WEDDING-DECOR/Image/wedding_event22 (1).jpg",
        thumbnail: "src/What-We-Do/WEDDING-DECOR/Image/wedding_event22 (1).jpg",
    },
    // {
    //   original: "src/What-We-Do/WEDDING-DECOR/Image/Mehendi5.jpg",
    //   thumbnail: "src/What-We-Do/WEDDING-DECOR/Image/Mehendi5.jpg",
    // },

];

function PARTIAL_WEDDING_PLANNING() {

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

            <div className="Wedecore-PARTIAL_WEDDING_PLANNING">
                <div className="position-2">
                    <h1 style={{ fontSize: "35px", color: "rgb(254,174,163)" }}>Partial Wedding Planning
                    </h1>
                    <h4 style={{ fontSize: "20px", color: "white" }}> <Link className='link' style={{ color: "white" }} to="/"> Home</Link> / Partial Wedding Planning
                    </h4>
                </div>
            </div>
            {/* Celebrity Management section */}
            <div className='Icon'>
                <img src="https://www.v3events.in/images/title-icon.png" alt="" className='Testimonials-Icon' style={{ marginBottom: "10px", marginTop: "10px" }} />
                <div class="icon-bar-PARTIAL_WEDDING_PLANNING">
                    <div className="image-slide">
                        <img src="src/WEDDING-PLANNING-&-MANAGEMENT/PARTIAL-WEDDING-PLANNING/Image/partial (1).jpg " alt="" srcset="" height={300} width={750} />
                        <div className='etca'>
                            <p className='peee-PARTIAL_WEDDING_PLANNING'>Through the ‘Partial Wedding Planning’ services, Events & Entertainments offers assistance in organizing such weddings where the couple may have already planned basic details and requirements. We offer precise guidance and suggestions so we can culminate an exquisite moment for your wedding event.</p>
                            <p className='peee-PARTIAL_WEDDING_PLANNING'>For several wedding events, we find the couples & their families have already secured the wedding venue, reception venue and have already hired or in contact with several vendors. Our partial wedding planning services are perfect wedding planning package for such couples who already have planned several elements of the wedding but need professional guidance for remaining elements of their wedding.</p>
                            <p className='peee-PARTIAL_WEDDING_PLANNING'>You get to choose from the following elements of wedding planning for your wedding which covers almost all the significant elements required to be executed in an outstanding wedding.</p>
                            {/* <p className='peee-PARTIAL_WEDDING_PLANNING'></p> */}
                        </div>
                        {/* <div className='Icon-PARTIAL_WEDDING_PLANNING'>
                            <div className='icon-container-PARTIAL_WEDDING_PLANNING'>
                                <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Invitation Card Concept & Design</h3>
                            </div>
                            <div className='icon-container-PARTIAL_WEDDING_PLANNING'>
                                <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Venue Selection</h3>
                            </div>
                            <div className='icon-container-PARTIAL_WEDDING_PLANNING'>
                                <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Theme Selection</h3>
                            </div>
                            <div className='icon-container-PARTIAL_WEDDING_PLANNING'>
                                <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Scale of Decoration</h3>
                            </div>
                            <div className='icon-container-PARTIAL_WEDDING_PLANNING'>
                                <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Photography/Videography</h3>
                            </div>
                            <div className='icon-container-PARTIAL_WEDDING_PLANNING'>
                                <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Lighting & Audio Visual Element</h3>
                            </div>
                            <div className='icon-container-PARTIAL_WEDDING_PLANNING'>
                                <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Accommodations & Transportation</h3>
                            </div>
                            <div className='icon-container-PARTIAL_WEDDING_PLANNING'>
                                <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Guest Reception Management</h3>
                            </div>
                        </div> */}
                    </div>
                    <div className='extra-link'>
                        <div class="ulockd-all-service">

                            <h4 style={{ backgroundColor: "rgb(254, 174, 163)", textAlign: "center", padding: "1%", borderRadius: "10px", color: "black" }}>Wedding Services</h4>

                            <div class="list-group">

                                <a href="complete-wedding-planning" class="list-group-item" style={{ width: "300px" }}><Link className='link' style={{ color: "black" }} to="/Complete_wedding_planer">Complete Wedding Planning</Link></a>

                                <a href="partial-wedding-planning" class="list-group-item" style={{ width: "300px" }}> <Link className='link' to="/PARTIAL_WEDDING_PLANNING">Partial Wedding Planning </Link>   </a>

                                <a href="luxury-wedding-planners-in-delhi" class="list-group-item" style={{ width: "300px" }}> <Link className='link' style={{ color: "black" }} to="/Luxury">Luxury Wedding Planners</Link> </a>

                                <a href="wedding-organizers-in-delhi" class="list-group-item" style={{ width: "300px" }}> <Link className='link' style={{ color: "black" }} to="/Wedding">Wedding Organizers</Link></a>

                                <a href="wedding-photographers" class="list-group-item" style={{ width: "300px" }}><Link className='link' to="/Catering">Catering</Link></a>

                                <a href="destination-wedding-planner" class="list-group-item" style={{ width: "300px" }}><Link className='link' to="/Wedding_Designers_In_India">Weddding Desigeners In India </Link></a>

                                {/* <a href="destination-wedding-planner" class="list-group-item" style={{ width: "300px" }}><Link className='link' to="//Theme_Based_Wedding">Weddding Desigeners In India </Link></a> */}

                                <a href="theme-based-wedding-planning" class="list-group-item" style={{ width: "300px" }}><Link className='link' to="/Theme_Based_Wedding">Theme-Based Wedding Planning</Link></a>

                            </div>

                        </div>
                    </div>
                </div>
                {/* <img src="https://www.v3events.in/images/title-icon.png" alt="" className='Testimonials-Icon' style={{ marginBottom: "20px", marginTop: "40px" }} /> */}


            </div>

            {/*  End of Gallery Section  */}
            <div style={{ textAlign: "center" }} >
                <h1 style={{ textAlign: "center", marginTop: "30px", fontSize: "50px" }} >Gallery</h1>
                <img src="https://www.v3events.in/images/title-icon.png" alt="" className='Testimonials-Icon' style={{ marginBottom: "20px" }} />
                <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            <img style={imagestyles} src="./Image/asia-culturecenter-gChagrfkohg-unsplash.jpg" alt="" />
                        </div>
                        <div>
                            <img style={imagestyles} src="https://www.v3events.in/images/event/events42.jpg" alt="" />
                        </div>
                        <div>
                            <img style={imagestyles} src="https://www.v3events.in/images/event/events32.jpg" alt="" />
                        </div>
                        <div>
                            <img style={imagestyles} src="./Image/andy-wang-5mwo_CgCXaA-unsplash.jpg" alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default PARTIAL_WEDDING_PLANNING