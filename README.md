# Weather App

## About

Weather app is a web application created to provide information about the weather forecast to the user according to their location.
The result showing in this site is the current forecast weather and the next seven days.

[weather-app.com.br](https://cheerful-blancmange-cb9910.netlify.app/)

## How to use

##### When you click on the button check the weather forecast a box will appear asking for access to your location, for the correct functioning of the site, accept it.

![Button check weather](https://github.com/felipecarvalho180/weather-app/blob/master/public/readme-images/permission-request.png)

##### After that, the website will make the necessary requests and show the results on the screen.

![Result screen](https://github.com/felipecarvalho180/weather-app/blob/master/public/readme-images/success.png)

## Common erros

##### When you don't accepted the location permission after press the button, the website will show you the error:

![Location error](https://github.com/felipecarvalho180/weather-app/blob/master/public/readme-images/permission-blocked.png)

##### When geocode api call has an error, the website will show you the error:

![Geocode error](https://github.com/felipecarvalho180/weather-app/blob/master/public/readme-images/location-error.png)

##### When weather api call has an error, the website will show you the error:

![Geocode error](https://github.com/felipecarvalho180/weather-app/blob/master/public/readme-images/weather-error.png)

### Instalation

- Clone the project.
- Run the command "yarn install".
- Create a .env file in the root of project, set the variables [REACT_APP_OPEN_CAGE_KEY](https://opencagedata.com/api) and [REACT_APP_OPEN_WEATHER_KEY](https://openweathermap.org/api), create account and use your keys.
- Run the command "yarn start".

## Techs

### Framework

- React

### Style

- styled-components
- phosphor-react

### Bibliotecas para guardar dados

- context (React)

### Outros

- date-fns
- react-spinners
- react-toastify
- typescript
- axios
