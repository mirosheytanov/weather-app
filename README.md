# Weather App demo

This is demo app that displays the weather based on the user's location.
The user can navigate and view the forecast for 5 days and the hourly forecast for each respective day.

To start the app:

1. Download or clone the project
2. Create `.env` file in the root of the project
3. In the `.env` add `VITE_APP_API_KEY=<your-api-key>` variable and replace the `<your-api-key>` with an api key from [openweather](https://openweathermap.org/api)
4. Run `npm install`
5. In the root directory run `npm run dev`
6. The project should be running on [localhost:5173](http://localhost:5173/)

Additionally:
- Tests can be ran by opening terminal in the root directory and running the `npm run test` command.
- Viewing the components used in the app is possible in storybook. To start it in the root directory
run `npm run storybook`. Storybook should be running on [localhost:6006](http://localhost:6006/)
