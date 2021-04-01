import { renderHook } from '@testing-library/react-hooks';

import useNavigatorOnline from './use-navigator-online';

describe('useNavigatorOnline', () => {
  const navigatorMock = jest.spyOn(navigator, 'onLine', 'get');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return true if navigator.onLine is true', () => {
    navigatorMock.mockReturnValue(true);

    const {
      result: { current },
    } = renderHook(() => useNavigatorOnline());

    expect(current).toBe(true);
  });

  it('should return false if navigator.onLine is false', () => {
    navigatorMock.mockReturnValue(false);

    const {
      result: { current },
    } = renderHook(() => useNavigatorOnline());

    expect(current).toBe(false);
  });
});
