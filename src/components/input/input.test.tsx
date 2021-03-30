import { fireEvent, render, screen } from 'tests/utils';

import Input from './input';

const inputProps = {
  id: 'some-input',
  name: 'some-input',
  placeholder: 'Input Component Placeholder',
  type: 'text',
};

describe('<Input />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Input {...inputProps} />);

    expect(container).toMatchSnapshot();
  });

  it('should render change Input value correctly', () => {
    render(<Input {...inputProps} />);

    const inputValue = 'Input Component Value';
    const input = screen.getByPlaceholderText(/input component placeholder/i);

    fireEvent.change(input, { target: { value: inputValue } });

    expect(input).toHaveValue(inputValue);
  });

  it('should render change Input border color on focus', async () => {
    render(<Input {...inputProps} />);

    const input = screen.getByPlaceholderText(/input component placeholder/i);

    input.focus();

    expect(input).toHaveFocus();
  });
});
