import { render } from 'tests/utils';

import Home from './home';

describe('<Home />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
