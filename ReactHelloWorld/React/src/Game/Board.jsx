import React from "react";
import Square from "./Square.jsx";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsCurrent: true
        };
    }

    renderSquare(i) {
        return <Square
                    value={this.state.squares[i]}
                    onClick={() => this.handleClick(i)}
                />;
    }

    handleClick(i) {
        if(this.state.squares[i] !== null) {
            return;
        }
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsCurrent ? "X" : "O";
        this.setState({
            squares: squares,
            xIsCurrent: !this.state.xIsCurrent
        });
    }

    render() {
        const status = 'Current player: ' + (this.state.xIsCurrent ? "X" : "O");

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default  Board;