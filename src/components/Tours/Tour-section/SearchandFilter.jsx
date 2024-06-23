import React, { useState } from 'react'
import './SearchandFilter.css'
import optionData from '../../data.json'
import Cardsearch from '../../data.json'
import { Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Tag from '../../common/tags/Tag'
import cryingemoji from '../../../assets/sobbing-emoji.png'


const SearchandFilter= () => {

  const[location, setLocation] = useState('')
  const[filteredCards, setFiltaredCards] = useState(Cardsearch.findcard)

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = Cardsearch.findcard.filter(card => {
      return(
        (location ? card.place.toLowerCase().includes(location.toLowerCase()):true)
      )
    })
    setFiltaredCards(filtered)
  }

  return (
    <div>
    <div className='searchbar'>
      <Container>
        <Row>
          <Form onSubmit={handleSearch}>
            <div className='form'>
            <div className='col-md-3 col-sm-12'>
            <Form.Group className="mb-3 me-3" >
              <Form.Label>Location</Form.Label>
              <div className='box'>
                <Form.Control type="text" className='form-control' placeholder="Enter Loction" value={location} onChange={e => setLocation(e.target.value)} required/>
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
              <button type='submit' className='button1 bg-warning border-0  pt-2 pb-2 text-light rounded d-flex justify-content-center align-items-center'><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            </div>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
    <div className="tourcards">
    <div className='features pt-5 pb-5'>
        <Container>
            <Tag tag="Explore" heading="Featured Locations" />
            <div className='featurecard '>
      <Row>
      {filteredCards.length > 0 ? (          
        filteredCards.map((value,index)=>{
            const {id,image,tag,place,stay,rating,rating1,price} = value;
            return(
              <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='card mb-4 border-0 rounded' key={index}>
                <div className='cardimg'>
                  <img src={image} alt='location' />
                  <p className='text-light  tag p-1' style={{background : tag === "Featured" ? "green": "red"}}>{tag}</p>
                </div>
                <div className="card-body">
                   
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <h4 className='fw-bold'>{place}</h4>
                        <div>
                        <ul className='stars d-flex align-items-center'>
                          <li><span dangerouslySetInnerHTML={{ __html: rating }} style={{color:"gold"}}></span></li>
                          <li><span dangerouslySetInnerHTML={{ __html: rating }} style={{color:"gold"}}></span></li>
                          <li><span dangerouslySetInnerHTML={{ __html: rating }} style={{color:"gold"}}></span></li>
                          <li><span dangerouslySetInnerHTML={{ __html: rating }} style={{color:"gold"}}></span></li>
                          <li><span dangerouslySetInnerHTML={{ __html: rating1 }} style={{color:"gold"}}></span></li>
                          <li className='fw-bold'>4.5</li>
                        </ul>
                        </div>
                        {/* <h6><span dangerouslySetInnerHTML={{ __html: rating }} style={{color:"gold"}}></span></h6> */}
                    </div>
                    <p><span className='text-primary'><i class="fa-solid fa-bed"></i></span> {stay}</p>
                    <hr/>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex pt-2 align-items-center'>
                            <h5 className='bg-success text-light p-2 rounded-pill'>{price}</h5>
                            <span> /person</span>
                        </div>
                        <div>
                            <Link to={`/tour/${id}`} className='p-2 button bg-primary text-light rounded border-0'>Book Now</Link>
                        </div>
                    </div>
                </div>
                 </div>
            </div> 
            )
        })
      ) : (
        <div className='col-12 text-center'>
          <h1 className='text-danger fw-bolder'>Sorry, we cannot find your result......</h1>
          <img src={cryingemoji} alt='emoji' className='w-25'/>
        </div>
      )}
      </Row>
    </div>

        </Container>
    </div>
    </div>
    </div>
  )
}

export default SearchandFilter

