import "@fortawesome/fontawesome-free/css/all.min.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './CM.css';
import { FaSquareWhatsapp } from "react-icons/fa6";
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

function CM() {

  return (
    <>
      {/* <h1>Celebrity Management </h1> */}
      {/*  Header */}
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

      <div className="performer">
        <div className="position">
          <h1 style={{ fontSize: "35px", color: "rgb(254,174,163)" }}>Celebrity Management</h1>
          <h4 style={{ fontSize: "20px", color: "white" }}> < Link style={{ color: "white" }} to="/">HOME</Link> / Celebrity Management</h4>
        </div>
      </div>
      {/* Celebrity Management section */}
      <div className='Icon'>
        <img src="https://www.v3events.in/images/title-icon.png" alt="" className='Testimonials-Icon' style={{ marginBottom: "20px", marginTop: "40px" }} />
        <p className='pee' >Entertainment Industry is growing significantly in recent times and has soared to become an unconventional industry in itself with many segments gaining popularity. The mantra is to present an event, private or professional with seamless efficiency. We are a team of people with a futuristic vision and possess an affinity for perfect and smooth execution of all events which are organized us.</p>
        <p className='pee'> Celebrities Coordination today not only includes coordination of artists but it also involves planning logistics, taking required permissions, technical stage knowledge, and travel security. We have come to be known as a complete and integrated event & entertainment managers by applying the simple technique of using all communication tools effectively together to create a balance and thus giving us the path of achieving our targets, personal as well as professional. </p>
        <p className='pee'> Events & Entertainments can manage the artist as per your event needs and requirements. We are having expertise in management of celebrity from any field of art & entertainment, such as</p>
        <div className="herte-icon">
          <div className='icon-container'>
            <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Bollywood Film stars</h3>
          </div>
          <div className='icon-container'>
            <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Celebrity Emcees</h3>
          </div>
          <div className='icon-container'>
            <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Playback Singers</h3>
          </div>
          <div className='icon-container'>
            <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Reality show performers</h3>
          </div>
          <div className='icon-container'>
            <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Standup Comedians</h3>
          </div>
          <div className='icon-container'>
            <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Live Bands</h3>
          </div>
          <div className='icon-container'>
            <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Punjabi Pop Singers</h3>
          </div>
          <div className='icon-container'>
            <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Models</h3>
          </div>
          <div className='icon-container'>
            <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Talent hunt Singers</h3>
          </div>
          <div className='icon-container'>
            <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>International Performers</h3>
          </div>
          <div className='icon-container'>
            <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Indi Pop singers</h3>
          </div>
          <div className='icon-container'>
            <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Indian & International</h3>
          </div>
          <div className='icon-container'>
            <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Sufi Singers</h3>
          </div>
          <div className='icon-container'>
            <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Dance troupes etc…</h3>
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
    </>
  )
}

export default CM