export interface ImageMetaFromImagBB {
  id: string;
  title: string;
  url_viewer: string;
  url: string;
  display_url: string;
  width: string;
  height: string;
  size: number;
  time: string;
  expiration: string;
  image: ImageAttributesFromImagBB;
  thumb: ImageAttributesFromImagBB;
  medium: ImageAttributesFromImagBB;
  delete_url: string;
}

export interface ImageAttributesFromImagBB {
  filename: string;
  name: string;
  mime: string;
  extension: string;
  url: string;
}
