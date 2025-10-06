import Player from "./components/Player";
import gameIcon from "../public/game-logo.png";

function App() {
  return (
    <main>
      <header>
        <img src={gameIcon} alt="game-icon" />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default App;
