import React from 'react'
import styled from 'styled-components'
import img from "../Images/Glasses.webp"

interface iProps{
    Days: number
    Hour: number
    Minute: number
    Seconds: number
    alt: string
    src: string
    text1: string
    text2: string
    text3: string
    text4: string
    text5: string
}

const BodyProps: React.FC<iProps> = ({Days, Hour, Minute, Seconds, alt, src, text1, text2, text3, text4, text5}) => {
  return (
    <div>
      <Container>
        <Wrapper>
        <Card>
            <SubCard>
            <Img src={src} alt={alt} />
            </SubCard>
            <SubCard2>
            <P>{text1}</P>
            <H4>{text2}</H4>
            <H5>{text3}</H5>
            <H6>{text5}</H6>
            </SubCard2>
        </Card>
        <Card2>
        <Day>
            {Days}Days: 
        </Day>
        <Hours>
            {Hour}Hour:
        </Hours>
        <Min>
            {Minute}Mins:
        </Min>
        <Second>
            {Seconds}secs
        </Second>
        </Card2>
        </Wrapper>
      </Container>
    </div>
  )
}

export default BodyProps;
const H4 = styled.h4``
const H6 = styled.h6``
const H5 = styled.h5``
const P = styled.p``

const Hours = styled.div`
margin-left: 5px;
margin-Right: 5px;
`
const Day = styled.div``
const Min = styled.div`
margin-Right: 5px;

`
const Second = styled.div``
const Img = styled.img`
    width: 100%;
    height: 100%;
    
`
const SubCard = styled.div`
    width: 48%;
    height: 100%;
    /* background-color: crimson; */
    display: flex;
    justify-content: center;
    align-items: center;
`
const SubCard2 = styled.div`
    width: 48%;
    height: 100%;
    flex-direction: column;
    /* background-color: grey; */
    display: flex;
    justify-content: center;
    h4, h5{
        margin: 0;
    }
    h5{
        text-decoration: line-through;
        color: grey;
    }
    h6{
        color: green;
    }
    /* align-items: center; */
`
const Card = styled.div`
    width: 100%;
    height: 85%;
    /* background-color: black; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Card2 = styled.div`
/* background-color: green; */
width: 100%;
height: 15%;
font-size: 14px;
font-weight: 800;
margin: 0;
   display: flex;
    /* justify-content: center; */
    align-items: center;
p{
    margin: 0;
}
`
const Wrapper = styled.div`
    width: 400px;
    height: 100%;
    background-color: white; 
`
const Container = styled.div`
    width: 100%;
    margin-top: 10px;
    height: 30%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`
