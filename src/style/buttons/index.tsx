import styled from 'styled-components';
import { transitions } from 'polished';
import { PRIMARY_COLOR, WHITE } from '../colors';

export const Button = styled.button`
  background-color: transparent;
  text-decoration: none;
  border: 2px solid ${PRIMARY_COLOR};
  border-radius: 5px;
  padding: 10px 20px;
  text-transform: uppercase;
  color: ${PRIMARY_COLOR};
  font-weight: bold;
  cursor: pointer;

  ${transitions(['color', 'background-color'], 'ease .3s')};
  :hover {
    background-color: ${PRIMARY_COLOR};
    color: ${WHITE};
  }
`;
