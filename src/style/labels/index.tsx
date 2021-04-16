import styled from 'styled-components';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../colors';

export const Label = styled.span`
  color: ${PRIMARY_COLOR};
  font-size: 14px;
  margin: 0;
  font-weight: 100;
`;

export const SecondaryLabel = styled.span`
  color: ${SECONDARY_COLOR};
  font-size: 14px;
  margin: 0;
`;

export const BoldLabel = styled.span`
  color: ${PRIMARY_COLOR};
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;
