import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { createBreakpoint, useAsyncFn } from 'react-use';

import {
  Anticipations,
  Form,
  FormGroup,
  Heading,
  Input,
  Label,
  TextHelp,
} from 'components';
import { useNavigatorOnline, useTimeout } from 'hooks';
import { fetchAnticipations } from 'services/anticipations';
import { Theme } from 'styles';
import { centsToReal, realToCents, renderErrorToast } from 'utils';

import { AnticipationFormStyled } from './anticipation-form.styles';

type Fields = {
  amount: number;
  installments: number;
  mdr: number;
};

const anticipationsPlaceholder = {
  '1': 0,
  '15': 0,
  '30': 0,
  '90': 0,
};
const maxInstallments = 12;
const minInstallments = 1;
const requiredMessage = 'Este campo é obrigatório';
const useBreakpoint = createBreakpoint({ ...Theme.breakpoints });

const AnticipationForm = () => {
  const breakpoint = useBreakpoint();
  const isOnline = useNavigatorOnline();
  const { isReady, start, cancel } = useTimeout(2000);

  const { control, formState, handleSubmit, register } = useForm<Fields>({
    mode: 'all',
  });
  const { errors } = formState;

  const [{ loading, value: anticipations }, makeRequest] = useAsyncFn(
    async (transaction: Fields) => {
      start();

      const data = await fetchAnticipations(transaction);

      if (!isReady) cancel();

      return data;
    },
    [isOnline],
  );

  const onSubmit = (data: Fields) => {
    if (!isOnline) {
      return renderErrorToast('offline');
    }

    makeRequest(data);
  };

  useEffect(() => {
    if (isReady) {
      renderErrorToast('slowRequest');
    }
  }, [isReady]);

  return (
    <AnticipationFormStyled>
      <Form aria-labelledby="form-title" onSubmit={handleSubmit(onSubmit)}>
        <Heading
          fontSize={breakpoint === 'medium' ? 'xlarge' : 'large'}
          id="form-title"
          level={1}
        >
          Simule sua Antecipação
        </Heading>
        <FormGroup>
          <Label htmlFor="amount" isRequired>
            Informe o valor da venda
          </Label>
          <Controller
            defaultValue={0}
            control={control}
            name="amount"
            rules={{
              required: { value: true, message: requiredMessage },
              validate: (value) => value > 0 || requiredMessage,
            }}
            render={({ name, value, onChange }) => {
              return (
                <Input
                  autoFocus
                  id="amount"
                  name={name}
                  value={centsToReal(value)}
                  onChange={(e) => onChange(realToCents(e.target.value))}
                />
              );
            }}
          />
          {errors?.amount?.message && (
            <TextHelp>{errors.amount.message}</TextHelp>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="installments" isRequired>
            Em quantas parcelas
          </Label>
          <Input
            id="installments"
            name="installments"
            ref={register({
              max: {
                value: maxInstallments,
                message: 'O número de parcelas deve ser menor ou igual a 12',
              },
              min: {
                value: minInstallments,
                message: 'O número de parcelas deve ser maior ou igual a 1',
              },
              required: { value: true, message: requiredMessage },
              validate: (value) =>
                !isNaN(Number(value)) || 'O valor deve ser um número',
              valueAsNumber: true,
            })}
          />
          {!errors?.installments && (
            <TextHelp color="gray">Máximo de 12 parcelas</TextHelp>
          )}
          {errors?.installments?.message && (
            <TextHelp>{errors.installments.message}</TextHelp>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="mdr" isRequired>
            Informe o percentual de MDR
          </Label>
          <Input
            id="mdr"
            name="mdr"
            ref={register({
              min: {
                value: 0,
                message: 'O valor deve ser positivo',
              },
              required: { value: true, message: requiredMessage },
              validate: (value) =>
                !isNaN(Number(value)) || 'O valor deve ser um número',
              valueAsNumber: true,
            })}
          />
          {errors?.mdr?.message && <TextHelp>{errors.mdr.message}</TextHelp>}
        </FormGroup>

        <input type="submit" style={{ display: 'none' }} />
      </Form>
      <Anticipations
        anticipations={Object.entries(
          anticipations || anticipationsPlaceholder,
        )}
        isLoading={loading}
      />
    </AnticipationFormStyled>
  );
};

export default AnticipationForm;
