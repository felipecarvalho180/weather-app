import styled from 'styled-components';
import { ColumnWrapper, InlineWrapper } from '../../style/components';
import { BoldLabel, Label } from '../../style/labels';

export const Wrapper = styled(ColumnWrapper)`
  margin: 40px 0;
`;

export const TempLabel = styled(BoldLabel)`
  font-size: 90px;
  margin-left: 20px;
`;

export const WeatherIcon = styled.img`
  height: 100px;
  width: 100px;
`;

export const SubtitlesWrapper = styled(InlineWrapper)`
  margin-top: 20px;
`;

export const Subtitles = styled(Label)`
  :first-child {
    margin-right: 10px;
  }
`;