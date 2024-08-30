import React, { useState } from 'react';
import axios from 'axios';
import { MdLocationOn } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";

import './Reach-us.css'
import { FaSquareWhatsapp } from 'react-icons/fa6';

// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

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

function REach() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contacts, setContacts] = useState('');
    const [message, setMessage] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            contacts,
            message,
            agreeToTerms,
        }

        try {
            const response = await axios.post('http://localhost:3000/api/contact', data);
            // alert("response");
            // Handle success response
            console.log(response.data);
            // Clear form fields
            setName('');
            setEmail('');
            setContacts('');
            setMessage('');
            setAgreeToTerms(false);

        } catch (error) {
            console.error(error.response);
        }
    };

    return (
        <>
            {/* <link href='https://fonts.googleapis.com/css?family=Playfair Display SC' rel='stylesheet'></link> */}

            {/* <h1>REACH US </h1> */}
            {/*  Header */}
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

            <div className="peformers">
                {/* <img src="./image/contact.jpg" style={{height:"570px"}} alt="" srcset="" /> */}
                <div className="position-reach-us">
                    <h1 style={{
                        fontSize: "45px", color: "rgb(254,174,163)",
                        textShadow: "black  0.5px 0 1.5px"
                    }}>Contact Us</h1>
                    <h4 style={{
                        fontSize: "20px", color: "white",
                    }}> < Link style={{ color: "white" }} to="/">HOME</Link> / Contact Us</h4>
                </div>
            </div>
            {/* Celebrity Management section */}


            <div className='Icon'>
                <img src="https://www.v3events.in/images/title-icon.png" alt="" className='Testimonials-Icon' style={{ marginBottom: "20px", marginTop: "40px" }} />
                <h2>CONTACT DETAILS</h2>
                <h4>"We will be glad to become a part of your unique wedding ”</h4>
                <div className='contect'>
                    <div className='information'>
                        <h1>Let's talk about the future</h1>
                        <h4 style={{ fontSize: "20px", width: "570px" }} >We're here to answer your questions and discuss the decentralized future of the internet.</h4>
                        <div className='icon-info'>
                            <p className='details' style={{ fontSize: "20px" }}>
                                <MdEmail style={{ fontSize: "30px", marginRight: "6px" }} />  info@Mrsh.com
                            </p>
                            <p className='details' style={{ fontSize: "20px" }}>
                                <IoIosCall style={{ fontSize: "30px", marginRight: "6px" }} />  +91 73832 78015, +91 99792 60896, +91 99792 79784
                            </p>
                            <p className='details' style={{ fontSize: "20px" }}>
                                <MdLocationOn style={{ fontSize: "30px", marginRight: "6px" }} /> Opera Palace, Laskana-Kholwad, Kamrej-394190, Gujarat.
                            </p>
                        </div>
                    </div>
                    <div className="contact-page">
                        <h1 className="contact-page__title">Let's talk about the future</h1>
                        <p className="contact-page__description">
                            We're here to answer your questions and discuss the decentralized future of the internet.
                        </p>
                        <form className="contact-page__form">
                            <label htmlFor="name" className="contact-page__label">
                                Full name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="contact-page__input"
                            />
                            <br />
                            <label htmlFor="email" className="contact-page__label">
                                Email address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="contact-page__input"
                            />
                            <br />
                            <label htmlFor="contacts" className="contact-page__label">
                                Contacts *
                            </label>
                            <input
                                type="text"
                                id="contacts"
                                value={contacts}
                                onChange={(e) => setContacts(e.target.value)}
                                required
                                className="contact-page__input"
                            />
                            <br /><label htmlFor="message" className="contact-page__label">
                                Message *
                            </label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="contact-page__textarea"
                            />
                            <br />
                            <label htmlFor="agreeToTerms" className="contact-page__label">
                                <input
                                    type="checkbox"
                                    id="agreeToTerms"
                                    checked={agreeToTerms}
                                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                                    required
                                    className="contact-page__checkbox"
                                />
                                I agree to the terms and conditions
                            </label>
                            <br />
                            <button type="submit" onClick={handleSubmit} className="contact-page__button">
                                Submit
                            </button>
                        </form>
                    </div>
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
                                    Mrsh Wedding
                                </h6>
                                <p style={{ width: "300px" }}>
                                    Events and Entertainments Pvt Ltd is passionate about crafting charmingly timeless and elegant luxurious weddings and events at stunning venues throughout the world. As the leading wedding designers and event organisers in Delhi and Gurgaon, we are renowned to create authentic experiences worth cherishing for a lifetime.
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4' >
                                <h6 className='text-uppercase fw-bold mb-4' >Contact Us</h6>
                                <p>
                                    <MDBIcon icon="home" className="me-2" />
                                    ઓપેરા પેલેસ, લસકાણા - ખોલવડ રોડ, ખોલવડ , કામરેજ - ૩૯૪૧૯૦, Kamrej, Gujarat
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    info@Mrsh.com
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
                        Mrsh.com
                    </a>
                </div>
            </MDBFooter> */}
        </>
    )
}

export default REach