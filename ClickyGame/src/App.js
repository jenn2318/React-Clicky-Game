//Imports for Components for React to work
import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import Image from "./components/Image";
import Wrapper from "./components/Wrapper";
import flowers from './flowers.json';
import './App.css';

class App extends Component {
    state = {
        flowers,
        currentScore:0,
        highScore:0,
        gameText:'Click any picture to start the game!',
        status:0
    };

    //This is the shuffle for loop

    shuffle = data => {
    let i = data.length - 1;
    while (i > 0) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = data[i];
    data[i] = data[j];
    data[j] = temp;
    i--;
}
return data;


    }

    //This code will handle when the flower picture is clicked....
    handleClickedFlower = (id) => {
        console.log(id, "handleClickedFlower");
        let newFlowers = [...this.state.flowers];
        const checkFlower = newFlowers.indexOf(newFlowers.find(flower => flower.id === id));
        console.log(newFlowers[checkFlower]);
        if(newFlowers[checkFlower].clicked === 0)
        {
            //console.log(newFlowers[checkFlower]);
            newFlowers[checkFlower].clicked = 1;

            this.setState({
                flowers:this.shuffle(newFlowers),
                currentScore: this.state.currentScore + 1,
                highScore: this.handleHighScore()
            });

            //this.handleCurrentScore();
        }
        else
        {
            //If a user clicks on the image more than once the score should be reset to 0
            //The state should reset to shuffle the flowers
            console.log("the click is wrong", this.state.flowers);


            this.setState({

                flowers: this.shuffle(flowers),
                currentScore: 0
            }, () => {console.log("state was updated", this.state.flowers) } )

        }

    }
//Code to let the user see their high score of every game
//It should check the high score versus the current score
//Return whichever score is higher

    handleHighScore  = () =>
{
    if (this.state.currentScore > this.state.highScore) {
        return this.state.currentScore
    }

   else  {
        return this.state.highScore
    }
}
//  //The user will see their current score
//     handleCurrentScore = () => {
//         const newScore = this.state.currentScore + 1;
//         this.setState({currentScore:newScore});
//         this.handleHighScore(newScore);
//     }
//    //This will reset the flowers in order
//     resetFlowers = () => {
//         let newFlowers = this.state.flowers;
//         newFlowers.forEach(function(item,index){
//             item.clicked = 0;
//             item.goodBad = "";
//         });
//         this.setState({flowers:newFlowers});
//     }
// //Reset the game to start over
//     resetGame = () => {
//         this.setState({currentScore:0});
//         this.setState({status:0})
//         this.setState({gameText:"Click a picture to start the game!"})
//         this.resetFlowers();
//     }
// //Loss Message
//     youLose = () => {
//         this.setState({gameText:"You Lose! (Try again and reset)"});
//     }
// //Win Message
//     youWin = () => {
//         this.setState({gameText:"You Win! (Play Again and reset)"});
//     }



    //Here we will React what to Render on the page
    render() {
        return (
            <div>
                <NavBar
                    highScore = {this.state.highScore}
                    currentScore = {this.state.currentScore}
                    //resetGame = {this.resetGame}
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
