import React from 'react'
import { Container,Row } from 'react-bootstrap'
import Tag from '../../common/tags/Tag';
import Testslider from './Testslider';
import './Testimonial.css'

const Testimonial = () => {
    
  return (
    <div className=' testimonial pt-5 pb-5 d-none d-sm-block'>
        <Container>
            <Row>
            <Tag tag='testimonial' heading='our customer experience'/>
            <Testslider/>
            </Row>
        </Container>
    </div>
  )
}

export default Testimonial
