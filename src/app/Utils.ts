import { UrlWithParsedQuery, parse } from 'url';

/* istanbul ignore next */
export class Utils {
  public static toUpperCase(arg: string): string {
    return arg.toUpperCase();
  }

  public static parseURL(url: string): UrlWithParsedQuery {
    if (!url) {
      throw new Error('Invalid URL!');
    }
    return parse(url, true);
  }
}
