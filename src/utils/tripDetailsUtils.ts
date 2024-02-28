import { ITripDetailed, ITripDetailedSerializable } from '../types';

export const toSerializable = (
    data: ITripDetailed
): ITripDetailedSerializable => {
    const { departureTimestamp, arrivalTimestamp, ...rest } = data;
    // Convert Date objects to strings
    const serializedData: ITripDetailedSerializable = {
        departureTimestamp: departureTimestamp.toISOString(),
        arrivalTimestamp: arrivalTimestamp.toISOString(),
        ...rest,
    };
    return serializedData;
};

export const fromSerializable = (
    serializedData: ITripDetailedSerializable
): ITripDetailed => {
    const { departureTimestamp, arrivalTimestamp, ...rest } = serializedData;

    // Convert string to Date objects
    const data: ITripDetailed = {
        departureTimestamp: new Date(departureTimestamp),
        arrivalTimestamp: new Date(arrivalTimestamp),
        ...rest,
    };
    return data;
};
