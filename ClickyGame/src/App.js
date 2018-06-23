//Imports for Components for React to work
import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import Image from "./components/Image";
import Wrapper from "./components/Wrapper";
import flowers from './flowers.json';
import './App.css';

class App extends Component {
    state = {
        flowers:flowers,
        currentScore:0,
        highScore:0,
        gameText:'Click any picture to start the game!',
        status:0
    };

    //This is the shuffle for loop
    shuffle = (f) => {
        for (let i = f.length - 1; f > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [f[i], f[j]] = [f[j], f[i]];
        }
        return f;
    }

    //This code will handle when the flower picture is clicked....
    handleClickedFlower = (id) => {
        let newFlowers = this.state.flowers;
        const checkFlower = newFlowers.indexOf(newFlowers.find(flower => flower.id === id));
        if((newFlowers[checkFlower].touched === 0) && (this.state.status === 0))
        {
            newFlowers[checkFlower].checkGoodBad = "card is Good";
            newFlowers[checkFlower].clicked = 1;
            newFlowers[checkFlower].checkGoodBad = "";
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
//Code to let the user see their high score of every game
    handleHighScore = (score) => {
        const newHighScore = score;
        if(score > this.state.highScore)
            this.setState({highScore:newHighScore});
        if(score === 12){
            this.setState({status:1});
            this.youWin()
        }
    }
 //The user will see their current score
    handleCurrentScore = () => {
        const newScore = this.state.currentScore + 1;
        this.setState({currentScore:newScore});
        this.handleHighScore(newScore);
    }
   //This will reset the flowers in order
    resetFlowers = () => {
        let newFlowers = this.state.flowers;
        newFlowers.forEach(function(item,index){
            item.clicked = 0;
            item.goodBad = "";
        });
        this.setState({flowers:newFlowers});
    }
//Reset the game to start over
    resetGame = () => {
        this.setState({currentScore:0});
        this.setState({status:0})
        this.setState({gameText:"Click a picture to start the game!"})
        this.resetFlowers();
    }
//Loss Message
    youLose = () => {
        this.setState({gameText:"You Lose! (Try again and reset)"});
    }
//Win Message
    youWin = () => {
        this.setState({gameText:"You Win! (Play Again and reset)"});
    }



    //Here we will React what to Render on the page
    render() {
        return (
            <div>
                <NavBar
                    highScore = {this.state.highScore}
                    currentScore = {this.state.currentScore}
                    resetGame = {this.resetGame}
                    gameMessage = {this.state.gameText}
                />
                <h2 className="title">Tropical Flower Clicky Game!</h2>
                <h4 className="title">Click on a flower to get points, but try not to click it twice!</h4>

                <Wrapper>
                    {this.state.flowers.map(flower =>(
                        <Image
                            handleClickedFlower ={this.handleClickedFlower}
                            key={flower.id}
                            id={flower.id}
                            url={flower.url}
                            />
                    ))}
                </Wrapper>
                    </div>
            );

    }
}
export default App;
