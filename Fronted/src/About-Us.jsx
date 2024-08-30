import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "react-image-gallery/styles/css/image-gallery.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import './About.css';
import { FaSquareWhatsapp } from 'react-icons/fa6';


const images = [
  {
    original: "https://www.v3events.in/images/about/1.JPG",
    thumbnail: "https://www.v3events.in/images/about/1.JPG",
  },
  {
    original: "https://www.v3events.in/images/about/2.JPG",
    thumbnail: "https://www.v3events.in/images/about/2.JPG",
  },
  {
    original: "https://www.v3events.in/images/about/3.JPG",
    thumbnail: "https://www.v3events.in/images/about/3.JPG",
  },
  {
    original: "https://www.v3events.in/images/about/4.JPG",
    thumbnail: "https://www.v3events.in/images/about/4.JPG",
  },
  {
    original: "https://www.v3events.in/images/about/5.JPG",
    thumbnail: "https://www.v3events.in/images/about/5.JPG",
  },
  {
    original: "https://www.v3events.in/images/about/6.JPG",
    thumbnail: "https://www.v3events.in/images/about/6.JPG",
  },
  {
    original: "https://www.v3events.in/images/about/7.JPG",
    thumbnail: "https://www.v3events.in/images/about/7.JPG",
  },
  {
    original: "https://www.v3events.in/images/about/8.JPG",
    thumbnail: "https://www.v3events.in/images/about/8.JPG",
  },
  {
    original: "https://www.v3events.in/images/about/9.JPG",
    thumbnail: "https://www.v3events.in/images/about/9.JPG",
  },
  {
    original: "https://www.v3events.in/images/about/10.JPG",
    thumbnail: "https://www.v3events.in/images/about/10.JPG",
  },
  {
    original: "https://www.v3events.in/images/about/11.JPG",
    thumbnail: "https://www.v3events.in/images/about/11.JPG",
  },
];

function Aboutus() {

  return (
    <>
      {/* <link href='https://fonts.googleapis.com/css?family=Playfair Display SC' rel='stylesheet'></link> */}
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

      <div className="formers">
        <div className="position">
          <h1 style={{
            fontSize: "45px", color: "rgb(254,174,163)",
            textShadow: "pink  0.5px 0 1.5px"
          }}>About Us</h1>
          <h4 style={{
            fontSize: "20px", color: "white",
          }}> < Link style={{ color: "white" }} to="/">HOME</Link> / ABOUT US</h4>
        </div>
      </div>
      {/* Celebrity Management section */}
      <div className='Icon'>
        <img src="https://www.v3events.in/images/title-icon.png" alt="" className='Testimonials-Icon' style={{ marginBottom: "20px", marginTop: "40px" }} />
        <h2>Events & Entertainments Pvt. Ltd</h2>
        <div className='side-image'>
          <ReactImageGallery items={images} showPlayButton={false} autoPlay={true} showNav={false} />
        </div>
        <div className='etc-About-as'>
          <p className='pee-About-as' >Events & Entertainments Pvt. Ltd.is a Delhi & Mumbai based event management & wedding planning company dedicated to providing customers with a wide assortment of event management services for all sort of corporate and personal events. Be it live shows, celebrity events, entertainment events, star nights, product launches, theme parties, wedding events, birthdays, fashion shows, gazal nights and many more…</p>
          <p className='pee-About-as'>Our trained and skilled event planners have the right expertise to make your event more spectacular with more than 20 years of full-time experience in the event management & Wedding Planning industry, we are serving our customers with the best possible services delivered at the best possible rates. We provide out of the box and innovative ideas for 100% client satisfaction. </p>
          <p className='pee-About-as'> We are a one stop hub for all your event & Wedding Planning related requirements. Starting from venue Selection hotels booking, hospitality, decor recommendation, catering, and celebrity management to entertainment options, we deal with everything which is required for making your event a memorable one. We at MRSH conceive, arrange, execute and stylize all the arrangements in a manner to help make your dream event turn into reality.</p>

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
      </MDBFooter>  */}
    </>
  )
}

export default Aboutus