export interface WeatherInterface {
  current: {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: number;
    uvi: number;
    visibility: number;
    weather: [
      {
        description: string;
        icon: string;
        id: number;
        main: string;
      },
    ];
    wind_deg: number;
    wind_speed: number;
  };
  daily: [
    {
      clouds: number;
      dew_point: number;
      dt: number;
      feels_like: {
        day: number;
        night: number;
        eve: number;
        morn: number;
      };
      humidity: number;
      moon_phase: number;
      moonrise: number;
      moonset: number;
      pop: number;
      pressure: number;
      sunrise: number;
      sunset: number;
      temp: {
        day: number;
        eve: number;
        max: number;
        min: number;
        morn: number;
        night: number;
      };
      uvi: number;
      weather: [
        {
          description: string;
          icon: string;
          id: number;
          main: string;
        },
      ];
      wind_deg: number;
      wind_gust: number;
      wind_speed: number;
    },
  ];
}

export interface WeatherResponse {
  current: CurrentResponse;
  daily: DailyResponse[];
}

export interface DailyResponse {
  dataTime: number;
  tempMax: number;
  tempMin: number;
  weatherIcon: string;
}

export interface CurrentResponse {
  clouds: number;
  dataTime: number;
  feelsLike: number;
  humidity: number;
  temp: number;
  weatherIcon: string;
  weatherDescription: string;
}

export const Weather = ({
  current,
  daily,
}: WeatherInterface): WeatherResponse => ({
  current: {
    dataTime: current.dt,
    clouds: current.clouds,
    feelsLike: current.feels_like,
    humidity: current.humidity,
    temp: current.temp,
    weatherIcon: current.weather[0].icon,
    weatherDescription: current.weather[0].description,
  },
  daily: daily.map(({ temp, weather, dt }) => ({
    dataTime: dt,
    tempMax: temp.max,
    tempMin: temp.min,
    weatherIcon: weather[0].icon,
  })),
});
