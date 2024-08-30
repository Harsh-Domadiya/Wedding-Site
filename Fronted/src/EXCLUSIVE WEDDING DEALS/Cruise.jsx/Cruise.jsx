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
import './Cruise.css'
import ScrollToTop from "react-scroll-to-top";
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
    original: "src/EXCLUSIVE WEDDING DEALS/Cruise.jsx/Image/2018-4-4--16-41-3-791_dn10.jpg",
    thumbnail: "src/EXCLUSIVE WEDDING DEALS/Cruise.jsx/Image/2018-4-4--16-41-3-791_dn10.jpg",
  },
  {
    original: "src/EXCLUSIVE WEDDING DEALS/Cruise.jsx/Image/2018-4-4--16-41-3-900_dn23.jpg",
    thumbnail: "src/EXCLUSIVE WEDDING DEALS/Cruise.jsx/Image/2018-4-4--16-41-3-900_dn23.jpg",
  },
  {
    original: "src/EXCLUSIVE WEDDING DEALS/Cruise.jsx/Image/2018-4-4--16-41-3-947_dn28.jpg",
    thumbnail: "src/EXCLUSIVE WEDDING DEALS/Cruise.jsx/Image/2018-4-4--16-41-3-947_dn28.jpg",
  },
  {
    original: "src/EXCLUSIVE WEDDING DEALS/Cruise.jsx/Image/2018-4-4--16-41-3-885_dn22.jpg",
    thumbnail: "src/EXCLUSIVE WEDDING DEALS/Cruise.jsx/Image/2018-4-4--16-41-3-885_dn22.jpg",
  },
  {
    original: "src/EXCLUSIVE WEDDING DEALS/Cruise.jsx/Image/1_20(147).jpg",
    thumbnail: "src/EXCLUSIVE WEDDING DEALS/Cruise.jsx/Image/1_20(147).jpg",
  },
  // {
  //   original: "src/What-We-Do/WEDDING-DECOR/Image/Mehendi5.jpg",
  //   thumbnail: "src/What-We-Do/WEDDING-DECOR/Image/Mehendi5.jpg",
  // },
];

function Cruise() {

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

      <div className="Wedecore-Cruise">
        <div className="position-Cruise">
          <h1 style={{ fontSize: "35px", color: "rgb(254,174,163)" }}>Cruise Wedding</h1>
          <h4 style={{ fontSize: "20px", color: "white" }}> <Link className='link' style={{ color: "white" }} to="/"> Home</Link> / Cruise Wedding</h4>
        </div>
      </div>
      {/* Celebrity Management section */}
      <div className='Icon'>
        <img src="https://www.v3events.in/images/title-icon.png" alt="" className='Testimonials-Icon' style={{ marginBottom: "20px", marginTop: "40px" }} />
        <div class="icon-bar">
          <div className="image-slide">
            <ReactImageGallery items={images} showPlayButton={false} autoPlay={true} showNav={false} style={{ height: "300px" }} />
          </div>
          <div className='extra-link-Cruise'>
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

        <div className='etca-Cruise'>
          <h3 style={{ textAlign: "center", marginRight: "11%", color: "black" }}>BEST CRUISE WEDDING PLANNERS</h3>
          <p className='peee-Cruise' style={{ marginTop: "2%" }}>Thinking of hosting a cruise wedding, but are not sure where to start or how to bring that idea to life? Then, no need to look beyond Events and Weddings. If you've always dreamed of being married at sea or on cruise, we are here with this package just for you. Filled with incredible ideas and insights along with a wealth of experience, we are one of the most reliable cruise wedding planners in Delhi NCR.</p>
          <p className='peee-Cruise'>Over the span of two decades, we have organised countless memorable weddings. As highly-experienced destination wedding planners, we ensure a smooth cruising towards the beginning of a new relationship. When it comes to cruise weddings, we have everything you need to make your wedding beautiful, joyful, adventurous yet seamless. From the best venue to the finger-licking delicious menu, you’ll get outstanding choices onboard.</p>
          <h3 style={{ textAlign: "left", marginLeft: "4%", color: "black" }}>EXTENSIVE CRUISE WEDDING PACKAGES</h3>
          <p className='peee-Cruise' style={{ marginTop: "1%" }}>Our extensive cruise wedding packages cover almost all the significant aspects but also leave ample room for customization and those special personal touches that make your cruise wedding uniquely personalised. With the most sought after cruise wedding planners in Delhi NCR, you Tie the Knot in an exciting manner way beyond your imagination.</p>
          <p className='peee-Cruise'>With Events and Weddings, you get an unforgettable cruise wedding and reception created by best-in-class professionals who know very well how to turn your special moments into memories worth cherishing for a lifetime. Start planning your dream cruise wedding withV3Events and Weddings to make it an outstandingly beautiful affair.</p>
          <p className='peee'></p>
        </div>
      </div>
      {/*  End of Gallery Section  */}
      <div style={{ textAlign: "center" }} >
        <h1 style={{ textAlign: "center", marginTop: "30px", fontSize: "50px" }} >Gallery</h1>
        <img src="https://www.v3events.in/images/title-icon.png" alt="" className='Testimonials-Icon' style={{ marginBottom: "20px" }} />
        <div className="slider-container-Cruise">
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

export default Cruise