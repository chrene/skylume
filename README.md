# Skylume

Skylume, a weather forecasting app is a web application built using Next.js, TypeScript, and Tailwind CSS. It allows users to view real-time weather information and forecasts for different locations around the world. The app uses external APIs to fetch weather data and provides a user-friendly interface to access weather details.

## Features

- **Today's Weather**: Get the current weather information for your current location based on your IP address.
- **Search for Cities**: Search for weather information and forecasts for specific cities.
- **Forecasts**: View weather forecasts for the upcoming days.
- **Responsive Design**: Enjoy a seamless experience on various devices, including desktops, tablets, and smartphones.

## Getting Started

To set up the project on your local machine, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/chrene/skylume-app.git
   cd skylume
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm run dev
   ```

   The app should now be accessible at [http://localhost:3000](http://localhost:3000). Open your browser and visit the URL to explore the Weather Forecast App.

## How It Works

The Weather Forecast App utilizes two main contexts:

### Geo Context

The Geo Context handles geolocation data, including latitude, longitude, and city names. It allows users to search for weather information for specific cities and provides the user's current location based on their IP address.

#### Hooks

- `useGeo`: A custom hook that provides access to the Geo Context. It returns an object with the `place` and `setPlace` values.

### Weather Context

The Weather Context is responsible for managing weather data and forecasts. It fetches weather information from external APIs based on the user's selected location or IP address. The context provides real-time weather data, including temperature, weather conditions, wind speed, and more.

#### Hooks

- `useWeather`: A custom hook that provides access to the Weather Context. It returns an object with the `weather`, `fetchWeather`, and `isFetching` values.

## Components

The app is divided into several components to manage different sections and functionalities:

- **Header**: The header component that provides navigation (searching for cities).
- **TodayWidget**: Displays the current weather information for the user's location.
- **ForecastWidget**: Shows detailed weather forecasts for the upcoming days.

## External APIs

The Weather Forecast App interacts with the following external APIs:

- **Geocoding API**: Used for city searches and retrieving geographical coordinates based on city names. API endpoint: [https://geocoding-api.open-meteo.com/v1/search](https://geocoding-api.open-meteo.com/v1/search)

- **Weather API**: Provides weather information and forecasts based on latitude and longitude. API endpoint: [https://geocoding-api.open-meteo.com/v1/forecast](https://geocoding-api.open-meteo.com/v1/forecast)

- **IP Location API**: Retrieves the user's geographical location based on their IP address. API endpoint: [https://ipapi.co/json](https://ipapi.co/json)

## License

This project is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.

