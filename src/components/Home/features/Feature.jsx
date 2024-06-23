import React from 'react'
import './feature.css'
import { Container } from 'react-bootstrap'
import FeatureCard from './FeatureCard'
import Tag from '../../common/tags/Tag'


const Feature = () => {
  return (
    <div className='features pt-5 pb-5'>
        <Container>
            <Tag tag="Explore" heading="Featured Locations" />
            <FeatureCard/>
        </Container>
    </div>
  )
}

export default Feature
