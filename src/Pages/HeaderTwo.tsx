import React from 'react'
import styled from 'styled-components';
import {AiOutlineArrowLeft, AiOutlineHome, AiOutlineShoppingCart} from "react-icons/ai"
import img from "../Images/Konga.jpg"
import img2 from "../Images/konga_health.webp"
import img3 from "../Images/new_konga_groceries.webp"
import img4 from "../Images/k_travels2.png"
import img5 from "../Images/drink.webp"
import img6 from "../Images/k_express2.webp"
import img7 from "../Images/k_travels2.png"

const HeaderTwo = () => {
  return (
    <div>
       <Container>
        <Wrapper>
        <Div1>
             <AiOutlineArrowLeft />
            <Img src={img} alt="" />
        </Div1>
        <Div2>
        <AiOutlineHome />
        <AiOutlineShoppingCart />
        </Div2>
        </Wrapper>
      </Container>
      <Container2>
        <Wrapper2>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
        </Wrapper2>
      </Container2>
    </div>
  )
}

export default HeaderTwo
const Container2 = styled.div`
width: 100%;
    height: 10vh;
    background-color: #F6F6F6;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 425px){
   display: none;
}
`

const Wrapper2 = styled.div`
     width: 65%;
    background-color: #F6F6F6;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        width: 15%;
    }
`
const Img = styled.img`
width: 60%;
@media screen and (max-width: 425px){
   width: 80%;
 
}
`

const Div1 = styled.div`
    font-size: 17px;
    font-weight: 700;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 10%;
    @media screen and (max-width: 425px){
   width: 28%;
   height: 100%;
   display: flex;
    justify-content: space-between;
    align-items: center;
 
}

`
const Div2 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 7%;
    color: white;
    font-size: 30px;
    @media screen and (max-width: 425px){
   width: 20%;
   height: 100%;
   display: flex;
    justify-content: space-between;
    align-items: center;
 
}

`
const Wrapper = styled.div`
    width: 95%;
    background-color: #E7067E;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-width: 768px){
   display: none;
 
}
`
const Container = styled.div`
    width: 100%;
    height: 10vh;
    background-color: #E7067E;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 1024px){
   display: none;
}
 @media screen and (min-width: 768px){
   display: none;
}

`
