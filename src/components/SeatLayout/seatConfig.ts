import { ISeat, ISeatStatus } from '../../api/types/trip';
import { IDeckLayout, ILayoutConfig } from './types';

export const layoutNames = {
    volvo25: 'volvo25',
};

export const layoutConfig: ILayoutConfig = {
    [layoutNames.volvo25]: {
        lowerDeck: {
            rows: 12,
            columns: 5,
            aisle: 3,
            door: { 9: 'R' },
            seatType: 'seater',
            exceptionRows: {10:[0,0,0,0,0]}
        },
    },
};

//This method uses the layout config and creates a pattern of seats: [[1,1,0,1,1],[1,1,0,1,1]....]
export const deckLayoutProducer = (deckLayoutConfig: IDeckLayout) => {
    const deckLayout: number[][] = [];
    for (let i = 0; i < deckLayoutConfig.rows; i++) {
        if (
            deckLayoutConfig.exceptionRows &&
            Object.keys(deckLayoutConfig.exceptionRows).includes(String(i + 1))
        ) {
            deckLayout.push(deckLayoutConfig.exceptionRows[i + 1]);
        } else {
            const rowLayout = [];
            for (let j = 0; j < deckLayoutConfig.columns; j++) {
                if (j + 1 === deckLayoutConfig.aisle) {
                    rowLayout.push(0);
                } else if (
                    Object.keys(deckLayoutConfig.door).includes(String(i + 1))
                ) {
                    if (
                        (deckLayoutConfig.door[i + 1] === 'R' &&
                            j + 1 < deckLayoutConfig.aisle) ||
                        (deckLayoutConfig.door[i + 1] === 'L' &&
                            j + 1 > deckLayoutConfig.aisle)
                    ) {
                        rowLayout.push(0);
                    } else {
                        rowLayout.push(1);
                    }
                } else {
                    rowLayout.push(1);
                }
            }
            deckLayout.push(rowLayout);
        }
    }
    return deckLayout;
};

//TODO: To be removed after API integration
export const seats: ISeat[] = [
    { seatNumber: 1, status: ISeatStatus.BOOKED },
    { seatNumber: 2, status: ISeatStatus.AVAILABLE },
    { seatNumber: 3, status: ISeatStatus.BOOKED },
    { seatNumber: 4, status: ISeatStatus.AVAILABLE },
    { seatNumber: 5, status: ISeatStatus.BOOKED },
    { seatNumber: 6, status: ISeatStatus.AVAILABLE },
    { seatNumber: 7, status: ISeatStatus.BOOKED },
    { seatNumber: 8, status: ISeatStatus.AVAILABLE },
    { seatNumber: 9, status: ISeatStatus.BOOKED },
    { seatNumber: 10, status: ISeatStatus.AVAILABLE },
    { seatNumber: 11, status: ISeatStatus.BOOKED },
    { seatNumber: 12, status: ISeatStatus.AVAILABLE },
    { seatNumber: 13, status: ISeatStatus.BOOKED },
    { seatNumber: 14, status: ISeatStatus.AVAILABLE },
    { seatNumber: 15, status: ISeatStatus.BOOKED },
    { seatNumber: 16, status: ISeatStatus.AVAILABLE },
    { seatNumber: 17, status: ISeatStatus.BOOKED },
    { seatNumber: 18, status: ISeatStatus.AVAILABLE },
    { seatNumber: 19, status: ISeatStatus.BOOKED },
    { seatNumber: 20, status: ISeatStatus.AVAILABLE },
    { seatNumber: 21, status: ISeatStatus.BOOKED },
    { seatNumber: 22, status: ISeatStatus.AVAILABLE },
    { seatNumber: 23, status: ISeatStatus.BOOKED },
    { seatNumber: 24, status: ISeatStatus.AVAILABLE },
    { seatNumber: 25, status: ISeatStatus.BOOKED },
    { seatNumber: 26, status: ISeatStatus.AVAILABLE },
    { seatNumber: 27, status: ISeatStatus.BOOKED },
    { seatNumber: 28, status: ISeatStatus.AVAILABLE },
    { seatNumber: 29, status: ISeatStatus.BOOKED },
    { seatNumber: 30, status: ISeatStatus.AVAILABLE },
    { seatNumber: 31, status: ISeatStatus.BOOKED },
    { seatNumber: 32, status: ISeatStatus.AVAILABLE },
    { seatNumber: 33, status: ISeatStatus.BOOKED },
    { seatNumber: 34, status: ISeatStatus.AVAILABLE },
    { seatNumber: 35, status: ISeatStatus.BOOKED },
    { seatNumber: 36, status: ISeatStatus.AVAILABLE },
    { seatNumber: 37, status: ISeatStatus.BOOKED },
    { seatNumber: 38, status: ISeatStatus.BOOKED },
    { seatNumber: 39, status: ISeatStatus.BOOKED },
    { seatNumber: 40, status: ISeatStatus.AVAILABLE },
    { seatNumber: 41, status: ISeatStatus.BOOKED },
    { seatNumber: 42, status: ISeatStatus.AVAILABLE },
    { seatNumber: 43, status: ISeatStatus.BOOKED },
    { seatNumber: 44, status: ISeatStatus.AVAILABLE },
    { seatNumber: 45, status: ISeatStatus.BOOKED },
    { seatNumber: 46, status: ISeatStatus.AVAILABLE },
];
