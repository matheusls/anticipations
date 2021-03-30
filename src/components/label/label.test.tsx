import { render, screen } from 'tests/utils';

import Label from './label';

describe('<Label />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Label htmlFor="some-input">Label component</Label>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render Label correctly', () => {
    render(<Label htmlFor="some-input">Label component</Label>);

    expect(screen.getByText(/label component/i)).toBeInTheDocument();
  });
});
