import React from 'react';
import Board from './Board';
import calculateWinner from './Util'


class Game extends React.Component {
  constructor(){
    super();
    this.state = {
        square: Array(9).fill(null),
        xIsNext: true,
    };
  }
  handleClick(i) {
    const square = this.state.square;
      //base condition if button have some alloted value ya fir humara game khamtam ho gya hai
    if (calculateWinner(square) || square[i]) {
      return;
    }
      //click hone parjo bhi click huma hau matlab ith wala entity usko repsective value allot karo and square ko modifiy karo
    square[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
        square: square,
      xIsNext: !this.state.xIsNext,
    });
  }
  render() {
    const square = this.state.square;
    const winner = calculateWinner(square);
    let status;
    if(winner){
      status = 'Winner: ' + winner;
    }else{
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    
    return (
      <div className="game">
        <div >{ status }</div>
        <div className="game-board">
          <Board squares={square} onClick={(i)=>this.handleClick(i)}/>
        <div>Task left: undo button + restart button + css</div>
        </div>
      </div>
    );
  }
}
export default Game;

