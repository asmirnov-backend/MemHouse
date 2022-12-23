import { ImageMeta } from '@prisma/client';

export interface IStoreImageOutput<IOriginMeta> {
  imageMeta: Omit<ImageMeta, 'memId' | 'originMeta'> & {
    originMeta: IOriginMeta;
  };
}
