import '@testing-library/jest-dom';
import 'jest-styled-components';
import fetchMock, { enableFetchMocks } from 'jest-fetch-mock';

enableFetchMocks();

fetchMock.dontMock();
