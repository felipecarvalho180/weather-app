import React from 'react';
import { format } from 'date-fns';

import { DailyResponse } from '../../models/weather/weather.model';
import { ColumnWrapper, InlineWrapper } from '../../style/components';
import { DescriptionLabel, TextLabel } from '../../style/labels';
import { ContentWrapper, Icon, Wrapper } from './styles';

const DayCard: React.FC<DailyResponse> = ({
  dataTime,
  tempMax,
  tempMin,
  weatherIcon,
}: DailyResponse) => (
  <Wrapper>
    <ContentWrapper>
      <ColumnWrapper>
        <DescriptionLabel>
          {format(new Date(dataTime * 1000), 'EEEE')}
        </DescriptionLabel>
        <InlineWrapper>
          <TextLabel>{Math.round(tempMax)}º/</TextLabel>
          <TextLabel>{Math.round(tempMin)}º</TextLabel>
        </InlineWrapper>
      </ColumnWrapper>
      <Icon
        src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt="Icone temperatura"
      />
    </ContentWrapper>
  </Wrapper>
);

export default DayCard;
