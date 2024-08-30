import React from 'react';
import Slider from 'react-slick';//
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';//
import "@fortawesome/fontawesome-free/css/all.min.css";//
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';//s
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from 'react-image-gallery';
import './WEDDING_PLANER.css'
import ScrollToTop from "react-scroll-to-top";

import { Link } from 'react-router-dom';
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
        original: "./src/What-We-Do/WEDDING_PLANER/Image/Raam-Dheepitha-5.jpg",
        thumbnail: "src/What-We-Do/WEDDING_PLANER/Image/Raam-Dheepitha-5.jpg",
    },
    {
        original: "./src/What-We-Do/WEDDING_PLANER/Image/Raam-Dheepitha-8.jpg",
        thumbnail: "src/What-We-Do/WEDDING_PLANER/Image/Raam-Dheepitha-8.jpg",
    },
    {
        original: "./src/What-We-Do/WEDDING_PLANER/Image/Raam-Dheepitha-16.jpg",
        thumbnail: "src/What-We-Do/WEDDING_PLANER/Image/Raam-Dheepitha-16.jpg",
    },
    {
        original: "./src/What-We-Do/WEDDING_PLANER/Image/Raam-Dheepitha-18.jpg",
        thumbnail: "src/What-We-Do/WEDDING_PLANER/Image/Raam-Dheepitha-18.jpg",
    },
    {
        original: "./src/What-We-Do/WEDDING_PLANER/Image/Raam-Dheepitha-20.jpg",
        thumbnail: "src/What-We-Do/WEDDING_PLANER/Image/Raam-Dheepitha-20.jpg",
    },
    {
        original: "./src/What-We-Do/WEDDING_PLANER/Image/Raam-Dheepitha-22.jpg",
        thumbnail: "src/What-We-Do/WEDDING_PLANER/Image/Raam-Dheepitha-22.jpg",
    },
];

function WeddingPlaner() {

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

            <div className="Wedecore-Wedding-Planer">
                <div className="position-Wedding-Planer">
                    <h1 style={{ fontSize: "35px", color: "rgb(254,174,163)" }}>Wedding Planer</h1>
                    <h4 style={{ fontSize: "20px", color: "white" }}>  <Link className='link' style={{ color: "white" }} to="/"> Home</Link>  / Wedding Planer</h4>
                </div>
            </div>
            {/* Celebrity Management section */}
            <div className='Icon'>
                <img src="https://www.v3events.in/images/title-icon.png" alt="" className='Testimonials-Icon' style={{ marginBottom: "20px", marginTop: "40px" }} />
                <div class="icon-bar-Wedding-Planer">
                    <div className="image-slide">
                        <ReactImageGallery items={images} showPlayButton={false} autoPlay={true} showNav={false} style={{ height: "300px" }} />
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
                <img src="https://www.v3events.in/images/title-icon.png" alt="" className='Testimonials-Icon' style={{ marginBottom: "2px", marginTop: "10px" }} />

                <div className='etc-Wedding-Planer'>
                    <h3 style={{ textAlign: "center", margin: "0%" }}>MAKE YOUR WEDDING MEMORABLE WITH BEST WEDDING PLANNERS</h3>
                    <p className='pee-Wedding-Planer'>The wedding is one of the most important days in anyone’s life. It’s a lifetime bond between two souls with one another and a promise to spend their entire life being partners for each other. As one of the Best Wedding Planners in Delhi,  Events & Weddings helps in crafting & capturing the sweet memories of a wedding. We assist in providing a memorable wedding that bride and groom might have dreamt of.</p>
                    <p className='pee-Wedding-Planer'>Being the Best Wedding Planners in Delhi, the wedding designers at  Events & Entertainment follow the latest trends of the wedding in organizing and arranging a memorable wedding that will be remembered by all the guests. Right from designing trendy & classic Invitation card to organize a mesmerizing theme based wedding party; we keep all the contemporary quotients included to make your wedding hard to forget for each & every guest.</p>
                    <p className='pee-Wedding-Planer'>Arranging the sound system to the arrangement of escorting your guests with royal hospitality, we are there to give you the highest level of support in arrangement of your event. We are also comfortable in arranging the snacks or the grand or gala dinner party for your guests and the board meeting members.</p>
                    <p className='pee-Wedding-Planer'>Arrangement of giant screens for large shows and even the arrangement of interpreter for foreign meets, we are every time beside you with all our equipment. Hence, reach us and just narrate the idea you want to establish. Modification and modernization of that idea until the execution of the same is our edge. And the most important thing is that when we will be arranging it for you, there will be no space for you to listen anything else than praise of the event.</p>
                    <p className='pee-Wedding-Planer'>Hence, reach us now and experience the world-class event management euphoria before you.</p>
                </div>
                <div className='Icon-Wedding-planer'>
                    <div className='icon-container-Wedding-planer'>
                        <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Buddha</h3>
                    </div>
                    <div className='icon-container-Wedding-planer'>
                        <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Arabian</h3>
                    </div>
                    <div className='icon-container-Wedding-planer'>
                        <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>  Flower Valley</h3>
                    </div>
                    <div className='icon-container-Wedding-planer'>
                        <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Punjabi Village</h3>
                    </div>
                    <div className='icon-container-Wedding-planer'>
                        <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Krishna  </h3>
                    </div>
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
            {/* Footer */}
            {/* <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' />
                <section className='foter' >
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto'  >
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me-3" />
                                    Marsh Wedding
                                </h6>
                                <p style={{ width: "300px" }}>
                                    Events and Entertainments Pvt Ltd is passionate about crafting charmingly timeless and elegant luxurious weddings and events at stunning venues throughout the world. As the leading wedding designers and event organisers in Delhi and Gurgaon, we are renowned to create authentic experiences worth cherishing for a lifetime.
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4' >
                                <h6 className='text-uppercase fw-bold mb-4' >Contact Us</h6>
                                <p>
                                    <MDBIcon icon="home" className="me-2" />
                                    Opera Palace, Laskana - Kholwad Road, Kholwad, Kamrej - 394190, Kamrej, Gujarat
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    info@Marsh.com
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-3" />+91 94285 53006
                                </p>
                                <div style={{ marginTop: "10px", fontSize: "20pt" }} >
                                    <a href='' className='me-4 text-reset'>
                                        <MDBIcon fab icon="instagram" />
                                    </a>
                                    <a href='' className='me-4 text-reset'>
                                        <MDBIcon fab icon="facebook-f" />
                                    </a>
                                    <a href='' className='me-4 text-reset'>
                                        <MDBIcon fab icon="twitter" />
                                    </a>
                                    <a href='' className='me-4 text-reset'>
                                        <MDBIcon fab icon="google" />
                                    </a>
                                </div>
                            </MDBCol>
                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'  >
                                <h6 className='text-uppercase fw-bold mb-4'> Map Location </h6>
                                <iframe
                                    width="450"
                                    height="300"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19665.591366333894!2d72.93611358160443!3d21.258818927746205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0467a791e83e9%3A0x6696cd7bf42c9c57!2sOpera%20Palace%20Apartments!5e1!3m2!1sen!2sin!4v1710259200344!5m2!1sen!2sin"
                                ></iframe>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' >
                    © 2024 Copyright:
                    <a className='text-reset fw-bold' href='http://localhost:5173/'>
                        Marsh.com
                    </a>
                </div>
            </MDBFooter> */}
        </>
    )
}

export default WeddingPlaner