export interface ILocationExternal {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    shortCode: string;
}

export interface ILocationResponse {
    locations: ILocationExternal[];
}
