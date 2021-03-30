import HttpClient from 'services/HttpClient';

type Transaction = {
  amount: number;
  installments: number;
  mdr: number;
  days?: number[];
};

const baseUrl = process.env.REACT_APP_BASE_URL || '';

const httpClient = new HttpClient(`${baseUrl}/?delay=3000`);

export const fetchAnticipations = async (transaction: Transaction) => {
  return await httpClient.post(transaction);
};
