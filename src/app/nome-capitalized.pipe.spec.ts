import { NomeCapitalizedPipe } from './nome-capitalized.pipe';

describe('NomeCapitalizedPipe', () => {
  it('create an instance', () => {
    const pipe = new NomeCapitalizedPipe();
    expect(pipe).toBeTruthy();
  });
});
