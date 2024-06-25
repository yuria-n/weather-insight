# 🌦️ Weather Insight

A responsive website that displays a single city's current 5-day weather forecast using data from OpenWeatherMap.

### Date

Tuesday June 25, 2024

### URL

- https://yuria-n.github.io/weather-insight/

### Time spent

Approximately 8 hours.

- Brainstorming and planning: 1 hour
- Repository setup: 1 hours
- Development and testing (storybook): 5 hours
- Documentation (README): 1 hour

### Assumptions

- The website should be responsive and accessible on various devices.
- The application is for users who primarily want to know the 5-day weather forecast to plan activities, particularly for weekends.
- The project is designed for teamwork, with technology selection and repository setup considering a team-based approach.

### Shortcuts and compromises

- Minimal testing environment set up using Storybook's stories. No tests for hooks.
- Limited functionality to display a single city's weather forecast to focus on the core functionality for the Minimum Viable Product (MVP).
- Basic styling without dark mode and some accessibility features due to time constraints.
- Hooks have high cohesion as they include API calls and logic without layering.

### Stretch goals attempted

- Built with Vite, React, and TypeScript.
- Set up testing environment with Vitest, React Testing Library and Jest.
- Used Storybook for accessibility checks, component testing and documentation.
- Added unit tests for util functions.
- Cached API responses to reduce HTTP requests.

### Instructions to run locally

Preparation

1. Copy `.env.example`, rename it to `.env`, and add an Open WeatherMap API key
2. Run `npm install` to install dependencies
3. Run `npm run prepare` to set up the pre-commit hook (optional for view-only)

Main application

1. Run `npm run dev`
2. Open http://localhost:5173/

Storybook

1. Run `npm run storybook`
2. http://localhost:6006/ will be opened

Test

1. Run `npm run test`

### Future plans

Things de-prioritized this time:

- Test coverage reports and unit tests for hooks.
- Auto-refresh weather data every x minutes using WebSocket.
- Use the browser's current location to determine the city automatically.
- Ability to search and select cities.
- Ability to switch temperature units from Celsius to Fahrenheit.
- Multi-language support.
- Dark mode support.
- More detailed weather information, such as temperature line graphs.
- Layered directory structure for asynchronous logic like HTTP requests and local storage access.

### Other information

- Tailwind: Only used to normalize CSS styling.
- CSS: Used pure CSS to demonstrate my styling skills.
- Technology choices: Selected for teamwork efficiency, development speed, and browser support.
- Architecture: Designed for scalability and maintainability, considering real-world application scenarios (excluding the non-layered hooks).

### Feedback

Thank you for reading this README and reviewing my submission. I enjoyed the practical nature of the task!

The task might be too broad to complete within 1-3 hours. Simplifying the task by providing more specific instructions on what to include in the UI could be helpful. For instance, including UI design mockup screenshots could assist those who find UI design challenging. It could also test the ability to implement designs accurately.
