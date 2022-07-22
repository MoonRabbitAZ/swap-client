import Modal from '../Modal';
import styled from 'styled-components';
import React, { useCallback } from 'react';
import { ButtonPrimary } from '../Button';
import { AutoColumn } from '../Column';
import { TYPE } from 'theme';
import { SectionBreak } from 'components/swap/styleds';

const Link = styled.a`
  text-decoration: none;
`;

const TermsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TermsTextWrp = styled.div`
  margin-left: 10px;
`;

const Checkbox = styled.input`
  accent-color: ${({ theme }) => theme.primary1};
  outline-offset: 0;
  outline: none;
`;

const PaddedColumn = styled(AutoColumn)`
  padding: 20px;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export default function TermsModal() {
  const storageKey = 'termsAccept';
  const handleDismiss = useCallback(() => null, []);
  const [checked, setChecked] = React.useState(false);
  const termsAccept = localStorage.getItem(storageKey) !== 'true';
  const [isOpen, setIsOpen] = React.useState(termsAccept);

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleAcceptTerms = () => {
    localStorage.setItem(storageKey, 'true');
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onDismiss={handleDismiss} maxHeight={90}>
      <Wrapper>
        <PaddedColumn gap="14px">
          <TYPE.mediumHeader>Terms of Use</TYPE.mediumHeader>
        </PaddedColumn>
        <SectionBreak />
        <PaddedColumn gap="25px">
          <TermsWrapper>
            <Checkbox type="checkbox" checked={checked} onChange={handleChange} autoFocus={false} />
            <TermsTextWrp>
              By checking here you signify that you have read, understand, and agree to be bound by Moon Rabbit DEX and{' '}
              <Link href="https://moonrabbit.com/legal" target="_blank">
                Moon Rabbit Ecosystem General Terms of Use
              </Link>
            </TermsTextWrp>
          </TermsWrapper>
          <ButtonPrimary
            disabled={!checked}
            altDisabledStyle={true}
            borderRadius="20px"
            padding="10px 1rem"
            onClick={handleAcceptTerms}
          >
            Continue
          </ButtonPrimary>
        </PaddedColumn>
      </Wrapper>
    </Modal>
  );
}
