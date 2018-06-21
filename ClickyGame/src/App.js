import React, { Component } from 'react';
import NavBar from "./component/Wrapper";
import Image from "./component";
import Wrapper from "./component";
import logo from './logo.svg';
import './App.css';

class App extends Component {
    class App extends React.Component {
    state = {
        flowers:flowers,
        currentScore:0,
        highScore:0,
        gameMessage:'Click any picture to start the game!',
        status:0
    };

    shuffle = (f) => {
        for (let i = f.length - 1; f > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [f[i], f[j]] = [f[j], f[i]];
        }
        return f;
    }

    handleClickedFlower = (id) => {
        let newFlower = this.state.flowers;
        const checkFlower = newFlowers.indexOf(newFlowers.find(flower => flower.id === id));
        if((newFlowers[checkFlower].touched === 0) && (this.state.status === 0))
        {
            newFlowers[checkFlower].checkGoodBad = "card is Good";
            newFlowers[checkFlower].clicked = 1;
            newFlower[checkFlower].checkGoodBad = "";
            this.shuffle(newFlowers);
            this.setState({flowers:newFlowers});
            this.handleCurrentScore();
        }
        else if (this.state.status === 0)
        {
            newFlowers[checkFlower].checkGoodBad = "card is Bad";
            this.setState({status:1});
            this.youLose();
        }

    }

    handleHighScore = (score) => {
        const newHighScore = score;
        if(score > this.state.highScore)
            this.setState({highScore:newHighScore});
        if(score === 12){
            this.setState({status:1});
            this.youWin()
        }
    }

    handleCurrentScore = () => {s
        const newScore = this.state.currentScore + 1;
        this.setState({currentScore:newScore});
        this.handleHighScore(newScore);
    }

    resetFlowers = () => {
        let newFlowers = this.state.flowers;
        newFlower.forEach(function(item,index){
            item.clicked = 0;
            item.goodBad = "";
        });
        this.setState({flowers:newFlowers});
    }

    resetGame = () => {
        this.setState({currentScore:0});
        this.setState({status:0})
        this.setState({gameText:"Click a picture to start the game!"})
        this.resetFlowers();
    }

    youLose = () => {
        this.setState({gameText:"You Lose! (Try again and reset)"});
    }

    youWin = () => {
        this.setState({gameText:"You Win! (Play Again and reset)"});
    }

}

render() {
    return (
        <div>
            <NavBar
                highScore = {this.state.highScore}
                currentScore = {this.state.currentScore}
                resetGame = {this.resetGame}
                gameMessage = {this.state.gameText}
            />
            <h2 className="title">Tropical Flwoer Clicky Game!</h2>
            <h4> className="title">Click on a flower to get points, but try not to click it twice!</h4>

            <Wrapper>
                {this.state.flowers.map(flower =>(
                    <Image
                        handleClickedFlower ={this.handleClickedFlower}
                        key={flower.id}}
                        id={flower.id}
                        image={flower.image}
                        />
                ))}
                <Wrapper>
                </div>
        );


export default App;
