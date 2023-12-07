const GameOver = ({ gameOver, winner, handleReplay }) => {
  return (
    gameOver && (
      <div className="game-over">
        <p>Game over</p>
        {winner ? (
          <p>
            The winner is: <b>{winner}</b>
          </p>
        ) : (
          <p>Its a draw!</p>
        )}
        <button className="replay-button" onClick={() => handleReplay()}>
          Play new game!
        </button>
      </div>
    )
  )
};
export default GameOver;