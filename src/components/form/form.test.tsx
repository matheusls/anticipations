import { render, screen } from 'tests/utils';

import Form from './form';

describe('<Form />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Form>Form component</Form>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render Form correctly', () => {
    render(<Form aria-label="form">Form component</Form>);

    expect(screen.getByRole('form')).toBeInTheDocument();
  });
});
