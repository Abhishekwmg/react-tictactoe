import React, { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ turns, onSelectSquare, activePlayerSymbol }) => {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   const handleSelectSquare = (rowIndex, colIndex) => {
  //     setGameBoard((prevGameBoard) => {
  //       const updateBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updateBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       return updateBoard;
  //     });

  //     return onSelectSquare();
  //   };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
