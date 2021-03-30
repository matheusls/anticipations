import { render, screen } from 'tests/utils';

import Heading, { HeadingLevels } from './heading';

import { Theme } from 'styles';

const { colors, fontSizes } = Theme;

const defaultStyles = {
  color: colors.grayDark,
  fontSize: fontSizes.xlarge,
  fontStyle: 'normal',
};

const headingLevels: HeadingLevels[][] = [[1], [2], [3], [4], [5], [6]];

describe('<Heading />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Heading level={1}>Heading Component</Heading>,
    );

    expect(container).toMatchSnapshot();
  });

  it.each(headingLevels)(
    '%# should render Heading level %p correctly',
    (level) => {
      render(<Heading level={level}>Heading Component</Heading>);

      expect(screen.getByRole('heading', { level })).toBeInTheDocument();
    },
  );

  it('should render Heading with correct text', () => {
    render(<Heading level={1}>Heading Component</Heading>);

    expect(
      screen.getByRole('heading', { name: /heading component/i }),
    ).toBeInTheDocument();
  });

  it('should render Heading with default styles', () => {
    render(<Heading level={1}>Heading Component</Heading>);

    const heading = screen.getByRole('heading', { name: /heading component/i });

    const { color, fontSize, fontStyle } = defaultStyles;

    expect(heading).toHaveStyleRule('color', color);
    expect(heading).toHaveStyleRule('font-size', fontSize);
    expect(heading).toHaveStyleRule('font-style', fontStyle);
  });
});
