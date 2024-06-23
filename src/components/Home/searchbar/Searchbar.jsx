import React from 'react'
import './Searchbar.css'
import optionData from '../../data.json'
import { Link } from 'react-router-dom'
import { Container, Form, Row } from 'react-bootstrap'


const Searchbar = () => {

  return (
    <div className='searchbar'>
      <Container>
        <Row>
          <Form >
            <div className='form'>
            <div className='col-md-3 col-sm-12'>
            <Form.Group className="mb-3 me-3" >
              <Form.Label>Location</Form.Label>
              <div className='box'>
                <Form.Control type="text" className='form-control' placeholder="Enter Loction" required/>
                <span className='icon'><i class="fa-solid fa-location-dot"></i></span>
              </div>
            </Form.Group>
            </div>
            <div className='col-md-3 col-sm-12'>
            <Form.Group className="mb-3 me-3" >
              <Form.Label>Price</Form.Label>
              <div className='box'>
                <select  className='p-2 rounded' style={{width:"100%"}}>
                  <option value=" ">Select Price</option>
                  {optionData.Price.map((Rs,index) => (
                    <option key={index} value={Rs}>{Rs}</option>
                  ))}
                </select>
                <span className='icon-1'><i class="fa-solid fa-arrows-up-down-left-right"></i></span>
              </div>
            </Form.Group>
            </div>
            <div className='col-md-3 col-sm-12'>
            <Form.Group className="mb-3 me-3">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date"  className='form-control' placeholder="Pickup Date" required />
            </Form.Group>
            </div>
            <div className='col-md-3 col-sm-12'>
            <div className='button'>
              <Link to='/tour' type='submit' className='button1 bg-warning border-0  pt-2 pb-2 text-light rounded d-flex justify-content-center align-items-center'><i class="fa-solid fa-magnifying-glass"></i></Link>
            </div>
            </div>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  )
}

export default Searchbar
