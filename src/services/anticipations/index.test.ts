import fetchMock from 'jest-fetch-mock';

import { fetchAnticipations } from '.';

describe('Anticipations Services', () => {
  afterEach(() => {
    fetchMock.resetMocks();
  });

  it('should fetch anticipations', async () => {
    const transaction = {
      amount: 15000,
      installments: 3,
      mdr: 4,
    };

    const postResponse = {
      '1': 13267,
      '15': 13536,
      '30': 13824,
      '90': 14400,
    };

    fetchMock.mockOnce(JSON.stringify(postResponse));

    const data = await fetchAnticipations(transaction);

    expect(data).toEqual(postResponse);
  });
});
