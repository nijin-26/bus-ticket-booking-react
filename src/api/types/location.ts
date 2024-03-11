export interface ILocationExternal {
    id: number;
    createdAt: string;
    updatedAt: string;
    name: string;
    shortCode: string;
}

export interface ILocationResponse {
    locations: ILocationExternal[];
}
