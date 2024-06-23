import React from 'react'
import Cards from '../../data.json'
import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'

const FeatureCard = () => {
  return (
    <div className='featurecard '>
      <Row>
      
        {Cards.featurecard.map((value,index)=>{
            const {id,image,tag,place,stay,rating,rating1,price} = value;
            return(
              <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='card mb-4 border-0 rounded' key={index}>
                <div className='cardimg'>
                  <img src={image} alt='location' />
                  <p className='text-light bg-success tag p-1'>{tag}</p>
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
        })}
      
      </Row>
    </div>

  )
}

export default FeatureCard
