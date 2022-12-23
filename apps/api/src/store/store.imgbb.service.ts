import { ImageMetaFromImagBB } from './interfaces/image-meta.imgbb.interface';
import { StoreAbstractService } from './store.abstract.service';

import { HttpService } from '@nestjs/axios';
import { HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { isUndefined, toNumber } from 'lodash';
import { firstValueFrom } from 'rxjs';
// eslint-disable-next-line
import FormData = require('form-data'); // Without 'require' it is not work

/**
 * Name: ImgBB
 * Remote service for store images
 * Url https://api.imgbb.com/
 */
@Injectable()
export class StoreImgBBService extends StoreAbstractService<ImageMetaFromImagBB> {
  private IMAGE_STORE_URL: string;
  private IMAGE_STORE_SECRET_KEY: string;

  constructor(
    private readonly config: ConfigService,
    private readonly http: HttpService,
  ) {
    super();

    this.IMAGE_STORE_URL =
      this.getEnvVariableAndCheckForUndefined<string>('IMAGE_STORE_URL');
    this.IMAGE_STORE_SECRET_KEY =
      this.getEnvVariableAndCheckForUndefined<string>('IMAGE_STORE_SECRET_KEY');
  }

  private getEnvVariableAndCheckForUndefined<T>(name: string) {
    const variable = this.config.getOrThrow<T>(name);

    if (isUndefined(variable)) {
      throw new Error(`${name} is not defined in env`);
    }

    return variable;
  }

  async storeImage(buffer: Buffer) {
    const response = await this.sendImageToRemoteService(buffer);
    const originMeta = response.data.data;

    return {
      imageMeta: {
        id: originMeta.id,
        title: originMeta.title,
        displayUrl: originMeta.display_url,
        width: toNumber(originMeta.width),
        height: toNumber(originMeta.height),
        size: originMeta.size,
        originMeta: originMeta,
      },
    };
  }

  private async sendImageToRemoteService(buffer: Buffer) {
    const queryParams = new URLSearchParams({
      key: this.IMAGE_STORE_SECRET_KEY,
    });

    const formData = new FormData();
    formData.append('image', buffer);

    return firstValueFrom(
      this.http.post<{
        data: ImageMetaFromImagBB;
        success: boolean;
        status: HttpStatus;
      }>(this.IMAGE_STORE_URL + `?${queryParams.toString()}`, formData, {
        headers: formData.getHeaders(),
      }),
    );
  }

  async deleteImage(imageOriginMeta: ImageMetaFromImagBB): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
