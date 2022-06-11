
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

export interface Mem {
    imgUrls: string[];
    text?: Nullable<string>;
    likes: number;
    dislikes: number;
    rating: number;
}

export interface IQuery {
    mems(offset: number, limit: number): Mem[] | Promise<Mem[]>;
}

export interface IMutation {
    createMem(createMemInput?: Nullable<CreateMemInput>): Nullable<Mem> | Promise<Nullable<Mem>>;
}

type Nullable<T> = T | null;
