import React from 'react'
import './Footer.css'
import { Container,Row } from 'react-bootstrap'
import logo from '../../../assets/logo.png'
import FooterPart from '../../data.json'


const FooterEnd = () => {
  return (
    <div className='text-center'>
       <p className='text-primary'>Travel Destiny, Designed By Keerthan Shetty <span className='text-danger'><i class="fa-solid fa-heart"></i></span></p>
    </div>
  )
}


const Footer = () => {
  return (
    <div className='footer pt-4 pb-4'>
        <Container>
            <Row>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="footer1">
                        <img src={logo} alt='logo' className='w-25' />
                        <p className='pt-3 text-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, expedita.</p>
                        <div className="social-icon d-flex align-items-center gap-2">
                            <p><i class="fa-brands fa-instagram"></i></p>
                            <p><i class="fa-brands fa-x-twitter"></i></p>
                            <p><i class="fa-brands fa-youtube"></i></p>
                            <p><i class="fa-brands fa-linkedin"></i></p>
                            <p><i class="fa-brands fa-facebook"></i></p>
                        </div>
                    </div>
                </div>
                {FooterPart[" footer"].map((value, index) => (
                    <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                        <div className='footer2 '>
                            <h5 className='text-light pb-3'>{value.title}</h5>
                            <ul className='pb-4'>
                                {value.content.map((item, index) => (
                                    <li key={index} className='text-primary'>{item}</li>
                                ))}
                            </ul> 
                        </div>
                    </div>  
                ))}
                <br/><br/>
                <hr/>
                <FooterEnd/>
            </Row>
        </Container>
    </div>
  )
}

export default Footer
