import React from "react"

export default class Game extends React.Component {
    /*
        1. determine what the state will store
        2. for each thing the state store, determine the data type
        3. ..and also the initial values
    */
    state = {
        board:[
            ['X','X','X'],
            ['','',''],
            ['','','']
        ]
    }

    renderSquares(row) {
        let rendered = [];
        for (let index=0; index < this.state.board[row].length; index++) {
            let square = this.state.board[row][index];
            let key = row*10+index;
            rendered.push(<td key={key} onClick={()=>{
                this.updateSquare(row,index)
            } }>
                    {square}
            </td>
            )
        }
        return rendered;
    }

    updateSquare = (row, index) => {
        let rowCopy = [ ...this.state.board[row] ];
        rowCopy[index] = 'X';

        let boardCopy = [...this.state.board];
        boardCopy[row] = rowCopy;

        this.setState({
            board:boardCopy
        })
    }

    render() {
        return <div>
            <h1>Tic Tat Toe</h1>
            <table>
                <tbody>
                    <tr>
                        {this.renderSquares(0)}
                    </tr>
                    <tr>
                        {this.renderSquares(1)}
                    </tr>
                    <tr>
                        {this.renderSquares(2)}
                    </tr>
                </tbody>


            </table>

        </div>

    }
}

