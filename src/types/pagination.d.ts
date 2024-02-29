export interface IPagination<T> {
    loading: boolean;
    page: number;
    pageSize: number;
    totalNumberOfData: number;
    data: T[];
}
