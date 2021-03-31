import fetchMock from 'jest-fetch-mock';

import { fireEvent, render, screen, waitFor } from 'tests/utils';
import { centsToReal } from 'utils';
import AnticipationForm from './anticipation-form';

const postResponse = {
  '1': 13267,
  '15': 13536,
  '30': 13824,
  '90': 14400,
};

const anticipationsPlaceholder = Object.entries({
  '1': 0,
  '15': 0,
  '30': 0,
  '90': 0,
});

const fieldsValues = {
  amount: 15000,
  installments: '3',
  mdr: '4',
};

describe('<AnticipationForm />', () => {
  afterEach(() => {
    fetchMock.resetMocks();
  });

  it('should render AnticipationForm correctly', async () => {
    render(<AnticipationForm />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /simule sua antecipação/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /você receberá:/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getAllByRole('textbox')).toHaveLength(3);
    expect(screen.getByRole('list')).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');

    expect(listItems).toHaveLength(4);

    listItems.forEach((item, i) => {
      const [day, value] = anticipationsPlaceholder[i];

      const dayText = Number(day) > 1 ? `Em ${day} dias` : 'Amanhã';

      expect(item).toHaveTextContent(`${dayText}: ${centsToReal(value)}`);
    });
  });

  it('should submit AnticipationForm and display response correctly', async () => {
    fetchMock.mockOnce(JSON.stringify(postResponse));

    const { rerender } = render(<AnticipationForm />);

    const { amount, installments, mdr } = fieldsValues;

    const amountInput = screen.getByLabelText(/informe o valor da venda/i);
    const installmentsInput = screen.getByLabelText(/em quantas parcelas/i);
    const mdrInput = screen.getByLabelText(/informe o percentual de mdr/i);

    fireEvent.change(amountInput, { target: { value: amount } });
    fireEvent.change(installmentsInput, { target: { value: installments } });
    fireEvent.change(mdrInput, { target: { value: mdr } });

    expect(amountInput).toHaveValue(centsToReal(amount));
    expect(installmentsInput).toHaveValue(installments);
    expect(mdrInput).toHaveValue(mdr);

    const form = screen.getByRole('form');

    fireEvent.submit(form);

    await waitFor(() => rerender(<AnticipationForm />));

    const listItems = screen.getAllByRole('listitem');

    expect(listItems).toHaveLength(4);

    listItems.forEach((item, i) => {
      const [day, value] = Object.entries(postResponse)[i];

      const dayText = Number(day) > 1 ? `Em ${day} dias` : 'Amanhã';

      expect(item).toHaveTextContent(`${dayText}: ${centsToReal(value)}`);
    });
  });

  it('should not submit AnticipationForm and display errors correctly', async () => {
    const { rerender } = render(<AnticipationForm />);

    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => rerender(<AnticipationForm />));

    expect(screen.getAllByText(/este campo é obrigatório/i)).toHaveLength(3);
  });

  it('should show correct error message when installments is less them 1 or bigger than 12', async () => {
    const { rerender } = render(<AnticipationForm />);

    const installmentsInput = screen.getByLabelText(/em quantas parcelas/i);

    fireEvent.change(installmentsInput, { target: { value: 0 } });

    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => rerender(<AnticipationForm />));

    expect(
      screen.getByText(/o número de parcelas deve ser maior ou igual a 1/i),
    ).toBeInTheDocument();

    fireEvent.change(installmentsInput, { target: { value: 13 } });

    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => rerender(<AnticipationForm />));

    expect(
      screen.getByText(/o número de parcelas deve ser menor ou igual a 12/i),
    ).toBeInTheDocument();
  });

  it('should show correct error message when installments and mdr are not numbers', async () => {
    const { rerender } = render(<AnticipationForm />);

    const installmentsInput = screen.getByLabelText(/em quantas parcelas/i);
    const mdrInput = screen.getByLabelText(/informe o percentual de mdr/i);

    fireEvent.change(installmentsInput, { target: { value: 'test' } });
    fireEvent.change(mdrInput, { target: { value: 'test' } });

    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => rerender(<AnticipationForm />));

    expect(screen.getAllByText(/o valor deve ser um número/i)).toHaveLength(2);
  });

  it('should show correct error message when mdr is below zero', async () => {
    const { rerender } = render(<AnticipationForm />);

    const mdrInput = screen.getByLabelText(/informe o percentual de mdr/i);

    fireEvent.change(mdrInput, { target: { value: -1 } });

    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => rerender(<AnticipationForm />));

    expect(screen.getByText(/o valor deve ser positivo/i)).toBeInTheDocument();
  });
});
