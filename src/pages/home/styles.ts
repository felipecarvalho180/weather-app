import styled from 'styled-components';

import { ColumnWrapper, InlineWrapper } from '../../style/components';
import { TitleLabel } from '../../style/labels';

interface WrapperInterface {
  weatherCode?: string;
}

const handleColorType = (code: string | undefined) => {
  switch (code) {
    case '04n':
      return 'https://i.imgur.com/5IKpwi1.jpg';
    default:
      return 'https://i.imgur.com/Qf3Seji.jpg';
  }
};

export const Wrapper = styled.div<WrapperInterface>`
  display: flex;
  height: 100vh;
  overflow: hidden;
  background: ${({ weatherCode }) => `url(${handleColorType(weatherCode)})`};
  background-size: cover;
`;

/*
  sol
  https://i.imgur.com/Qf3Seji.jpg
  nuvens
  https://i.imgur.com/5IKpwi1.jpg
  chuva
  https://i.imgur.com/Qt7yrXd.jpg
  noite
  https://i.imgur.com/GP42KRX.jpg
*/

export const ContentWrapper = styled(ColumnWrapper)`
  flex: 1;
  padding: 50px;
  justify-content: space-between;
`;

export const Title = styled(TitleLabel)`
  font-weight: ${({ theme }) => theme.fontWeight.text};
`;

export const Loading = styled(InlineWrapper)`
  align-items: flex-end;
  > :first-child {
    margin-right: 5px;
  }
`;

export const GeocodeNotAllowedWrapper = styled(ColumnWrapper)`
  gap: 20px;
`;
