export interface Error {
    path?: string;
    message: string;
}

export interface Errors extends Array<Error> {}
