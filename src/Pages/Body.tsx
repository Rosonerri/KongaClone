import React from 'react'
import styled from 'styled-components';
import BodyProps from './BodyProps';
import img from "../Images/Glasses.webp"
import img2 from "../Images/micro.webp"
import img3 from "../Images/Glasses.webp"
import img4 from "../Images/pass.webp"
import img5 from "../Images/watch.webp"

const Data = [
    {
        id: 1,
        Days: 4,
        Hour: 96,
        src: img,
        Minute: 5760,
        Seconds: 0,
        text1: "Spy Glasses with Camera",
        text2: "₦22,999",
        text3: "₦33,998",
        text4: "",
        text5: "+0 Sold"
    }
]
const Data2 = [
    {
        id: 1,
        Days: 4,
        Hour: 96,
        src: img,
        Minute: 5760,
        Seconds: 0,
        text1: "Spy Glasses with Camera",
        text2: "₦22,999",
        text3: "₦33,998",
        text4: "",
        text5: "+0 Sold"
    }
]
const Data3 = [
    {
        id: 1,
        Days: 4,
        Hour: 96,
        src: img,
        Minute: 5760,
        Seconds: 0,
        text1: "Spy Glasses with Camera",
        text2: "₦22,999",
        text3: "₦33,998",
        text4: "",
        text5: "+0 Sold"
    }
]
const Data4 = [
    {
        id: 1,
        Days: 4,
        Hour: 96,
        src: img,
        Minute: 5760,
        Seconds: 0,
        text1: "Spy Glasses with Camera",
        text2: "₦22,999",
        text3: "₦33,998",
        text4: "",
        text5: "+0 Sold"
    }
]
const Data5 = [
    {
        id: 1,
        Days: 4,
        Hour: 96,
        src: img,
        Minute: 5760,
        Seconds: 0,
        text1: "Spy Glasses with Camera",
        text2: "₦22,999",
        text3: "₦33,998",
        text4: "",
        text5: "+0 Sold"
    }
]


const Body = () => {
  return (
    <div>
      <Container>
        <Wrapper>
            <Card1>
            {Data.map((props)=>(
            <BodyProps key={props.id} text1={props.text1} text2={props.text2} text3={props.text3} text4={props.text4} text5={props.text5} Seconds={props.Seconds} Minute={props.Minute} Hour={props.Hour} Days={props.Days} src={img} alt={""}/>
            ))}
             {Data2.map((props)=>(
            <BodyProps key={props.id} text1={props.text1} text2={props.text2} text3={props.text3} text4={props.text4} text5={props.text5} Seconds={props.Seconds} Minute={props.Minute} Hour={props.Hour} Days={props.Days} src={img5} alt={""}/>
            ))}
             {Data3.map((props)=>(
            <BodyProps key={props.id} text1={props.text1} text2={props.text2} text3={props.text3} text4={props.text4} text5={props.text5} Seconds={props.Seconds} Minute={props.Minute} Hour={props.Hour} Days={props.Days} src={img4} alt={""}/>
            ))}
             {Data4.map((props)=>(
            <BodyProps key={props.id} text1={props.text1} text2={props.text2} text3={props.text3} text4={props.text4} text5={props.text5} Seconds={props.Seconds} Minute={props.Minute} Hour={props.Hour} Days={props.Days} src={img2} alt={""}/>
            ))}
             {Data5.map((props)=>(
            <BodyProps key={props.id} text1={props.text1} text2={props.text2} text3={props.text3} text4={props.text4} text5={props.text5} Seconds={props.Seconds} Minute={props.Minute} Hour={props.Hour} Days={props.Days} src={img3} alt={""}/>
            ))}
            </Card1>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Body
const Card1 = styled.div`
    width: 100%;
    height: 30%;
    /* background-color: crimson; */
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    @media screen and (min-width: 1024px){
        display: none;
    }
`
const Wrapper = styled.div`
    width: 95%;
    background-color: #E8E8E8;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* align-items: center; */
   
`
const Container = styled.div`
    width: 100%;
    min-height: 100%;
    background-color: white;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`
