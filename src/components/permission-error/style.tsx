import styled, { css } from 'styled-components';
import { transitions } from 'polished';
import { Label } from '../../style/labels';
import { PRIMARY_COLOR } from '../../style/colors';

interface ComponentsProps {
  active: boolean;
}

export const Wrapper = styled.div`
  width: 350px;
  text-align: center;
  margin-top: 20px;
  height: 0;
`;

export const ErrorLabel = styled(Label)<ComponentsProps>`
  color: transparent;

  ${transitions(['color'], 'ease-in .3s')};
  ${({ active }) =>
    active &&
    css`
      color: ${PRIMARY_COLOR};
      /* ${transitions(['color'], 'ease-in 3s')}; */
    `}
`;
