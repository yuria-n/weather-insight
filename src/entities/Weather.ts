import * as utils from '../utils';
import { imgBaseUrl, imgExtension } from '../constants';

export class Weather {
  readonly iconUrl: string;

  private constructor(
    readonly code: number,
    readonly title: string,
    iconName: string,
    readonly temperature: number,
    readonly timestamp: number,
  ) {
    Weather.validateCode(code);
    Weather.validateTemperature(temperature);
    Weather.validateTimestamp(timestamp);

    this.iconUrl = `${imgBaseUrl}${iconName}${imgExtension}`;
  }

  static instantiate(
    code: number,
    title: string,
    iconName: string,
    temperature: number,
    timestamp: number,
  ) {
    return new Weather(code, title, iconName, temperature, timestamp);
  }

  private static validateInteger(value: number) {
    utils.assert(Number.isInteger(value));
    utils.assert(value > 0);
  }

  private static validateCode(value: number) {
    this.validateInteger(value);
  }

  private static validateTemperature(value: number) {
    utils.assert(!Number.isNaN(value));
  }

  private static validateTimestamp(value: number) {
    this.validateInteger(value);
  }
}
