import { transitions } from 'polished';
import styled from 'styled-components';
// import { PRIMARY_COLOR, WHITE } from '../../style/colors';
import { InlineWrapper } from '../../style/components';

export const Wrapper = styled(InlineWrapper)`
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;

  button {
  }

  ${transitions(['color', 'background-color'], 'ease .3s')};
  :hover {
    button {
    }
  }
`;
