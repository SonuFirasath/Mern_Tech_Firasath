import {useState} from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
  let [arr, setArr] = useState([]);
  let changeBlue = ()=>{
    setMoves((preMoves)=>{
        return {...preMoves,blue:preMoves.blue+1};
    });
    setArr((prevArr)=>{
        return [...arr," blue Moves"]
    })
  };

  let changeYellow = ()=>{
    setMoves((preMoves)=>{
        return {...preMoves,yellow:preMoves.yellow+1};
    });
  };

  let changeGreen = ()=>{
    setMoves((premoves)=>{
        return {...premoves, green:premoves.green+1};
    });
  };

  let changeRed = ()=>{
    setMoves((premoves)=>{
        return {...premoves, red:premoves.red + 1};
    });
  };

  return (
    <div>
      <p>Game begins!</p>
      <div className="board">
        <p>blue moves = {moves.blue} <br /> {arr}</p>
        <button style={{backgroundColor:"blue"}} onClick={changeBlue}>+1</button>
        <p>yellow moves = {moves.yellow} </p>
        <button style={{backgroundColor:"yellow",color:"black"}} onClick={changeYellow}>+1</button>
        <p>green moves = {moves.green} </p>
        <button style={{backgroundColor:"green"}} onClick={changeGreen}>+1</button>
        <p>red moves = {moves.red} </p>
        <button style={{backgroundColor:"red"}} onClick={changeRed}>+1</button>
      </div>
    </div>
  );
}
