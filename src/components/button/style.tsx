import { transitions } from 'polished';
import styled from 'styled-components';
import { PRIMARY_COLOR, WHITE } from '../../style/colors';
import { InlineWrapper } from '../../style/components';

export const Wrapper = styled(InlineWrapper)`
  border: 2px solid ${PRIMARY_COLOR};
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;

  button {
    color: ${PRIMARY_COLOR};
  }

  ${transitions(['color', 'background-color'], 'ease .3s')};
  :hover {
    background-color: ${PRIMARY_COLOR};

    button {
      color: ${WHITE};
    }
  }
`;
