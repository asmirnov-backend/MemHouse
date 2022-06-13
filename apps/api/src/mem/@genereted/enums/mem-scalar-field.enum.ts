import { registerEnumType } from '@nestjs/graphql';

export enum MemScalarFieldEnum {
    id = "id",
    imgUrls = "imgUrls",
    text = "text",
    tags = "tags",
    likes = "likes",
    dislikes = "dislikes",
    rating = "rating"
}


registerEnumType(MemScalarFieldEnum, { name: 'MemScalarFieldEnum', description: undefined })
