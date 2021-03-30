import { centsToReal, realToCents } from 'utils';

describe('Utils', () => {
  it('should return correct value for centsToReal', () => {
    expect(centsToReal(1234567)).toMatch('R$12,345.67');
  });

  it('should return correct value for realToCents', () => {
    expect(realToCents('R$12,345.67')).toBe(1234567);
  });
});
