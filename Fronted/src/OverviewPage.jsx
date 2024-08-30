import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted '
        // style={{ width: "1365px" }}
      >
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'
          // style={{ width: "1365px" }}
        />
        <section className='foter' >
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto'  >
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon icon="gem" className="me-3" />
                  Mrsh Wedding
                </h6>
                <p style={{ width: "300px" }}>
                  Events and Entertainments Pvt Ltd is passionate about crafting charmingly timeless and elegant luxurious weddings and events at stunning venues throughout the world. As the leading wedding designers and event organisers in Gujarat, we are renowned to create authentic experiences worth cherishing for a lifetime.
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4' >
                <h6 className='text-uppercase fw-bold mb-4' >Contact Us</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Opera Palace, Laskana - Kholwad Road, Kamrej - 394190,Gujarat
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
      </MDBFooter>
    </>
  );
}