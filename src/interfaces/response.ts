export interface Response<T> {
    status: number;
    result: string;
    error: T;
    data: {
        data: T
    };
}
