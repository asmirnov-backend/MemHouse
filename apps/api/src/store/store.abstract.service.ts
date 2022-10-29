import { ImageMeta } from './interfaces/image-meta.interface';

export abstract class StoreAbstractService<ISourceMeta> {
  abstract storeImage(params: {
    file: Express.Multer.File;
  }): Promise<{ meta: ImageMeta; sourceMeta: ISourceMeta }>;

  abstract deleteImage(sourceMeta: ISourceMeta): Promise<void>;
}
