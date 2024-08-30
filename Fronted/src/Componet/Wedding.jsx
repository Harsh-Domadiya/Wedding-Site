import React from 'react';
import Slider from 'react-slick';//
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';//
import "@fortawesome/fontawesome-free/css/all.min.css";//
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';//
import './WO.css'
import { Link } from 'react-router-dom';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import ScrollToTop from "react-scroll-to-top";

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

function Wedding() {

    return (
        <>
            {/* <link href='https://fonts.googleapis.com/css?family=Playfair Display SC' rel='stylesheet'></link> */}

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

            <div className="performers">
                <div className="position-Organizers">
                    <h1 style={{ fontSize: "35px", color: "rgb(254,174,163)" }}>Wedding Organizers</h1>
                    <h4 style={{ fontSize: "20px", color: "white" }}>< Link style={{ color: "white" }} to="/">HOME</Link> / Wedding Organizers</h4>
                </div>
            </div>
            {/* Celebrity Management section */}
            <div className='Icon'>
                <img src="https://www.v3events.in/images/title-icon.png" alt="" className='Testimonials-Icon' style={{ marginBottom: "20px", marginTop: "40px" }} />
                <p className='pee' >As a prominent Wedding Organizers in Delhi, we think outside the box at MRSH Events & Weddings while planning a wedding event. For us your wedding event is a blank canvas; our team of eminent wedding designers in India enthusiastically takes it as an opportunity and make it exactly the masterpiece you envision it to be, as we ensure that every element is managed to perfection.</p>
                <p className='pee'>Being the well-experienced Wedding Organizers in Delhi, we consider all those little aspects, from invitation cards to parking space, to checking even the flower petals are spotless; we make the modifications that exhilarate your experience. We acknowledge the significance of a big event and so, take the time to communicate personally to get to know you and not just what you want. </p>
                <p className='pee'>We don’t have a fixed list of services or specific choices of requirements at  Events & Weddings. Why would we? Your event is needed to be personalized as your event, no-one else’s.</p>
                <p className='pee'>As the distinguished Wedding Organizers in Delhi, we’re there at every step with you, while on the planning of the event as well as on the on-site management, assuring that everything goes smoothly. Our team of eminent wedding designers in India takes care of all the hard work and long drawn out planning, yielding the best outcomes.</p>
                <p className='pee'>The team of wedding designers at MRSH Events & Weddings will manage every part of your special day, from grasping the right venue and resolving on a date, right the way into the big day itself. Allowing you to keep control, we will do all the work to ensure your day transpires absolutely spectacular. On wedding occasion, we will be there to assist & coordinate all details and make sure that the wedding day exceeds all expectations of not only yours but also of all your esteemed guests.</p>

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

export default Wedding