import React from 'react'
import styled from 'styled-components';
import {RxHamburgerMenu} from "react-icons/rx"
const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
        <p>Amazing Deals Online</p>
        </Wrapper>
      </Container>
      <Container2>
        <Wrapper2>
        <Cate>
            All Categories
            <RxHamburgerMenu />
        </Cate>
        <P>Computers and Accesories</P>
        <P>Phones and Tablets</P>
        <P>Electronics</P>
        <P>Konga Fashion</P>
        <P>Home and Kitchen</P>
        <P>Baby, Kids and Toys</P>
        <P>Other Categories</P>
        </Wrapper2>
      </Container2>
    </div>
  )
}

export default Hero;
const P = styled.p`
    color: white;
     display: flex;
     font-size: 16px;
     font-weight: 800;
    justify-content: space-between;
    align-items: center;
    color: white;
    width: 105px;
    height: 77px;
    cursor: pointer;
    transition: all 350ms ease;
    &:hover{
    background-color: white;
    color: #ED017F;
    }
`
const Cate =  styled.div`
    color: white;
    font-size: 16px;
     font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 105px;
    height: 77px;
    cursor: pointer;
    transition: all 350ms ease;
    &:hover{
    background-color: white;
    color: #ED017F;
    }
`

const Wrapper2 =  styled.div`
    width: 95%;
    /* background-color: green; */
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
     
`
const Container2 =  styled.div`
 width: 100%;
    height: 10vh;
    background-color: #94004F;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
   @media screen and (max-width: 768px){
        display: none;
    }
`
const Wrapper = styled.div`
    width: 95%;
    background-color: white;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
   p{
    font-weight: 600;
    font-size: 19px;
   }
 

`
const Container = styled.div`
    width: 100%;
    height: 8vh;
    background-color: white;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 5px solid #E8E8E8;
    border-bottom: 5px solid #E8E8E8;
     @media screen and (min-width: 1024px){
        display: none;
    }
   
`
