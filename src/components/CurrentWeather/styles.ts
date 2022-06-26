import styled from 'styled-components';

import { InlineWrapper } from '../../style/components';
import { TitleLabel } from '../../style/labels';

export const Wrapper = styled(InlineWrapper)`
  width: fit-content;
  padding: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.blackOpacity4};
`;

export const TempLabel = styled(TitleLabel)`
  font-size: 70px;
  margin-right: 10px;
`;

export const WeatherIcon = styled.img`
  height: 100px;
  width: 100px;
  margin-left: 10px;
`;
