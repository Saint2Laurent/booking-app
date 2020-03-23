// export enum Path {
//   mail ,
//   password,
//   fullName ,
// }


export interface Error {
  path: string;
  message: string;
}


export interface Errors extends Array<Error> {}
