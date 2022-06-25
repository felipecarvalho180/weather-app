export interface GeocodeInterface {
  results: [
    {
      components: ComponentGeocodeInterface;
    },
  ];
}

export interface ComponentGeocodeInterface {
  city: string;
  continent: string;
  country: string;
  country_code: string;
  county: string;
  municipality: string;
  postcode: string;
  region: string;
  road: string;
  shop: string;
  state: string;
  state_code: string;
  state_district: string;
  suburb: string;
  _category: string;
  _type: string;
}

export interface GeocodeResponse {
  city: string;
  state: string;
}

export const Geocode = ({
  city,
  state,
}: ComponentGeocodeInterface): GeocodeResponse => ({
  city,
  state,
});
