import React, { useState } from 'react';
import './App.css';
import { Item } from './types';
import AttemptsCounter from './Components/AttemptsCounter.tsx';
import GameBoard from './Components/GameBoard.tsx';
import ResetButton from './Components/ResetButton.tsx';

const createSquares = (): Item[] => {
    const squares = Array(36).fill(null).map(() => ({ hasItem: false, clicked: false }));
    const randomIndex = Math.floor(Math.random() * 36);
    squares[randomIndex].hasItem = true;
    return squares;
};

const App: React.FC = () => {
    const [items, setItems] = useState<Item[]>(createSquares());
    const [attempts, setAttempts] = useState<number>(0);
    const [gameOver, setGameOver] = useState<boolean>(false);

    const clickHandle = (index: number) => {
        if (items[index].clicked || gameOver) return;

        const newItems = [...items];
        newItems[index].clicked = true;
        setAttempts(attempts + 1);

        if (newItems[index].hasItem) {
            setItems(newItems);
            setGameOver(true);

            setTimeout(() => {
                alert('Congrats! You found the diamond!');
            }, 100);
        } else {
            setItems(newItems);
        }
    };

    const resetGame = () => {
        setItems(createSquares());
        setAttempts(0);
        setGameOver(false);
    };

    return (
        <div className="app">
            <h1>Find the hidden diamond!</h1>
            <GameBoard items={items} onCellClick={clickHandle} />
            <AttemptsCounter attempts={attempts} />
            <ResetButton onReset={resetGame} />
        </div>
    );
};

export default App;
