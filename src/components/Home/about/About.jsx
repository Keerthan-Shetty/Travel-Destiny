import React from 'react'
import './About.css'
import { Container,Row } from 'react-bootstrap'
import Female from '../../../assets/female-img.png'
import Tag from '../../common/tags/Tag'
import gallery from '../../data.json'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'


const About = () => {
  return (
    <div>
    <div className='about pt-4 pb-4'>
      <Container>
        <Row>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div className='content'>
                    <Tag tag='experience' heading='with all our experience, what we will serve you' />
                    <p className='text-success' style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus voluptatem possimus provident delectus natus ad ipsa nemo sapiente sunt eum hic consequuntur, fugit cupiditate cum dolores earum tenetur id temporibus.</p>
                    <div className='our d-flex pt-3'>
                        <div className='  d-flex flex-column justify-content-center align-items-center'>
                            <h5 className='bg-primary text-center'>12K+</h5>
                            <p className='text-primary'>Wide Trips</p>
                        </div>
                        <div className='px-5 d-flex flex-column justify-content-center align-items-center'>
                            <h5 className='bg-primary text-center'>3K+</h5>
                            <p className='text-primary'>Repeated Clients</p>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <h5 className='bg-primary text-center'>10+</h5>
                            <p className='text-primary'>Years Of Experience</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div className='content-img'>
                    <img src={Female} alt='female-img' className='w-100'/>
                </div>
            </div>
        </Row>
      </Container>
      </div>

    {/* gallery */}
    
        <div className='gallery pt-4 pb-4'>
            <Container>
                <Row>
            <Tag tag='gallery' heading='our most iconic places' />
                <div className="gallery1">
                    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3,1200:4,1400:4,1450:5}}>
                        <Masonry gutter='1.3rem'>
                            {gallery.galleries.map((value,index) => (
                                <div className='gallery-img' key={index} >
                                    <img src={value.gallery} className='rounded' alt='tourist-place' />
                                </div>
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default About
