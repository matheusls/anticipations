import fetchMock from 'jest-fetch-mock';

import HttpClient from './HttpClient';

describe('HttpClient', () => {
  afterEach(() => {
    fetchMock.resetMocks();
  });

  it('should make post request', async () => {
    const postResponse = {
      data: 'some value',
    };
    const url = 'https://some-url/';

    fetchMock.mockOnce(JSON.stringify(postResponse));

    const httpClient = new HttpClient(url);

    const data = await httpClient.post({});

    expect(data).toEqual(postResponse);
  });
});
