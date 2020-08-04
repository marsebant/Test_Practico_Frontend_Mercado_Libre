import { formatNumber } from '@angular/common';

export class Utils {
  constructor() {}

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

  static toTitleCase(word: string): string {
    return word
      .toLowerCase()
      .split(' ')
      .map((words) => words.charAt(0).toUpperCase() + words.slice(1))
      .join(' ');
  }
}
