import React from 'react'
import img from "../Images/Konga.jpg"
import {CiSearch} from "react-icons/ci"
import {BsFillQuestionCircleFill} from "react-icons/bs"
import {FaAngleDown} from "react-icons/fa"
import {AiOutlineShoppingCart} from "react-icons/ai"

import styled from "styled-components"
const Search = () => {
  return (
    <div>
      <Container>
        <Wrapper>
        <SearchBar>
            <input type="" placeholder='search for products, brands and category' />
            <CiSearch />
        </SearchBar>
        </Wrapper>
      </Container>
      <Container2>
        <Wrapper2>
            <img src={img} alt="" />
            <P>Store Locator</P>
            <P>Sell on Konga</P>
        <SearchBar2>
            <input type="" placeholder='search for products, brands and category' />
            <Search2>
            <CiSearch />
            </Search2>
        </SearchBar2>
        <Help>
        <BsFillQuestionCircleFill />
         <H5>Help</H5>
        <FaAngleDown />
        </Help>
        <P>Login/SignUp</P>
        <Button>
        <AiOutlineShoppingCart />
           <H6>
           My Cart
            </H6>
        <Zero>
            0
        </Zero>
        </Button>
        </Wrapper2>
      </Container2>
    </div>
  )
}

export default Search;
const H5 = styled.h5`
margin-left: 5px;
margin-right: 5px;
`

const Search2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: orange;
    height: 55px;
    width: 47px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    @media screen and (max-width: 1024px){
        height: 41px;
        width: 36px;
        font-size: 16px;

}
`

const H6 = styled.div`
   margin-left: 3px;
   margin-right: 3px;
   font-weight: 700;
   font-size: 13px;
   @media screen and (max-width: 1024px){
   font-size: 9px;
}
`
const Zero =  styled.div`
padding: 2px 4px;
background-color: white;
font-weight: 600;
color: black;
`
const Button =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 19px;
    background-color: #33B27B;
    color: white;
    border-radius: 5px;
    @media screen and (max-width: 1024px){
        padding: 7px 13px;
    
}
`
const SearchBar2 =  styled.div`
    input{
        width: 60%;
        height: 60%;
        background-color: white;
        font-size: 18px;
        font-weight: 700;
        border: none;
        border-radius: 10px;
        outline-width: 0;
    }
    border-radius: 8px;
    width: 40%;
    height: 70%;
    font-size: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    @media screen and (max-width: 1024px){
    font-size: 17px;

}
`
const Help = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    width: 80px;
    height: 77px;
    cursor: pointer;
    transition: all 350ms ease;
    &:hover{
    background-color: white;
    color: #ED017F;
    }
`

const P = styled.p`
    color: white;
     display: flex;
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
const Container2 = styled.div`
width: 100%;
    height: 10vh;
    background-color: #ED017F;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px){
   display: none;
}

`

const Wrapper2 = styled.div`
     width: 95%;
    background-color: #ED017F;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        width: 10%;
    }
   @media screen and (max-width: 1024px){
       img{
        width: 7%;
       }

} 
`
const SearchBar =  styled.div`
    input{
        width: 100%;
        height: 60%;
        background-color: #E8E8E8;
        font-size: 16px;
        border: none;
        outline-width: 0;
    }
    width: 100%;
    height: 70%;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E8E8E8;
`
const Wrapper =  styled.div`
    width: 95%;
    /* background-color: green; */
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
     @media screen and (min-width: 1024px){
        display: none;
    }
     
`
const Container =  styled.div`
 width: 100%;
    height: 10vh;
    background-color: white;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1440px){
    display: none;
 
}
 @media screen and (max-width: 2560px){
        display: none;
    }
`
