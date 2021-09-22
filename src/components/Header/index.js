import React from 'react'
import { Col } from 'react-flexbox-grid'
import Button from '../Button'
import { Container, Nav } from './styles'

const Header = ({ description }) => {
  return (
    <>
      <Container>
        <Col xs={6}>
          <img
            src={'/iron-man-logo.svg'}
            alt="Logo"
            style={{ maxWidth: 400 }}
          />
        </Col>
        <Col xs={6}>
          <Nav>
            <a href="/">Sign In</a>
            <Button>Sign Up</Button>
          </Nav>
        </Col>
      </Container>
    </>
  )
}

export default Header
