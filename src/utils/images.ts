import { imgBaseUrl, imgExtension } from '../constants';

export function getImageUrl(name: string): string {
  return `${imgBaseUrl}${name}${imgExtension}`;
}
