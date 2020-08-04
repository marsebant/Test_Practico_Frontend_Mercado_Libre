import { formatNumber } from '@angular/common';

/**
 * Global common functionalities
 */
export class Utils {
  constructor() {}
  /**
   * Formats price object to string in the format below:
   * Scurrency_symbol $amount,$decimals
   * amount thousands are separated by dots and decimals are by comma
   * E.g: {currency: $, amount: 123456789, decimals: 12} => $ 123.456.789,12
   */
  static formatPrice(price: {
    currency: string;
    amount: number;
    decimals: number;
  }): string {
    const amount = formatNumber(price.amount, 'en-US').replace(/,/g, '.');
    const decimals =
      price.decimals < 10 ? '0' + price.decimals : price.decimals;
    return price.currency + ' ' + amount + ',' + decimals;
  }
/**
 * Capitalizes all major letters and returns resultant string
 */
  static toTitleCase(word: string): string {
    return word
      .toLowerCase()
      .split(' ')
      .map((words) => words.charAt(0).toUpperCase() + words.slice(1))
      .join(' ');
  }
}
