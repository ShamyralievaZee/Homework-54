import React from 'react';
import {AttemptsCounterProps} from '../types';

const AttemptsCounter: React.FC<AttemptsCounterProps> = ({ attempts }) => {
    return <div className="attempts">Number of attempts: {attempts}</div>;
};

export default AttemptsCounter;
