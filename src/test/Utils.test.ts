import { Utils } from '../app/Utils';

describe('Utils file test', () => {
  // beforeAll(() => {
  //   console.log('before all');
  // });

  // beforeEach(() => {
  //   console.log('before each');
  // });

  test('text uppercase', () => {
    const upperStr = Utils.toUpperCase('shihab');
    expect(upperStr).toBe('SHIHAB');
  });

  test('simple url parse', () => {
    const parsedURL = Utils.parseURL('http://localhost:3000');
    expect(parsedURL.hostname).toBe('localhost');
    expect(parsedURL.port).toBe('3000');
    expect(parsedURL.query).toEqual({});
  });

  test('simple url parse', () => {
    const parsedURL = Utils.parseURL('http://localhost:3000');
    expect(parsedURL.hostname).toBe('localhost');
    expect(parsedURL.protocol).toBe('http:');
    expect(parsedURL.port).toBe('3000');
    expect(parsedURL.query).toEqual({});
  });

  test('parse url with query', () => {
    const parsedURL = Utils.parseURL(
      'http://localhost:3000?user=user&pass=1234'
    );
    const expectedQuery = {
      user: 'user',
      pass: '1234',
    };
    expect(parsedURL.query).toEqual(expectedQuery);
  });

  test('test invalid URL', () => {
    function expectError() {
      Utils.parseURL('');
    }
    expect(expectError).toThrowError();
  });

  test('test invalid URL with arrow function', () => {
    expect(() => {
      Utils.parseURL('');
    }).toThrowError();
  });

  test.only('test invalid URL error with try catch', () => {
    try {
      Utils.parseURL('');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty('message', 'Invalid URL!');
    }
  });
});
