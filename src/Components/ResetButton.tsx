import React from 'react';
import { ResetButtonProps } from '../types';

const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => {
    return <button onClick={onReset}>Reset Game</button>;
};

export default ResetButton;
