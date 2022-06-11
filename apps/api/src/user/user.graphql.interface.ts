
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface User {
    uniqueId: string;
    email: string;
    password: string;
    nickname: string;
}

export interface IQuery {
    user(uniqueId: string): User | Promise<User>;
}

type Nullable<T> = T | null;
