import styled from 'styled-components';
import { InlineWrapper } from '../../style/components';
import { BoldLabel, Label } from '../../style/labels';

export const TempLabel = styled(BoldLabel)`
  font-size: 90px;
`;

export const WeatherIcon = styled.img`
  height: 200px;
  width: 200px;
`;

export const SubtitleWrapper = styled(InlineWrapper)`
  margin-top: -20px;
`;

export const Subtitles = styled(Label)`
  :first-child {
    margin-right: 10px;
  }
`;
