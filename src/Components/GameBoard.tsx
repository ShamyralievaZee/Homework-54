import React from 'react';
import {GameBoardProps} from '../types';
import Cell from './Cell.tsx';

const GameBoard: React.FC<GameBoardProps> = ({ items, onCellClick }) => {
    return (
        <div className="game-board">
            {items.map((cell, index) => (
                <Cell key={index} cell={cell} index={index} onClick={onCellClick} />
            ))}
        </div>
    );
};

export default GameBoard;