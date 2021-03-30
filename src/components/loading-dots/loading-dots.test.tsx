import { render } from 'tests/utils';

import LoadingDots from './loading-dots';

describe('<LoadingDots />', () => {
  it('should match snapshot', () => {
    const { container } = render(<LoadingDots />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
