export interface IBerthLayout {
    rows: number;
    columns: number;
    aisle: number;
    seatType: string;
    door: { [key: number]: string };
    exceptionRows?: {
        [key: number]: number[];
    };
    noWindowAt: { L: number[]; R: number[] };
    tyreAt: number[];
}

export interface ILayout {
    lowerBerth: IBerthLayout;
    upperBerth?: IBerthLayout;
}

export interface ILayoutConfig {
    [key: string]: ILayout;
}
