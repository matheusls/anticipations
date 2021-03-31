import { toast, TypeOptions } from 'react-toastify';

export const centsToReal = (cents: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cents / 100);
};

export const realToCents = (real: string) => {
  return Number(real.replace(/\D+/g, ''));
};

type ErrorToastProps = {
  text: string;
  type: TypeOptions;
};

export const renderErrorToast = (error = '') => {
  const errorToastProps: ErrorToastProps = {
    '500': {
      text: 'Oops, tivemos um problema. Por favor, tente novamente.',
      type: 'error' as const,
    },
    '408': {
      text: 'Oops, nossos servidores estão demorando para responder...',
      type: 'warning' as const,
    },
    offline: {
      text: 'Você parece estar com problemas de conexão!',
      type: 'warning' as const,
    },
  }[error] || {
    text: 'Oops, houve um problema. Por favor, tente novamente.',
    type: 'error' as const,
  };

  const { text, type } = errorToastProps;

  return toast(text, {
    position: 'top-center',
    autoClose: false,
    closeOnClick: true,
    type,
  });
};
