import { getImageUrl } from './images';
import { imgBaseUrl, imgExtension } from '../constants';

describe('images > getImageUrl', () => {
  test('should return the correct image URL', () => {
    const name = 'test-image';
    const expectedUrl = `${imgBaseUrl}${name}${imgExtension}`;
    const result = getImageUrl(name);
    expect(result).toBe(expectedUrl);
  });
});
