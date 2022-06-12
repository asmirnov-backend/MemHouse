
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateMemInput {
    imgUrls: string[];
    text?: Nullable<string>;
}

export interface PaginationInput {
    offset: number;
    limit: number;
}

export interface CreateUserInput {
    email: string;
    password: string;
    nickname: string;
}

export interface Mem {
    id: string;
    imgUrls: string[];
    text?: Nullable<string>;
    tags: string[];
    likes: number;
    dislikes: number;
    rating: number;
}

export interface IQuery {
    mems(pagination: PaginationInput): Mem[] | Promise<Mem[]>;
    user(uniqueId: string): User | Promise<User>;
}

export interface IMutation {
    createMem(createMemInput: CreateMemInput): Mem | Promise<Mem>;
    createUser(createUserInput?: Nullable<CreateUserInput>): Nullable<User> | Promise<Nullable<User>>;
}

export interface User {
    id: string;
    email: string;
    password: string;
    nickname: string;
    createdMems?: Nullable<Nullable<Mem>[]>;
}

type Nullable<T> = T | null;
