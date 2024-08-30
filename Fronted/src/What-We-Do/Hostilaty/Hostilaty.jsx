import React from 'react';
import Slider from 'react-slick';//
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';//
import "@fortawesome/fontawesome-free/css/all.min.css";//
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';//s
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from 'react-image-gallery';
import './Hostilaty.css'
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
    original: "src/What-We-Do/Hostilaty/Image/HOSPITALITY-2.jpg",
    thumbnail: "src/What-We-Do/Hostilaty/Image/HOSPITALITY-2.jpg",
  },
  {
    original: "src/What-We-Do/Hostilaty/Image/HOSPITALITY-3.jpg",
    thumbnail: "src/What-We-Do/Hostilaty/Image/HOSPITALITY-3.jpg",
  },
  {
    original: "src/What-We-Do/Hostilaty/Image/HOSPITALITY-4.jpg",
    thumbnail: "src/What-We-Do/Hostilaty/Image/HOSPITALITY-4.jpg",
  },
  {
    original: "src/What-We-Do/Hostilaty/Image/HOSPITALITY-5.jpg",
    thumbnail: "src/What-We-Do/Hostilaty/Image/HOSPITALITY-5.jpg",
  },
  {
    original: "src/What-We-Do/Hostilaty/Image/HOSPITALITY.jpg",
    thumbnail: "src/What-We-Do/Hostilaty/Image/HOSPITALITY.jpg",
  },
];

function Hostilaty() {

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

      <div className="Wedecore-Hostilaty">
        <div className="position-Hostilaty">
          <h1 style={{ fontSize: "40px", color: "rgb(294,174,163)", textShadow: "0px 1px 2px rgba(0,0,0,0.6)" }}>Hostilaty</h1>
          <h4 style={{ fontSize: "20px", color: "white" }}> < Link style={{ color: "white" }} to="/">Home</Link> / Hostilaty</h4>
        </div>
      </div>
      {/* Celebrity Management section */}
      <div className='Icon'>
        <img src="https://www.v3events.in/images/title-icon.png" alt="" className='Testimonials-Icon' style={{ marginBottom: "10px", marginTop: "10px" }} />

        <div class="icon-bar-Hostilaty">
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

                {/* <a href="destination-wedding-planner" class="list-group-item" style={{ width: "300px" }}><Link 
                className='link' to="//Theme_Based_Wedding">Weddding Desigeners In India </Link></a> */}

                <a href="theme-based-wedding-planning" class="list-group-item" style={{ width: "300px" }}><Link className='link' to="/Theme_Based_Wedding">Theme-Based Wedding Planning</Link></a>

              </div>

            </div>
          </div>
        </div>
        <div className='etc-Hostilaty'>
          {/* <h3 >MAKE YOUR WEDDING MEMORABLE WITH BEST WEDDING PLANNERS</h3> */}
          <p className='pee-Hostilaty'>Events and Weddings is a premium event management and hospitality services provider in Delhi NCR. Hospitality is defined as taking care of your guests and precisely anticipating their needs. We are renowned for offering a wide range of hospitality services that include lodging, food and drink service, event planning and transportation service to them every time.</p>
          <p className='pee-Hostilaty'>The team behind our hospitality services has extensive experience in both hospitality and event management for over 20 years and has been setting unsurpassable standards in Delhi NCR. Our expertise and experience not only empower us to deliver the best quality services with consistency but also set us apart from everyone else.</p>
          <p className='pee-Hostilaty'>Events and Weddings is committed to providing extensive hospitality services to all our clients to the best of our ability. We always aim to exceed our clients' expectations and our team is well-trained to give you fast and efficient service. Availing hospitality services from V3Events and Weddings means availing the best value of your money.</p>
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

export default Hostilaty