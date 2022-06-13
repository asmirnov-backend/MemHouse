
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface PaginationInput {
    offset: number;
    limit: number;
}

export interface CreateMemInput {
    imgUrls: string[];
    text?: Nullable<string>;
    tags?: Nullable<string[]>;
}

export interface UpdateMemInput {
    id: string;
    imgUrls?: Nullable<string[]>;
    text?: Nullable<string>;
    tags?: Nullable<string[]>;
    increaseLikes?: Nullable<number>;
    increaseDislikes?: Nullable<number>;
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
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createMem(createMemInput: CreateMemInput): Mem | Promise<Mem>;
    updateMem(updateMemInput: UpdateMemInput): Mem | Promise<Mem>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
}

export interface User {
    id: string;
    email: string;
    password: string;
    nickname: string;
    money: number;
    createdMems?: Nullable<Mem[]>;
}

type Nullable<T> = T | null;
