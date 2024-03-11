export interface ILocationExternal {
    id: number;
    name: string;
    shortCode: string;
}

export interface ILocationResponse {
    locations: ILocationExternal[];
}
