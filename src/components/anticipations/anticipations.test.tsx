import { render, screen } from 'tests/utils';

import Anticipations from './anticipations';
import { centsToReal } from 'utils';

const anticipations = Object.entries({
  '15': 13536,
  '30': 13824,
  '90': 14400,
});

describe('<Anticipations />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Anticipations anticipations={anticipations} />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render Anticipations correctly', () => {
    render(<Anticipations anticipations={anticipations} />);

    const title = screen.getByRole('heading', {
      name: /você receberá:/i,
      level: 2,
    });
    const list = screen.getByRole('list');
    const listItems = screen.getAllByRole('listitem');

    expect(title).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(3);

    listItems.forEach((item, i) => {
      const [day, value] = anticipations[i];

      expect(item).toHaveTextContent(`Em ${day} dias: ${centsToReal(value)}`);
    });
  });

  it('should render Anticipations with LoadingDots correctly', () => {
    render(<Anticipations anticipations={anticipations} isLoading />);

    expect(screen.getAllByTestId('loading-dots')).toHaveLength(4);
  });
});
