import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../style/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  height: 60px;
  width: 60px;
`;

export const Label = styled.span`
  font-size: 30px;
  color: ${PRIMARY_COLOR};
  font-weight: bold;
`;
