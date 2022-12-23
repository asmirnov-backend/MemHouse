import { IStoreImageOutput } from './interfaces/store.image.output.interface';

export abstract class StoreAbstractService<IOriginMeta> {
  abstract storeImage(buffer: Buffer): Promise<IStoreImageOutput<IOriginMeta>>;

  async storeManyImages(
    buffers: Buffer[],
  ): Promise<IStoreImageOutput<IOriginMeta>[]> {
    return Promise.all(buffers.map((buffer) => this.storeImage(buffer)));
  }

  abstract deleteImage(imageOriginMeta: IOriginMeta): Promise<void>;
}
