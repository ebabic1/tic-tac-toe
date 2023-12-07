const ScoreBoard = ({score}) => (
  <div className="tally">
    <p>X: {score.X}</p>
    <p>O: {score.O}</p>
    <p>Draws: {score.Draws}</p>
  </div>
);
export default ScoreBoard;