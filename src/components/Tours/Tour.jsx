import React from 'react'
import '../Tours/Tour-section/SearchandFilter.css'
import SearchandFilter from './Tour-section/SearchandFilter'
import { Container, Row } from 'react-bootstrap'


const Tour = () => {
  return (
    <div>
        <div className="tour-back">
          <Container>
            <Row>
              <h1>Tour - Page</h1>
            </Row>
          </Container>
          
        </div>
        <SearchandFilter/>
    </div>
  )
}

export default Tour
