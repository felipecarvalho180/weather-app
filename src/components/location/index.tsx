import React from 'react';
import { GeocodeResponse } from '../../models/geocode/geocode.model';
import { ColumnWrapper } from '../../style/components';
// import { AddressLabel, AddressWrapper, DateLabel } from './style';

const Location: React.FC<GeocodeResponse> = ({
  city,
  state,
}: GeocodeResponse) => (
  <ColumnWrapper>
    {/* <AddressWrapper>
      <AddressLabel>{city}</AddressLabel>
      <AddressLabel>{state}</AddressLabel>
    </AddressWrapper>
    <DateLabel>{new Date().toDateString()}</DateLabel> */}
  </ColumnWrapper>
);

export default Location;
