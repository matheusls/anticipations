import { render, screen } from 'tests/utils';

import TextHelp from './text-help';

describe('<TextHelp />', () => {
  it('should match snapshot', () => {
    const { container } = render(<TextHelp>TextHelp component</TextHelp>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render TextHelp correctly', () => {
    render(<TextHelp>TextHelp component</TextHelp>);

    expect(screen.getByText(/texthelp component/i)).toBeInTheDocument();
  });
});
