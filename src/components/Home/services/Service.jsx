import React from 'react'
import './Service.css'
import { Container, Row } from 'react-bootstrap'
import services from '../../data.json'


const Service = () => {
  return (
    <div className='service'>
      <Container>
        <Row className='d-flex align-items-center'>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-content">
                <h1 className='text-success'>Our Services</h1>
                <h2 className='text-primary fw-bold'>What we offer you, our best services</h2>
              </div>  
            </div>
              {services.service.map((value,index)=>(
                <div className="col-lg-3 col-md-6 col-sm-12">
                <div className='service-box rounded' key={index}>
                  <div className='pb-3'>
                    <span dangerouslySetInnerHTML={{ __html: value.icon }}></span>
                  </div>
                  <h6 className='pb-3 text-success'>{value.content}</h6>
                  <p className='bg-success text-light p-2 rounded-pill fs-5'>{value['short-content']}</p>
                </div>
                </div>
              ))}  
            
        </Row>
      </Container>
    </div>
  )
}

export default Service
