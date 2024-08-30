import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
import './Desert.css'


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
        original: "src/EXCLUSIVE WEDDING DEALS/Desert-Wedding/image/01-karishma-jhalani-ashwin-jain.jpg",
        thumbnail: "src/EXCLUSIVE WEDDING DEALS/Desert-Wedding/image/01-karishma-jhalani-ashwin-jain.jpg",
    },
    {
        original: "src/EXCLUSIVE WEDDING DEALS/Desert-Wedding/image/07-karishma-jhalani-ashwin-jain.jpg",
        thumbnail: "src/EXCLUSIVE WEDDING DEALS/Desert-Wedding/image/07-karishma-jhalani-ashwin-jain.jpg",
    },
    {
        original: "src/EXCLUSIVE WEDDING DEALS/Desert-Wedding/image/20-karishma-jhalani-ashwin-jain.jpg",
        thumbnail: "src/EXCLUSIVE WEDDING DEALS/Desert-Wedding/image/20-karishma-jhalani-ashwin-jain.jpg",
    },
    {
        original: "src/EXCLUSIVE WEDDING DEALS/Desert-Wedding/image/20.jpg",
        thumbnail: "src/EXCLUSIVE WEDDING DEALS/Desert-Wedding/image/20.jpg",
    },
    {
        original: "src/EXCLUSIVE WEDDING DEALS/Desert-Wedding/image/24-karishma-jhalani-ashwin-jain.jpg",
        thumbnail: "src/EXCLUSIVE WEDDING DEALS/Desert-Wedding/image/24-karishma-jhalani-ashwin-jain.jpg",
    },
    {
        original: "src/EXCLUSIVE WEDDING DEALS/Desert-Wedding/image/28-karishma-jhalani-ashwin-jain.jpg",
        thumbnail: "src/EXCLUSIVE WEDDING DEALS/Desert-Wedding/image/28-karishma-jhalani-ashwin-jain.jpg",
    },
];

function Desert() {

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
            <div className="Wedecore-Desert">
                <div className="position-Desert">
                    <h1 style={{ fontSize: "35px", color: "rgb(254,174,163)", textShadow: "0px 0px 2px rgba(255,255,255,0.6)" }}>Desert Wedding</h1>
                    <h4 style={{ fontSize: "20px", color: "white" }}> <Link className='link' style={{ color: "white" }} to="/"> Home</Link> / Desert Wedding</h4>
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

                            <h4 style={{ backgroundColor: "rgb(254, 174, 163)", textAlign: "center", padding: "1%", borderRadius: "10px" }}>Wedding Services</h4>

                            <div class="list-group">

                                <a href="complete-wedding-planning" class="list-group-item" style={{ width: "300px" }}>Complete Wedding Planning</a>

                                <a href="partial-wedding-planning" class="list-group-item" style={{ width: "300px" }}>Partial Wedding Planning</a>

                                <a href="luxury-wedding-planners-in-delhi" class="list-group-item" style={{ width: "300px" }}>Luxury Wedding Planners</a>

                                <a href="wedding-organizers-in-delhi" class="list-group-item" style={{ width: "300px" }}>Wedding Organizers</a>

                                <a href="wedding-photographers" class="list-group-item" style={{ width: "300px" }}>Wedding Photographers</a>

                                <a href="destination-wedding-planner" class="list-group-item" style={{ width: "300px" }}>Destination Wedding Planner</a>

                                <a href="theme-based-wedding-planning" class="list-group-item" style={{ width: "300px" }}>Theme-Based Wedding Planning</a>

                            </div>


                        </div>
                    </div>
                </div>
                <img src="https://www.v3events.in/images/title-icon.png" alt="" className='Testimonials-Icon' style={{ marginBottom: "0px", marginTop: "10px" }} />

                <div className='etca-Desert'>
                    <h3 style={{ textAlign: "center", marginRight: "11%", color: "black" }}>BEST DESERT WEDDING PLANNERS </h3>
                    <p className='peee-Desert' style={{ marginTop: "2%" }}>Marriages are “Made in Heaven'' and are executed by V3Events and Weddings. We are renowned as the top desert wedding planners in Delhi NCR and we specialise in delivering offbeat destination weddings you want but didn’t know you could have. We are here for making your wedding planning simple, stress-free and fun for your friends and family.</p>
                    <p className='peee-Desert'>You just need to choose your venue and discuss your wedding goals with us, then let us take your stress away and from there on leaving the execution and nitty-gritty to us. As the finest desert wedding planners in Delhi NCR, we specialise in delivering flawless yet adventurous and fun-filled desert weddings.</p>
                    <h3 style={{ textAlign: "left", marginLeft: "4%", color: "black" }}>COMPREHENSIVE DESERT WEDDING PACKAGES</h3>
                    <p className='peee-Desert' style={{ marginTop: "1%" }} >Planning a desert destination wedding need not be stressful, and our desert wedding packages are thoroughly designed for attaining a remarkable desert wedding experience. We have hand-picked a range of desert wedding destinations to suit all budgets and to meet all requirements. You just need to connect with us to put together your dream desert destination wedding in India.</p>
                    <p className='peee-Desert'>Whether you are looking for a wedding planner to simply lend a helping hand, or perform the whole desert wedding planning, The team of wedding planners at V3Events and Weddings will help take the edge off that wedding planning-related stress. Let us take care of the accommodation, decoration, menu, transport, logistics and the entire event management efficiently. Consult and hire us and let us give your wedding the WOW factor.</p>
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

export default Desert