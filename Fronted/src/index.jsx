import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ScrollToTop from "react-scroll-to-top";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CountUp from 'react-countup';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import './index.css'

const Idx = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  var setting = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
  };
  const weddingServices = [
    {
      id: 1,
      Image: "https://www.v3events.in/images/color-icon/corporate.png",
      title: "Corporate Event Management",
      description: "MRSH Events can be your one-stop event management provider for corporate events. We offer comprehensive corporate event management and creative services, tailor-made precisely according to your needs.",
      // price: 500,
    },
    {
      id: 2,
      Image: "https://www.v3events.in/images/color-icon/seminar.png",
      title: "Seminars and Conferences",
      description: "We are one of the best event management companies in India for organising seminars and conferences. We are committed to serving the varied needs of the businesses and delivering the best outcomes meeting their expectations.",
      // price: 1000,
    },
    {
      id: 3,
      Image: "https://www.v3events.in/images/color-icon/brand.png",
      title: "Brand Promotion",
      description: "Seeking a smart event management company for your brand promotion related needs? MRSH Events is the perfect choice to fulfil such requirements efficiently. We have experienced professionals to deliver such services.",
      // price: 1000,
    },
    {
      id: 4,
      Image: "https://www.v3events.in/images/color-icon/meeting.png",
      title: "MICE",
      description: "MRSH Events is one of the most sought after event management companies for organising Meetings, Incentives, Conferences & Exhibitions (MICE) in India. Connect with us now for impeccable MICE management services.",
      // price: 1500,
    },
    {
      id: 5,
      Image: "https://www.v3events.in/images/color-icon/management.png",
      title: "Exhibition Management",
      description: "Make your exhibitions appealing and highly engaging platforms for your target audience with MRSH Events. Let us boost your business in a smart and efficient manner with our expertise.",

      // price: 800,

    },
    {
      id: 6,
      Image: "https://www.v3events.in/images/color-icon/artist.png",
      title: "Bollywood Artists",
      description: "MRSH Events is a well-reputed event management company for planning events involving Bollywood artists. We have numerous celebrities with us ready for collaboration for private events.",
    },
    {
      id: 7,
      Image: "https://www.v3events.in/images/color-icon/feshion.png",
      title: "Fashion Shows",
      description: "We have an incredible team of experienced and young talent who can glam up fashion shows beyond expectations. Connect with us now if you are looking for the best professionals for organising fashion shows.",
      // price: 800,

    },
    {
      id: 8,
      Image: "https://www.v3events.in/images/color-icon/vir.png",
      title: "Virtual Shows",
      description: "Make your business unaffected by the global challenges and geographical boundaries. Promote your products and/or services worldwide conveniently with our professional assistance in organising virtual events.",
      // price: 800,

    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      Image: "Image/victoria-priessnitz-JFAPl7brL6U-unsplash.jpg",
      profile: "Manager Of  Soham Technologies",
      review: "I and my family are incredibly happy with how the things turned out at the occasion of my marriage. Our trust in MRSH Events & Weddings turned not only worthy but incredible! The ambiance of the night that was created by all of the little touches, like the music, the champagne, the hosts and the waiters were just so special.",
    },
    {
      id: 2,
      Image: "https://www.brides.com/thmb/bBu61VEZeZMzPyf2S3lJL6nObpI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/indian-wedding-Blink-and-Co-Photography-abd9f18a06d84f42b76441f2ddba1434.jpg",
      name: "Rowi Singh ",
      profile: "Event Organiser ",
      review: "Having availed services from MRSH Events & Weddings recently, I admire the way they executed the event putting their expertise of Event Management skills. I would not hesitate to recommend them to work with any corporate company, organization or charity in the delivery of their event.",
    },
    {
      id: 3,
      Image: "Image/1-couple.jpg",
      name: "Rajveer patel",
      profile: "Freelance Photographer",
      review: `I You are nothing short of a miracle worker. , be extremely transparent and communicative about costs and expectations, and handle a myriad of complexities. Thank you so much for making it amazing. I cannot recommend you & your team enough. We trusted the right person with our special day.`,
    },
    {
      id: 4,
      Image: "https://shaadiwish.com/blog/wp-content/uploads/2021/01/cute-couple-poses.jpg",
      name: "Bhushan Patil",
      profile: "Social Media Influencer",
      review: `Wow wow! I can’t express in words how incredible the three day celebration was all thanks to you and your teams hard work! Thank you sooooo much! It was the ultimate dream. it was such a pleasure seeing you and getting to work with you for our special evening.  Thank you, thank you, thank you! Still beaming.`
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, testimonials.length]);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 1500,
  };

  var set = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  const slideStyles = {
    display: "flex",
    // padding: "30px",
    alignItems: "center",
    transition: "transform .3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)"
    }
  };
  ///////////////////////////////////////////////////////
  const imageStyles = {
    width: "99%",
    gap: "5px",
    height: "auto",
    alignItems: "center",
    borderRadius: "50px",
    marginBottom: "10px"
  };

  const imagestyles = {
    width: "318px",
    height: "220px",
    alignItems: "center",
    borderRadius: "25px",
    marginBottom: "10px"
  };
  ///////////////////////////////////////////////////////
  const titleStyles = {
    margin: 0,
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",

  };

  const textStyles = {
    margin: "10px 0",
    fontSize: "16px",
    // padding:"10px",
    lineHeight: 1.6,
    whiteSpace: "pre-line",
    opacity: ".8",
    textAlign: "center",
    color: "#555"
  };

  const wedding = [
    {
      id: 1,
      Image: "https://www.v3events.in/images/color-icon/guests.png",
      title: "Entertainment",
      description: "Event is the most efficient & direct tool for any communication. Entertainment in an event helps to leave a better .",
      // price: 500,
    },
    {
      id: 2,
      Image: "https://www.v3events.in/images/color-icon/wedding-rings.png",
      title: "Events",
      description: "We know how important any event that you do is to you whether in the corporate field or personally.",
      // price: 1000,
    },
    {
      id: 3,
      Image: "https://www.v3events.in/images/color-icon/wedding.png",
      title: "Wedding Venues",
      description: "The Wedding is a once-in-lifetime event and everyone wants a ravishing venue for that moment.",
      // price: 1000,
    },
    {
      id: 4,
      Image: "https://www.v3events.in/images/color-icon/location.png",
      title: "Hospitality",
      description: "Travel and Hotel arrangement is one of the major tensions while hosting any event. Therefore, to relieve you so that .",
      // price: 1500,
    },
    {
      id: 5,
      Image: "https://www.v3events.in/images/color-icon/cocktail.png",
      title: "Choreographers",
      description: "The MRSH Events & Entertainments is a leading event management company in India, catering to the needs..",
      // price: 800,

    },
    {
      id: 6,
      Image: "https://www.v3events.in/images/color-icon/garlands.png",
      title: "Bollywood Singers",
      description: "If you are planning to hold an event for your company or in your city with Bollywood Singers, then V3 Events ...",
      // price: 800,

    },
    {
      id: 7,
      Image: "https://www.v3events.in/images/color-icon/curtains.png",
      title: "International Artists",
      description: "MRSH Events & Entertainments is a well-reputed company which specializes in event management ...",
      // price: 800,

    },
    {
      id: 8,
      Image: "https://www.v3events.in/images/color-icon/balloons.png",
      title: "Anchors",
      description: "MRSH Events & Entertainments is having a dynamic and vibrant group of young professionals as Anchors weho...",
      // price: 800,

    },
  ];

  const TITLE = 'MRSH Wedding';

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
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


      <div className="slider-containr">
        <Slider {...settings}>
          <div className="slide">
            <img src="./Image/00_Caballero-Taddonio_Brett-Matthews-chuppah.jpg" alt="" srcset="" width={900} className="image-size" />
          </div>
          <div className="slide">
            <img src="./Image/f89f138855ed3b9b63629bc095fc75ac.jpg" alt="" srcset="" width={900} className="image-size" />
          </div>
          <div className="slide">
            <img src="./Image/maxresdefault.jpg" alt="" srcset="" width={900} className="image-size" />
          </div>
          <div className="slide">
            <img src="./Image/amish-thakkar-BEdxXAiRfRM-unsplash.jpg" alt="" srcset="" width={900} className="image-size" />
          </div>
          <div className="slide">
            <img src="./Image/event-management-companies.jpg" alt="" srcset="" width={900} className="image-size" />
          </div>
          <div className="slide">
            <img src="./Image/ibrahim-boran-m8YjB0noWiY-unsplash.jpg" alt="" srcset="" width={900} className="image-size" />
          </div>
        </Slider>
      </div>

      <div className="vzevents">
        <h1 style={{ textAlign: "center", fontSize: "25px" }}>WELCOME TO EVENTS -BEST WEDDING & EVENT MANAGEMENT COMPANY IN DELHI NCR</h1>
        <h2 style={{ textAlign: "center", fontSize: "20px", color: "" }}> Events & Weddings -Award Winning Wedding Planners & Event Management Company</h2>
        <img src="https://www.v3events.in/images/title-icon.png" alt="" className='Testimonials-Icon' />
        <div className="experiences">
          <div className="event-type">
            <h4>Experiences</h4>
            <h2><CountUp delay={1} enableScrollSpy={true} duration={6} decimals={0} start={0} end={20} />+</h2>
          </div>
          <div className="event-type">
            <h4>Corporate Events</h4>
            <h2><CountUp delay={1} enableScrollSpy={true} duration={6} decimals={0} start={0} end={300} />+</h2>
          </div>
          <div className="event-type">
            <h4>Wedding</h4>
            <h2><CountUp delay={1} enableScrollSpy={true} duration={6} decimals={0} start={0} end={400} />+</h2>
          </div>
          <div className="event-type">
            <h4>Musical Concerts</h4>
            <h2><CountUp delay={1} enableScrollSpy={true} duration={6} decimals={0} start={0} end={200} />+</h2>
          </div>
        </div>
      </div>

      <div className="Services" >
        <h2 style={{ fontSize: '50px', margin: "0px" }}>Event Management Services</h2>
        <img src="https://www.v3events.in/images/title-icon.png" alt="" className='Testimonials-Icon' />
        <ul className="Card" style={{ marginLeft: "10px" }} >
          {weddingServices.map((service) => (
            <div key={service.title} className="wedding-service-card" >
              <img src={service.Image} alt={service.title} className="image" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </ul>
      </div >

      <div className="slider-container">
        <h1 style={{ fontWeight: "bold" }} > We Plan Your Dream Destination Weddings and Events</h1>
        <h4 style={{ fontWeight: "normal", marginBottom: "10px" }}>Delivering with Passion</h4>
        <img src="https://www.v3events.in/images/title-icon.png" alt="" className='Testimonials-Icon' style={{ marginBottom: "20px" }} />
        <Slider {...setting}>
          <div style={slideStyles}>
            <img style={imageStyles} src="./Image/1.jpg" alt="" />
            <h1 style={titleStyles}>Luxury Wedding Planners</h1>
            <p style={textStyles}>
              MRSH Events & Wedding is one of the most preferred choices as luxury
              wedding planners in Delhi NCR ..
            </p>
            <div className="btn-holder">
              <button style={{ fontSize: '16px', margin: "0px", borderRadius: "5px" }}  ><Link className='link' style={{ color: "black" }} to="/Luxury">MORE INFO</Link></button>
            </div>
          </div>
          <div style={slideStyles}>
            <img style={imageStyles} src="./Image/4.jpg" alt="" />
            <h1 style={titleStyles}>Reality Show Performers</h1>
            <p style={textStyles}>
              MRSH Events & Entertainments is a multi-faceted company delivering
              services in the field..
            </p>
            <div className="btn-holder">
              <button style={{ fontSize: '16px', margin: "0px", borderRadius: "5px" }} > <Link className='link' style={{ color: "black" }} to="/Reality">MORE INFO</Link></button>
            </div>

          </div >
          <div style={slideStyles}>
            <img style={imageStyles} src="./Image/2.jpg" alt="" />
            <h1 style={titleStyles}>Wedding Organizers</h1>
            <p style={textStyles}>
              As a prominent Wedding Organizers in Delhi, we think outside the
              box at MRSH Events & Weddings ..
            </p>
            <div className="btn-holder">
              <button style={{ fontSize: '16px', margin: "0px", borderRadius: "5px" }} ><Link className='link' style={{ color: "black" }} to="/Wedding">MORE INFO</Link></button>
            </div>
          </div >
          <div style={slideStyles}>
            <img style={imageStyles} src="./Image/3.jpg" alt="" />
            <h1 style={titleStyles}>Celebrity Management</h1>
            <p style={textStyles}>
              MRSH Events & Entertainments is a multi-faceted company delivering
              services in the field..
            </p>
            <div className="btn-holder">
              <button style={{ fontSize: '16px', margin: "0px", borderRadius: "5px" }} ><Link className='link' style={{ color: "black" }} to="/Celebrity">MORE INFO</Link></button>
            </div>
          </div >
        </Slider >
      </div >

      <div style={{ textAlign: "center" }}  >
        <h1 style={{ fontWeight: "bold" }} > Events Services</h1>
        <img src="https://www.v3events.in/images/title-icon.png" alt="" className='Testimonials-Icon' style={{ marginBottom: "20px" }} />
        <ul className="Card" style={{ marginLeft: "10px" }} >
          {wedding.map((service) => (
            <div key={service.title} className="wedding-service-card" style={{ height: "300px" }} >
              <img src={service.Image} alt={service.title} className="image" />
              <h3 style={{ margin: "5%" }}>{service.title}</h3>
              <p>{service.description}</p>
              {/* <span>${service.price}/hr</span> */}
            </div>
          ))}
        </ul>
      </div >

      <div className="slider-containe">
        <h1 style={{ fontWeight: "bold" }} >Our Photo Gallery</h1>
        <img src="https://www.v3events.in/images/title-icon.png" alt="" className='Testimonials-Icon' style={{ marginBottom: "20px" }} />
        <Slider {...set}>
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

      <div className="testimonial-card">
        <h2>Testimonials </h2>
        <img src="https://www.v3events.in/images/title-icon.png" alt="" className='Testimonials-Icon' />
        <div className="testimonial-content" style={{ height: "450px", width: "1000px" }} >
          <img src={testimonials[currentIndex].Image} alt="" height={350} width={350} style={{ margin: "31px" }} />
          <div className='text'>
            <p style={{ textAlign: "justify" }}>{testimonials[currentIndex].review}</p>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: "0.5" }}>
              <p className="testimonial-author">- {testimonials[currentIndex].name}</p>
              <p className="testimonial-profile">{testimonials[currentIndex].profile}</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonial-card {
          width: 100%;
          height: 650px;
          display: flex;
          background-image: url(/Image/HD-wallpaper-plain-white-abstract.jpg);
          background-size: cover;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .testimonial-card h2 {
          font-size: 50px;
          font-weight: bold;
          color: #4a4a4a;
          margin: 0;
        }
        .testimonial-content {
          padding: 20px;
          box-sizing: border-box;
          display:  flex;
          border-radius: 10px;
          // border: 1px solid black;
          align-items: center;
          justify-content: space-between;
          margin-top: 32px
        }
        .testimonial-content p {
          // max-width: 80%
        }
        img {
          height: 350px;
          width: 500px;
        }
        .testimonial-author {
          text-align: right;
          font-family: "Roboto", sans-serif;
          font-size: 1.875rem;
          letter-spacing: 0.5px;
          font-weight: 500;
          margin-top: 8px;
        }
        .testimonial-profile{
          padding: 0px 0px 0px 19px;
          box-sizing: border-box;
          display:  flex;
          align-items: left;
        }
        .text{
          width: 450px;
          padding: 16px;
          font-size: 1.3rem;
          // border: 1px solid black;
          font-family: "Roboto", sans-serif;
          padding: 10px;
        }

        @media (min-width: 48em) {
          .testimonial-content {
            flex-direction: row;
          }
          .testimonial-content p {
            max-width: initial;
          }
          .testimonial-author {
            text-align: left;
          }
        }
      `}</style>
    </>
  );
};

export default Idx;