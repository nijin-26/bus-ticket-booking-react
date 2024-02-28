import { IBerthLayout, ILayoutConfig } from './types';

export const layoutNames = {
    volvo25: 'volvo25',
};

// layoutConfig has the following parameters:
// rows: the number of rows in the bus
// columns: the number of seat column including the a column for aisle
// aisle: the column number of aisle
// seatType: this can be seater or sleeper
// door: the position of doors in a bus. In case the door is in driver cabin then specify the door position as 0.
// exceptionRows?: {rowNumber: number[]} if any particular row has a different arrangement then explicitly specify the row layout eg: [1,1,0,0,0]
// 1=> seat
// 0=> no seat
export const layoutConfig: ILayoutConfig = {
    [layoutNames.volvo25]: {
        lowerBerth: {
            rows: 12,
            columns: 5,
            aisle: 3,
            door: { 10: 'R' },
            seatType: 'seater',
        },
    },
};

//This method uses the layout config and creates a pattern of seats: [[1,1,0,1,1],[1,1,0,1,1]....]
export const berthLayoutProducer = (berthLayoutConfig: IBerthLayout) => {
    const berthLayout: number[][] = [];
    for (let i = 0; i < berthLayoutConfig.rows; i++) {
        if (
            berthLayoutConfig.exceptionRows &&
            Object.keys(berthLayoutConfig.exceptionRows).includes(String(i + 1))
        ) {
            berthLayout.push(berthLayoutConfig.exceptionRows[i + 1]);
        } else {
            const rowLayout = [];
            for (let j = 0; j < berthLayoutConfig.columns; j++) {
                if (j + 1 === berthLayoutConfig.aisle) {
                    rowLayout.push(0);
                } else if (
                    Object.keys(berthLayoutConfig.door).includes(String(i + 1))
                ) {
                    if (
                        (berthLayoutConfig.door[i + 1] === 'R' &&
                            j + 1 < berthLayoutConfig.aisle) ||
                        (berthLayoutConfig.door[i + 1] === 'L' &&
                            j + 1 > berthLayoutConfig.aisle)
                    ) {
                        rowLayout.push(0);
                    } else {
                        rowLayout.push(1);
                    }
                } else {
                    rowLayout.push(1);
                }
            }
            berthLayout.push(rowLayout);
        }
    }
    return berthLayout;
};
