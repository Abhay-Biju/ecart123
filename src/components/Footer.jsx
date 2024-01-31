import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <>
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 mt-5'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon className="me-3" />
                <Link to={'/'} style={{color: 'blueviolet', fontWeight:'bold', textDecoration:'none'}}><i class="fa-solid fa-truck-fast fa-beat-fade me-2"></i>E-Cart</Link>
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error provident, ex aperiam fugit sint vero ratione. In alias voluptatibus doloribus soluta libero pariatur commodi incidunt aspernatur voluptates magni, ratione itaque!
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 mt-5'>
              <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
                <Link to={'/'} className='d-flex align-items-center' style={{textDecoration:'none', color:'white'}}>Home</Link>
              </p>
              <p>
              <Link to={'/cart'} className='d-flex align-items-center' style={{textDecoration:'none', color:'white'}}>Cart</Link>
              </p>
              <p>
              <Link to={'/whishlist'} className='d-flex align-items-center' style={{textDecoration:'none', color:'white'}}>Whishlist</Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 mt-5'>
              <h6 className='text-uppercase fw-bold mb-4'>Guides</h6>
              <p>React</p>
              <p>React Bootstrap</p>
              <p>Bootswatch</p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 mt-5'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                ecart@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          E-Cart
        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default Footer