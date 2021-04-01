import HttpClient from 'services/HttpClient';

export type Transaction = {
  amount: number;
  installments: number;
  mdr: number;
  days?: number[];
};

type FetchAnticipationsResponse = Record<string, number>;

const baseUrl = process.env.REACT_APP_BASE_URL || '';

const httpClient = new HttpClient(baseUrl);

export const fetchAnticipations = async (
  transaction: Transaction,
): Promise<FetchAnticipationsResponse> => {
  return await httpClient.post(transaction);
};
