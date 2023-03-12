import React from "react";
import Card from "./Card";
import Darlene from "../images/darlene.jpg"
import Angela from "../images/angela.jpg"
import Elliot from "../images/elliot.jpg"
import Mobley from "../images/mobley.jpg"
import MrRobot from "../images/mr-robot.jpg"
import Romero from "../images/romero.jpg"
import Trenton from "../images/trenton.jpg"
import WhiteRose from "../images/white-rose.jpg"

const Home = () => {
    return (
        <div className="container">
           <Card img={Darlene} alt="Darlene" />
           <Card img={MrRobot} alt="Mr. Robot" />
           <Card img={Elliot} alt="Elliot" />
           <Card img={WhiteRose} alt="White Rose" />
           <Card img={Angela}  alt="Angela" />
           <Card img={Mobley} alt="Mobley" />
           <Card img={Trenton} alt="Trenton" />
           <Card img={Romero} alt="Romero" />
        </div>
    )

}

export default Home;