// types.ts
export interface Item {
    hasItem: boolean;
    clicked: boolean;
}

export interface CellProps {
    cell: Item;
    index: number;
    onClick: (index: number) => void;
}

export interface GameBoardProps {
    items: Item[];
    onCellClick: (index: number) => void;
}

export interface AttemptsCounterProps {
    attempts: number;
}