import { render } from 'tests/utils';

import FormGroup from './form-group';

describe('<FormGroup />', () => {
  it('should match snapshot', () => {
    const { container } = render(<FormGroup>FormGroup component</FormGroup>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
