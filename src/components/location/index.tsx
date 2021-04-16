import React from 'react';
import { GeocodeResponse } from '../../models/geocode/geocode.model';
import { ColumnWrapper } from '../../style/components';
import { AddressLabel, DateLabel } from './style';

const Location: React.FC<GeocodeResponse> = ({
  city,
  state,
}: GeocodeResponse) => (
  <ColumnWrapper>
    <AddressLabel>
      {city}, {state}
    </AddressLabel>
    <DateLabel>{new Date().toDateString()}</DateLabel>
  </ColumnWrapper>
);

export default Location;
