import React from 'react'
import styled from 'styled-components'
import img1 from "../Images/PayMobile.jpg"
import img2 from "../Images/headerPic.jpg"
const Header = () => {
  return (
    <div>
      <Container>

      </Container>
    </div>
  )
}

export default Header;
const Container = styled.div`
    width: 100%;
    height: 10vh;
    background-color: crimson;
    background-image: url(${img2});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 425px) {
    background-image: url(${img1});
    background-position: center;
    background-size: cover; 
    }
    @media screen and (max-width: 768px) {
    background-image: url(${img1});
    background-position: center;
    background-size: cover; 
    width: 100%;
    }
   
`
