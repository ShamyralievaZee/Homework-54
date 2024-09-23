import React from 'react';
import { CellProps } from '../types';

const Cell: React.FC<CellProps> = ({ cell, index, onClick }) => {
    return (
        <div
            className={`cell ${cell.clicked ? 'clicked' : ''} ${cell.clicked && cell.hasItem ? 'has-item' : ''}`}
            onClick={() => onClick(index)}
        >
            {cell.clicked && cell.hasItem ? '💎' : ''}
        </div>
    );
};

export default Cell;
