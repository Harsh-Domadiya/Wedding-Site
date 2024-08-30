import React from 'react';
import Slider from 'react-slick';//
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';//
import "@fortawesome/fontawesome-free/css/all.min.css";//
import ScrollToTop from "react-scroll-to-top";

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';//s
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
import './Beach-Wedding.css'
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
        original: "src/EXCLUSIVE WEDDING DEALS/Beach-Wedding/Image/018-montage-laguna-beach-indian-couple-wedding-photography-1600x1066.jpg",
        thumbnail: "src/EXCLUSIVE WEDDING DEALS/Beach-Wedding/Image/018-montage-laguna-beach-indian-couple-wedding-photography-1600x1066.jpg",
    },
    {
        original: "src/EXCLUSIVE WEDDING DEALS/Beach-Wedding/Image/017-montage-laguna-beach-indian-couple-wedding-photography-1600x781.jpg",
        thumbnail: "src/EXCLUSIVE WEDDING DEALS/Beach-Wedding/Image/017-montage-laguna-beach-indian-couple-wedding-photography-1600x781.jpg",
    },
    {
        original: "src/EXCLUSIVE WEDDING DEALS/Beach-Wedding/Image/021-montage-laguna-beach-indian-baraat-wedding-photography-1600x781.jpg",
        thumbnail: "src/EXCLUSIVE WEDDING DEALS/Beach-Wedding/Image/021-montage-laguna-beach-indian-baraat-wedding-photography-1600x781.jpg",
    },
    {
        original: "src/EXCLUSIVE WEDDING DEALS/Beach-Wedding/Image/032-montage-laguna-beach-indian-wedding-ceremony-photography-1600x1066.jpg",
        thumbnail: "src/EXCLUSIVE WEDDING DEALS/Beach-Wedding/Image/032-montage-laguna-beach-indian-wedding-ceremony-photography-1600x1066.jpg",
    },
    {
        original: "src/EXCLUSIVE WEDDING DEALS/Beach-Wedding/Image/035-montage-laguna-beach-indian-wedding-ceremony-photography-1600x696.jpg",
        thumbnail: "src/EXCLUSIVE WEDDING DEALS/Beach-Wedding/Image/035-montage-laguna-beach-indian-wedding-ceremony-photography-1600x696.jpg",
    },
    {
        original: "src/EXCLUSIVE WEDDING DEALS/Beach-Wedding/Image/041-montage-laguna-beach-indian-wedding-ceremony-photography-1600x1066.jpg",
        thumbnail: "src/EXCLUSIVE WEDDING DEALS/Beach-Wedding/Image/041-montage-laguna-beach-indian-wedding-ceremony-photography-1600x1066.jpg",
    },

];

function Beach() {

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

            <div className="Wedecore-Beach">
                <div className="position-Beach">
                    <h1 style={{ fontSize: "35px", color: "rgb(254,174,163)" }}>Beach Wedding</h1>
                    <h4 style={{ fontSize: "20px", color: "white" }}> <Link className='link' style={{ color: "white" }} to="/"> Home</Link> / Beach Wedding</h4>
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
                <img src="https://www.v3events.in/images/title-icon.png" alt="" className='Testimonials-Icon' style={{ marginBottom: "10px", marginTop: "10px" }} />

                <div className='etca-Beach'>
                    <h3 style={{ textAlign: "center", marginLeft: "0", color: "black" }}>BEST BEACH WEDDING PLANNERS</h3>
                    <p className='peee-Beach' style={{ marginTop: "2%" }}>If your wedding bells have started ringing and if you’ve always dreamt of a beach wedding then congratulations! You just have arrived at the perfect place. Events and Weddings is renowned as one of the best beach wedding planners. Over two decades we have organised numerous outstanding weddings and have gained an unmatchable reputation as destination wedding planners.</p>
                    <p className='peee-Beach' >Whether you are thinking about Indian beaches like Goa and Havelock island or some other extravagant international beaches like Bali or Koh Samui for hosting your destination wedding, we are there for you. Our incredible amount of experience and expertise empower us to make any beach wedding almost flawless. We leave no shell unturned to make your beach wedding a stunning experience for you and your loved ones.</p>
                    <h3 style={{ textAlign: "left", marginLeft: "9%", color: "black" }}>EXTENSIVE BEACH WEDDING PACKAGES</h3>
                    <p className='peee-Beach' style={{ marginTop: "1%" }} >A destination wedding, especially if it's a beach wedding, enhances the joys manifolds. Although organising it might be a bit tedious, let’s help you so that you can experience the fun part of your marriage more than the management of it. As one of the most prominent beach wedding planners in Delhi NCR, we are always here to make your dream come true.</p>
                    <p className='peee-Beach' >As you plan the most important day of your life with us, our exceptional wedding planning services ensure you have nothing to worry about and everything at it’s best. Get married at beach destination wedding venues with Events and Weddings. Matching your expectations of having a vibrant beach wedding is always going to remain our prime goal. You can be assured that your journey with us will be stress-free, exciting and unforgettable.</p>
                </div>
                {/* <div className='Icon-Wedding-decore'>
          <div className='icon-container-Wedding-decore'>
            <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Exquisite Color Combinations</h3>
          </div>
          <div className='icon-container-Wedding-decore'>
            <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Fantastic Lighting Arrangement</h3>
          </div>
          <div className='icon-container-Wedding-decore'>
            <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Coherent Floral Decorations</h3>
          </div>
          <div className='icon-container-Wedding-decore'>
            <img src="./image/pngfind.com-black-heart-png-461970.png" alt="" srcset="" height={20} width={20} /><h3>Smart Furniture Arrangement</h3>
          </div>
        </div> */}
            </div>
            {/*  End of Gallery Section  */}
            <div style={{ textAlign: "center" }} >
                <h1 style={{ textAlign: "center", marginTop: "30px", fontSize: "50px" }} >Gallery</h1>
                <img src="https://www.v3events.in/images/title-icon.png" alt="" className='Testimonials-Icon-Beach' style={{ marginBottom: "20px" }} />
                <div className="slider-container-Beach">
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

export default Beach