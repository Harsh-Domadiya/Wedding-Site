import React from 'react';
import Slider from 'react-slick';//
import 'slick-carousel/slick/slick.css';///
import 'slick-carousel/slick/slick-theme.css';///
import 'mdb-react-ui-kit/dist/css/mdb.min.css';///
import "@fortawesome/fontawesome-free/css/all.min.css";///
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';///
import { Link } from 'react-router-dom';
import './Luxury.css'
import ScrollToTop from "react-scroll-to-top";
import { FaSquareWhatsapp } from 'react-icons/fa6';

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

function Luxury() {

  return (
    <>
      {/* <h1>Wedding Organizers </h1> */}
      {/*  Header */}
      {/* <div className='Number'>
        <div className='call'>
          <img src="./image/phone-with-wire.png" alt="" srcset="" height={30} width={30} />
        </div>
        <div className='left-message'>
          <FaCaretLeft style={{height:"55px"}}  color='antiquewhite'/>
          <h4 className='h4'>
            +91 94285 53006
          </h4>
        </div>
      </div> */}
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

      <div className="performe-Luxury">
        <div className="position-Luxury">
          <h1 style={{ fontSize: "35px", color: "rgb(254,174,163)" }}>Luxury Wedding Planners</h1>
          <h4 style={{ fontSize: "20px", color: "white" }}> < Link style={{ color: "white" }} to="/">Home</Link> / Luxury Wedding Planners</h4>
        </div>
      </div>
      {/* Celebrity Management section */}
      <div className='Icon'>
        <img src="https://www.v3events.in/images/title-icon.png" alt="" className='Testimonials-Icon' style={{ marginBottom: "20px", marginTop: "40px" }} />
        <p className='pee-Luxury'>Events & Weddings is one of the most preferred choices as luxury wedding planners in Delhi NCR for those who are seeking authentic and unique wedding organization. We have built a huge reputation as luxury wedding planners in Delhi NCR by consistently creating outstanding luxury weddings. Whether it is a small intimate gathering to large or a lavish affair, we offer first-class service and shape world-class events.</p>
        <p className='pee-Luxury'>As our wedding designers are passionate about what we do, we strive to ensure all our wedding organization is exceptional. Across the world, we work with the best in the business, and we initiate trends rather than follow them.</p>
        <p className='pee-Luxury'>The main focus of our company as a reputed MRSH Events: luxury wedding planners in Delhi NCR is our bespoke wedding planning, design, and management service. We help our clients in building memorable, magical wedding ceremonies that exceed expectations. Our wedding designers ensure the weddings we plan are significant and truly reflect our clients as individuals, as couples, and affirm with their shared values and sense of style.</p>
        <p className='pee-Luxury'>As a leading luxury wedding planners in Delhi NCR, we have a brilliant network of exceptional event vendors & suppliers who meet quantifiable measures of service and commitment. Wherever in the world, we undertake to never compromise on either the quality or the comfort. And we understand that outstanding wedding design is only half the story; excellent weddings are all about people and we always work while keeping the best intentions and experiences in mind.</p>
        <p className='pee-Luxury'>Events and Weddings understand your needs and craft your wedding in the way which reflects your lifestyle and personality that too while keeping the things within the desired budget. If you are looking for any kind of Destination wedding Planner -related services, whether it’s the selection of the wedding venueor picking your attire or choosing the right hairstyle or photographer, just tell us what’s your flavour and we will deliver the best combination to you. Being the young and motivated team, we find excitement while organizing any wedding or event. We deliver awesome results with a smile.</p>

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

export default Luxury;