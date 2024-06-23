import React from 'react'
import './main.css'
import { Container ,Row } from 'react-bootstrap'
import video1 from '../../../assets/videos/video1.mp4'
import video2 from '../../../assets/videos/video2.mp4'
import video3 from '../../../assets/videos/video3.mp4'
import earth from '../../../assets/earth-icon.png'

const Main = () => {
  return (
    <div className='main'>
      <Container>
        <Row className='d-flex justify-content-center align-items-center'>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="main-content">
              <div className='label d-flex align-items-center mb-4'>
                <p>World's Best Travel Partner</p>
                <img src={earth} alt='earth' width={80} />
              </div>
              <h1 className='fw-bold mb-4' style={{textAlign:'justify'}}>Travel To Your Dream Destiny And Create <span style={{color:'#6A5ACD'}}>Memories.</span></h1>
              <p className='text-success text'>Travelling is an experience that can teach us so many things that you cannot possibly learn while living at home. Firstly, it teaches you how to make new friends. The world is full of people who love interacting. You get to make friends when you travel to new places and spend quality time with them.</p>
            </div> 
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="videos d-flex justify-content-center align-items-center">
              <video autoPlay muted loop>
                <source  src={video1} type="video/mp4" />
              </video>
              <video className='vid-1' autoPlay muted loop>
                <source  src={video2} type="video/mp4" />
              </video>
              <video className='vid-2' autoPlay muted loop>
                <source src={video3} type="video/mp4" />
              </video>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Main
