import React from "react";
import Card from "./Card";
import Score from "./Score";
import Darlene from "../images/darlene.jpg"
import Angela from "../images/angela.jpg"
import Elliot from "../images/elliot.jpg"
import Mobley from "../images/mobley.jpg"
import MrRobot from "../images/mr-robot.jpg"
import Romero from "../images/romero.jpg"
import Trenton from "../images/trenton.jpg"
import WhiteRose from "../images/white-rose.jpg"

const Home = () => {

    const [click, setClick] = React.useState(0);
    const [clickedCards, setClickedCards] = React.useState([])
    const [score, setScore] = React.useState(0);
    const [topScore, setTopScore] = React.useState(0)

    const clickHandler = (e) => {
        if (clickedCards.includes(e.target.alt)) {
            setScore(0);
            setClickedCards([]);
            return;
        }
        setClickedCards(prevArray => {return [...prevArray, e.target.alt]})
        setClick(prevClick => prevClick + 1);
        setScore(prevScore => prevScore + 1);

    }

    if (score > topScore) {
        setTopScore(score);
    }

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const cardArray = [ <Card handleClick={clickHandler} id="1" img={Darlene} alt="Darlene" />,
    <Card handleClick={clickHandler} value="2" id="2" img={MrRobot} alt="Mr. Robot" />,
    <Card handleClick={clickHandler} id="3" img={Elliot} alt="Elliot" />,
    <Card handleClick={clickHandler} id="4" img={WhiteRose} alt="White Rose" />,
    <Card handleClick={clickHandler} id="5" img={Angela}  alt="Angela" />,
    <Card handleClick={clickHandler} id="6" img={Mobley} alt="Mobley" />,
    <Card handleClick={clickHandler} id="7" img={Trenton} alt="Trenton" />,
    <Card handleClick={clickHandler} id="8" img={Romero} alt="Romero" />]

    React.useEffect(() => {
        shuffleArray(cardArray) 
      }, [click]);




    shuffleArray(cardArray);
    return (
        <div>
        <Score score={score} topScore={topScore}/>
        <div className="container">
             {cardArray.map((card) => (
            card
      ))}
        </div>
        </div>
    )

}

export default Home;