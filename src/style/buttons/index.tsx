import styled from 'styled-components';
import { transitions } from 'polished';

export const BasicButton = styled.button`
  background-color: transparent;
  text-decoration: none;
  border: 0;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;

  ${transitions(['color'], 'ease .3s')};
`;
