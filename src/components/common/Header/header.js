import React, { useState } from 'react'
import './header.css'
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form, FormGroup, Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap';
import profilephoto from '../../../assets/profile2.png'


const Header = () => {

  const[customerName, setCustomerName] = useState('')
  const[show , setShow] = useState(false)
  const[form, setForm] = useState({
    username  : '',
    email     :'',
    phoneno   :''
  })

  const handleshow = () => setShow(true)
  const handleClose = () => setShow(false)

  const handleChange = (e) =>{
    const{ name, value } = e.target
    setForm({
      ...form,
      [name] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCustomerName(form.username)
    handleClose()
  }

  const handleLogout = () =>{
    setCustomerName('')
    setForm({
      username  : '',
      email     :'',
      phoneno   :''
    })
  }

  return (
    <div className='header'>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand><img src={logo} alt='logo' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink to='/'>Home</NavLink>
              <hr />
              <NavLink to='/about'>About</NavLink>
              <hr />
              <NavLink to='/tour'>Tour</NavLink>
              <hr />
            </Nav>
            <div className=' login'>
              {customerName? (
              <div className="profile-structure d-flex align-items-center">
                <div className='profile d-flex align-items-center'>
                  <img src={profilephoto} alt='profile' className='me-1' />
                  <span className="customer-name me-3 fw-bold text-primary fs-5">Welcome, {customerName}</span>
                </div>
                <button className="button" onClick={handleLogout}>Logout</button>
              </div>
              ):(
                <button className="button" onClick={handleshow}>Login</button>)
              }
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show = {show} onHide={handleClose} >
        <ModalHeader closeButton>
          <ModalTitle >Login details</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup className='inputbox mt-2'>
              <Form.Control type='text' name = 'username' value={form.username} onChange={handleChange} required/>
              <span className='hoverform'>Username</span>
            </FormGroup>
            <FormGroup className='inputbox mt-4'>
              <Form.Control type='text' name = 'email' value={form.email} onChange={handleChange} autoComplete='autocomplete' required/>
              <span className='hoverform'>E-mail</span>
            </FormGroup>
            <FormGroup className='inputbox mt-4'>
              <Form.Control type='tel' name = 'phoneno' className='phone' value={form.phoneno} onChange={handleChange} required/>
              <span className='hoverform'>Mobile</span>
            </FormGroup>
            <div className=' login mt-3'>
              <button type="submit" className="button">Login</button>
            </div>
          </Form>        
        </ModalBody>
      </Modal>
    </div>
  )
}

export default Header