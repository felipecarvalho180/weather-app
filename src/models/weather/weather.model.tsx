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

export const Weather = ({ current, daily }: WeatherInterface) => ({
  current: {
    clouds: current.clouds,
    feels_like: current.feels_like,
    humidity: current.humidity,
    temp: current.temp,
    weatherMain: current.weather[0].main,
  },
  daily: daily.map(({ temp, weather }) => ({
    tempMax: temp.max,
    tempMin: temp.min,
    weatherType: weather[0].main,
  })),
});
