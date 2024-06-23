import React from 'react'
import './AboutSection.css'
import About from '../Home/about/About'
import { Container, Row } from 'react-bootstrap'



const AboutSection = () => {
  return (
    <div>
      <div className="tour-back1">
      <Container>
            <Row>
              <h1>About - Page</h1>
            </Row>
          </Container>
      </div>
      <About/>
    </div>
  )
}

export default AboutSection
