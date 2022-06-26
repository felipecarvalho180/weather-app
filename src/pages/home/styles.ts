import styled from 'styled-components';

import { ColumnWrapper, InlineWrapper } from '../../style/components';
import { TitleLabel } from '../../style/labels';

interface WrapperInterface {
  weatherCode?: string | undefined;
}

const handleColorType = (code: string | undefined) => {
  if (code?.includes('clouds') || code?.includes('mist'))
    return 'https://i.imgur.com/5IKpwi1.jpg';

  if (
    code?.includes('rain') ||
    code?.includes('thunderstorm') ||
    code?.includes('snow')
  )
    return 'https://i.imgur.com/Qt7yrXd.jpg';

  if (code?.includes('night')) return 'https://i.imgur.com/GP42KRX.jpg';

  return 'https://i.imgur.com/Qf3Seji.jpg';
};

export const Wrapper = styled.div<WrapperInterface>`
  display: flex;
  height: 100vh;
  overflow: hidden;
  background: ${({ weatherCode }) => `url(${handleColorType(weatherCode)})`};
  background-size: cover;
  -webkit-transition: background-image 0.5s ease-in-out;
  transition: background-image 0.5s ease-in-out;

  @media (max-width: 885px) {
    flex-direction: column;
  }

  @media (max-width: 455px) {
    overflow: auto;
  }
`;

export const ContentWrapper = styled(ColumnWrapper)`
  flex: 1;
  padding: 50px;
  justify-content: space-between;

  @media (max-width: 885px) {
    padding: 20px;
  }
`;

export const Title = styled(TitleLabel)`
  font-weight: ${({ theme }) => theme.fontWeight.text};

  @media (max-width: 885px) {
    margin-bottom: 30px;
  }
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
