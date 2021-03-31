import { render, screen, waitFor } from 'tests/utils';
import { toast } from 'react-toastify';

import { centsToReal, realToCents, renderErrorToast } from '.';

const errorsTexts: [string, RegExp][] = [
  ['', /oops, houve um problema. por favor, tente novamente./i],
  ['500', /oops, tivemos um problema. por favor, tente novamente./i],
  ['408', /oops, nossos servidores estão demorando para responder.../i],
  ['offline', /você parece estar com problemas de conexão!/i],
];

describe('Utils', () => {
  it('should return correct value for centsToReal', () => {
    expect(centsToReal(1234567)).toMatch('R$12,345.67');
  });

  it('should return correct value for realToCents', () => {
    expect(realToCents('R$12,345.67')).toBe(1234567);
  });

  it.each(errorsTexts)(
    'should render correct toast for given errors',
    async (error, message) => {
      render(<div>component placeholder</div>);

      await waitFor(() => renderErrorToast(error));

      expect(await screen.findByText(message)).toBeInTheDocument();

      toast.dismiss();
    },
  );
});
