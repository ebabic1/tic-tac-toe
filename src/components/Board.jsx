const Board = ({ boardValues, handleClick }) => {
  const BoardField = ({ value, onClick }) => (
    <div className="field" onClick={onClick}>
      {value}
    </div>
  );
  const renderField = (index) => (
    <BoardField value={boardValues[index]} onClick={() => handleClick(index)} />
  );

  return (
    <div className="board">
      <div className="row-1">
        {renderField(0)}
        {renderField(1)}
        {renderField(2)}
      </div>
      <div className="row-2">
        {renderField(3)}
        {renderField(4)}
        {renderField(5)}
      </div>
      <div className="row-3">
        {renderField(6)}
        {renderField(7)}
        {renderField(8)}
      </div>
    </div>
  );
};
export default Board;
