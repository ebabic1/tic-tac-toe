import { useEffect, useState } from "react";
import "./App.css";
import { WINNING_LINES } from "./constants";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import GameOver from "./components/GameOver";

const App = () => {
  const [activePlayer, setActivePlayer] = useState("X");
  const [boardValues, setBoardValues] = useState(Array(9).fill(null));
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState({
    X: 0,
    O: 0,
    Draws: 0,
  });

  const handleClick = (index) => {
    if (boardValues[index] || gameOver) return;
    const boardValuesCopy = [...boardValues];
    boardValuesCopy[index] = activePlayer;
    setBoardValues(boardValuesCopy);
    setActivePlayer(activePlayer === "X" ? "O" : "X");
  };
  const checkWinner = () => {
    let userWon = null;
    const hasWinner = WINNING_LINES.some((line) => {
      const [a, b, c] = line;
      if (
        boardValues[a] &&
        boardValues[a] === boardValues[b] &&
        boardValues[b] === boardValues[c]
      ) {
        userWon = boardValues[a];
        return true;
      }
      return false;
    });
    const allFieldsFilled = !boardValues.some((value) => !value);
    if (hasWinner) {
      setGameOver(true);
      setWinner(userWon);
      const scoreCopy = { ...score };
      scoreCopy[userWon]++;
      setScore(scoreCopy);
    } else if (allFieldsFilled) {
      setGameOver(true);
      const scoreCopy = { ...score };
      scoreCopy["Draws"]++;
      setScore(scoreCopy);
    }
  };
  const handleReplay = () => {
    setActivePlayer("X");
    setBoardValues(Array(9).fill(null));
    setGameOver(false);
    setWinner(null);
  };
  useEffect(() => {
    checkWinner();
  }, [boardValues]);

  return (
    <div className="App">
      <div className="App-header">
        <h3>Tic tac toe</h3>
        <ScoreBoard score={score}></ScoreBoard>
        <Board boardValues={boardValues} handleClick={handleClick} />
        <GameOver
          gameOver={gameOver}
          winner={winner}
          handleReplay={handleReplay}
        ></GameOver>
      </div>
    </div>
  );
};

export default App;
