import React from 'react';
import Slider from 'react-slick';//
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';//
import "@fortawesome/fontawesome-free/css/all.min.css";//
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';//s
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";

import './Royal.css'
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
        original: "src/EXCLUSIVE WEDDING DEALS/Royal-Wedding/image/Royal-6.jpg",
        thumbnail: "src/EXCLUSIVE WEDDING DEALS/Royal-Wedding/image/Royal-6.jpg",
    },
    {
        original: "src/EXCLUSIVE WEDDING DEALS/Royal-Wedding/image/Royal-5.jpg",
        thumbnail: "src/EXCLUSIVE WEDDING DEALS/Royal-Wedding/image/Royal-5.jpg",
    },
    {
        original: "src/EXCLUSIVE WEDDING DEALS/Royal-Wedding/image/Royal-3.jpg",
        thumbnail: "src/EXCLUSIVE WEDDING DEALS/Royal-Wedding/image/Royal-3.jpg",
    },
    {
        original: "src/EXCLUSIVE WEDDING DEALS/Royal-Wedding/image/Royal-4.jpg",
        thumbnail: "src/EXCLUSIVE WEDDING DEALS/Royal-Wedding/image/Royal-4.jpg",
    },
    {
        original: "src/EXCLUSIVE WEDDING DEALS/Royal-Wedding/image/Royal-2.jpg",
        thumbnail: "src/EXCLUSIVE WEDDING DEALS/Royal-Wedding/image/Royal-2.jpg",
    },
    {
        original: "src/EXCLUSIVE WEDDING DEALS/Royal-Wedding/image/Royal-1.jpg",
        thumbnail: "src/EXCLUSIVE WEDDING DEALS/Royal-Wedding/image/Royal-1.jpg",
    },
];

function Royal() {

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

            <div className="Wedecore-Royal">
                <div className="position-Royal">
                    <h1 style={{ fontSize: "35px", color: "rgb(254,174,163)" }}>Royal Wedding</h1>
                    <h4 style={{ fontSize: "20px", color: "white" }}> <Link className='link' style={{ color: "white" }} to="/"> Home</Link> / Royal Wedding</h4>
                </div>
            </div>
            {/* Celebrity Management section */}
            <div className='Icon'>
                <img src="https://www.v3events.in/images/title-icon.png" alt="" className='Testimonials-Icon' style={{ marginBottom: "20px", marginTop: "40px" }} />
                <div class="icon-bar">
                    <div className="image-slide">
                        <ReactImageGallery items={images} showPlayButton={false} autoPlay={true} showNav={false} style={{ height: "300px" }} />
                    </div>
                    <div className='extra-link-Wedding-decore'>
                        <div class="ulockd-all-service">

                            <h4 style={{ backgroundColor: "rgb(254, 174, 163)", textAlign: "center", padding: "1%", borderRadius: "10px", color: "black" }}>Wedding Services</h4>

                            <div class="list-group">

                                <a href="complete-wedding-planning" class="list-group-item" style={{ width: "300px" }}><Link className='link' style={{ color: "black" }} to="/Complete_wedding_planer">Complete Wedding Planning</Link></a>

                                <a href="partial-wedding-planning" class="list-group-item" style={{ width: "300px" }}> <Link className='link' to="/PARTIAL_WEDDING_PLANNING">Partial Wedding Planning </Link>   </a>

                                <a href="luxury-wedding-planners-in-delhi" class="list-group-item" style={{ width: "300px" }}> <Link className='link' style={{ color: "black" }} to="/Luxury">Luxury Wedding Planners</Link> </a>

                                <a href="wedding-organizers-in-delhi" class="list-group-item" style={{ width: "300px" }}> <Link className='link' style={{ color: "black" }} to="/Wedding">Wedding Organizers</Link></a>

                                <a href="wedding-photographers" class="list-group-item" style={{ width: "300px" }}><Link className='link' to="/Catering">Catering</Link></a>

                                <a href="destination-wedding-planner" class="list-group-item" style={{ width: "300px" }}><Link className='link' to="/Wedding_Designers_In_India">Weddding Desigeners In India </Link></a>

                                <a href="theme-based-wedding-planning" class="list-group-item" style={{ width: "300px" }}><Link className='link' to="/Theme_Based_Wedding">Theme-Based Wedding Planning</Link></a>

                            </div>

                        </div>
                    </div>
                </div>
                <img src="https://www.v3events.in/images/title-icon.png" alt="" className='Testimonials-Icon' style={{ marginBottom: "0px", marginTop: "10px" }} />

                <div className='etca-Royal'>
                    <h3 style={{ textAlign: "center", marginRight: "10%", color: "black" }}>BEST ROYAL WEDDING PLANNERS</h3>
                    <p className='peee-Royal' style={{ marginTop: "2%" }} >We are sure every girl has dreamt of a fairytale wedding and what could be more romantic than a royal palace wedding? Get your wish of having a royal wedding accomplished with style with the help of the most reputed royal wedding planners in Delhi NCR. With our huge experience accumulated over two decades, we can assure you that you are going to live an outstanding wedding experience with us.</p>
                    <p className='peee-Royal'>There is no doubt that India is amongst the finest and most-sought luxury wedding destinations in the world due to numerous royal cities like Jaipur, Jodhpur, Udaipur and so on. Celebrity weddings on a frequent basis have further enhanced the charm of hosting a regal wedding in forts and palaces. As highly-experienced wedding planners, we ensure that ‘charm’ does not fade even a bit, instead, we leave you astonished with the way we organise royal weddings.</p>
                    <h3 style={{ textAlign: "left", marginLeft: "4%", color: "black" }}>COMPREHENSIVE ROYAL WEDDING PACKAGES</h3>
                    <p className='peee-Royal' style={{ marginTop: "1%" }} >We understand that exchanging vows with the one you love, should be one of the most flawless days of your life. Your royal destination wedding should be an elegant, unique and unforgettable experience. At V3Events and Weddings, wedding planners pour their hearts to produce moments that are going to be cherished by you and your loved ones for long.</p>
                    <p className='peee-Royal'>As one of the most trusted royal wedding planners in Delhi NCR, we manage all the tasks while navigating you with the significant decisions that come with royally exchanging vows far from home. With our comprehensive royal wedding package, we ensure no detail is lost in translation and you get to experience the royal wedding you always dreamt of.</p>
                </div>
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

export default Royal