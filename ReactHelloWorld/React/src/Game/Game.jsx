import React from "react";
import Board from "./Board.jsx";
import "./Styles/styles.css";

class Game extends React.Component {
    render() {
        return (
            <div className="Game">
                <div className="game-board">
                    <Board />
                </div>
            </div>
        );
    }
}

export default Game;