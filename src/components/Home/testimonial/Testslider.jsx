import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import person1 from '../../../assets/people1.jpg'
import person2 from '../../../assets/people2.jpg'
import person3 from '../../../assets/people3.jpg'


const Testslider = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <Slider {...settings} className="slider">
      <div className="testi rounded-3">
        <p style={{textAlign:'justify'}} className='text-light'><i class="fa-solid fa-quote-left" style={{color:'gold'}}></i>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus deserunt, autem molestiae reprehenderit quam laudantium error praesentium quis facilis. Qui at corporis officiis aliquam rem quos, omnis ipsa explicabo quo<i class="fa-solid fa-quote-right" style={{color:'gold'}}></i></p>
        <div className='d-flex align-items-center gap-3'>
            <img src={person1} alt='person' className='w-50 h-50 rounded-2'/>
            <div>
                <h5 className='text-light'>John Richard</h5>
                <p style={{color:"gold"}} >Customer</p>
            </div>
        </div>
      </div>
      <div className="testi rounded-3">
        <p style={{textAlign:'justify'}} className='text-light'><i class="fa-solid fa-quote-left" style={{color:'gold'}}></i> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus deserunt, autem molestiae reprehenderit quam laudantium error praesentium quis facilis. Qui at corporis officiis aliquam rem quos, omnis ipsa explicabo quo <i class="fa-solid fa-quote-right" style={{color:'gold'}}></i></p>
        <div className='d-flex align-items-center gap-3'>
            <img src={person2} alt='person' className='w-50 h-50 rounded-2'/>
            <div>
                <h5 className='text-light'>Cleo Daisy</h5>
                <p style={{color:"gold"}} >Customer</p>
            </div>
        </div>
      </div>
      <div className="testi rounded-3">
        <p style={{textAlign:'justify'}} className='text-light'><i class="fa-solid fa-quote-left" style={{color:'gold'}}></i> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus deserunt, autem molestiae reprehenderit quam laudantium error praesentium quis facilis. Qui at corporis officiis aliquam rem quos, omnis ipsa explicabo quo <i class="fa-solid fa-quote-right" style={{color:'gold'}}></i></p>
        <div className='d-flex align-items-center gap-3'>
            <img src={person3} alt='person' className='w-50 h-50 rounded-2'/>
            <div>
                <h5 className='text-light'>Joe Johnson</h5>
                <p style={{color:"gold"}} >Customer</p>
            </div>
        </div>
      </div>
      <div className="testi rounded-3">
        <p style={{textAlign:'justify'}} className='text-light'><i class="fa-solid fa-quote-left" style={{color:'gold'}}></i> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus deserunt, autem molestiae reprehenderit quam laudantium error praesentium quis facilis. Qui at corporis officiis aliquam rem quos, omnis ipsa explicabo quo <i class="fa-solid fa-quote-right" style={{color:'gold'}}></i></p>
        <div className='d-flex align-items-center gap-3'>
            <img src={person1} alt='person' className='w-50 h-50 rounded-2'/>
            <div>
                <h5 className='text-light'>John Richard</h5>
                <p style={{color:"gold"}} >Customer</p>
            </div>
        </div>
      </div>
      <div className="testi rounded-3">
        <p style={{textAlign:'justify'}} className='text-light'><i class="fa-solid fa-quote-left" style={{color:'gold'}}></i> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus deserunt, autem molestiae reprehenderit quam laudantium error praesentium quis facilis. Qui at corporis officiis aliquam rem quos, omnis ipsa explicabo quo <i class="fa-solid fa-quote-right" style={{color:'gold'}}></i></p>
        <div className='d-flex align-items-center gap-3'>
            <img src={person2} alt='person' className='w-50 h-50 rounded-2'/>
            <div>
                <h5 className='text-light'>Cleo Daisy</h5>
                <p style={{color:"gold"}} >Customer</p>
            </div>
        </div>
      </div>
      <div className="testi rounded-3">
        <p style={{textAlign:'justify'}} className='text-light'><i class="fa-solid fa-quote-left" style={{color:'gold'}}></i> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus deserunt, autem molestiae reprehenderit quam laudantium error praesentium quis facilis. Qui at corporis officiis aliquam rem quos, omnis ipsa explicabo quo <i class="fa-solid fa-quote-right" style={{color:'gold'}}></i></p>
        <div className='d-flex align-items-center gap-3'>
            <img src={person3} alt='person' className='w-50 h-50 rounded-2'/>
            <div>
                <h5 className='text-light'>Joe Johnson</h5>
                <p style={{color:"gold"}} >Customer</p>
            </div>
        </div>
      </div>
      <div className="testi rounded-3">
        <p style={{textAlign:'justify'}} className='text-light'><i class="fa-solid fa-quote-left" style={{color:'gold'}}></i> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus deserunt, autem molestiae reprehenderit quam laudantium error praesentium quis facilis. Qui at corporis officiis aliquam rem quos, omnis ipsa explicabo quo <i class="fa-solid fa-quote-right" style={{color:'gold'}}></i></p>
        <div className='d-flex align-items-center gap-3'>
            <img src={person1} alt='person' className='w-50 h-50 rounded-2'/>
            <div>
                <h5 className='text-light'>John Richard</h5>
                <p style={{color:"gold"}} >Customer</p>
            </div>
        </div>
      </div>
      <div className="testi rounded-3">
        <p style={{textAlign:'justify'}} className='text-light'><i class="fa-solid fa-quote-left" style={{color:'gold'}}></i> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus deserunt, autem molestiae reprehenderit quam laudantium error praesentium quis facilis. Qui at corporis officiis aliquam rem quos, omnis ipsa explicabo quo <i class="fa-solid fa-quote-right" style={{color:'gold'}}></i></p>
        <div className='d-flex align-items-center gap-3'>
            <img src={person2} alt='person' className='w-50 h-50 rounded-2'/>
            <div>
                <h5 className='text-light'>Cleo Daisy</h5>
                <p style={{color:"gold"}} >Customer</p>
            </div>
        </div>
      </div>
      <div className="testi rounded-3">
        <p style={{textAlign:'justify'}} className='text-light'><i class="fa-solid fa-quote-left" style={{color:'gold'}}></i> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus deserunt, autem molestiae reprehenderit quam laudantium error praesentium quis facilis. Qui at corporis officiis aliquam rem quos, omnis ipsa explicabo quo <i class="fa-solid fa-quote-right" style={{color:'gold'}}></i></p>
        <div className='d-flex align-items-center gap-3'>
            <img src={person3} alt='person' className='w-50 h-50 rounded-2'/>
            <div>
                <h5 className='text-light'>Joe Johnson</h5>
                <p style={{color:"gold"}} >Customer</p>
            </div>
        </div>
      </div>
    </Slider>
  )
}

export default Testslider
