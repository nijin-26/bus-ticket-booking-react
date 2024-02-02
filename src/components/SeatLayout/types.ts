export interface IDeckLayout {
    rows: number;
    columns: number;
    aisle: number;
    seatType: string;
    door: { [key: number]: string };
    exceptionRows?: {
        [key: number]: number[];
    };
}

export interface ILayout {
    lowerDeck: IDeckLayout;
    upperDeck?: IDeckLayout;
}

export interface ILayoutConfig {
    [key: string]: ILayout;
}
