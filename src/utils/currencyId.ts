import { Currency, ETHER, Token } from '@moonrabbit/swap-sdk';

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'AAA';
  if (currency instanceof Token) return currency.address;
  throw new Error('invalid currency');
}
