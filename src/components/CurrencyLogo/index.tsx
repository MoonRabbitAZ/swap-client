import { Currency, ETHER, Token } from '@moonrabbit/swap-sdk';
import React, { useMemo } from 'react';
import styled from 'styled-components';

import MoonRabbitLogo from '../../assets/images/moon-rabbit.svg';
import { WrappedTokenInfo } from '../../state/lists/hooks';
import Logo from '../Logo';
import { useAllTokens } from '../../hooks/Tokens';

const StyledEthereumLogo = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 24px;
`;

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
`;

export default function CurrencyLogo({
  currency,
  size = '24px',
  style,
}: {
  currency?: Currency;
  size?: string;
  style?: React.CSSProperties;
}) {
  const tokens = useAllTokens();

  const srcs: string[] = useMemo(() => {
    if (currency === ETHER) return [];

    if (currency instanceof Token) {
      const token = tokens[currency.address] as WrappedTokenInfo;

      return [token?.logoURI || ''];
    }
    return [];
  }, [currency, tokens]);

  if (currency === ETHER) {
    return <StyledEthereumLogo src={MoonRabbitLogo} size={size} style={style} />;
  }

  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />;
}
