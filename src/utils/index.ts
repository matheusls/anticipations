export const centsToReal = (cents: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cents / 100);
};

export const realToCents = (real: string) => {
  return Number(real.replace(/\D+/g, ''));
};
