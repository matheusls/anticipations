import { useForm, Controller } from 'react-hook-form';
import { useAsyncFn } from 'react-use';

import {
  Anticipations,
  Form,
  FormGroup,
  Heading,
  Input,
  Label,
  TextHelp,
} from 'components';
import { fetchAnticipations } from 'services/anticipations';
import { centsToReal, realToCents } from 'utils';

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

const AnticipationForm = () => {
  const { control, handleSubmit, register, watch } = useForm<Fields>({
    mode: 'all',
    shouldFocusError: false,
  });

  const watchFields = watch();

  const [
    { loading, value: anticipations },
    makeRequest,
  ] = useAsyncFn(async () => {
    const { amount, installments, mdr } = watchFields;

    return await fetchAnticipations({
      amount,
      installments: Number(installments),
      mdr: Number(mdr),
    });
  }, [watchFields]);

  const onSubmit = () => {
    makeRequest();
  };

  return (
    <AnticipationFormStyled>
      <Form aria-labelledby="form-title" onSubmit={handleSubmit(onSubmit)}>
        <Heading id="form-title" level={1}>
          Simule sua Antecipação
        </Heading>
        <FormGroup>
          <Label htmlFor="amount" isRequired>
            Informe o valor da venda
          </Label>
          <Controller
            name="amount"
            control={control}
            defaultValue={0}
            render={({ name, value, onChange }) => {
              return (
                <Input
                  id="amount"
                  name={name}
                  value={centsToReal(value)}
                  onChange={(e) => onChange(realToCents(e.target.value))}
                />
              );
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="installments" isRequired>
            Em quantas parcelas
          </Label>
          <Input id="installments" name="installments" ref={register} />
          <TextHelp>Máximo de 12 parcelas</TextHelp>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="mdr" isRequired>
            Informe o percentual de MDR
          </Label>
          <Input id="mdr" name="mdr" ref={register} />
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
