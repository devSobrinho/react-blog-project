import { formatDate } from './format-data';

describe('FN formatDate: ', () => {
  it('should format date', () => {
    const date = formatDate('2022-01-26T21:37:05.425+00:00');
    expect(date).toBe('26 de jan. de 2022');
  });
});
