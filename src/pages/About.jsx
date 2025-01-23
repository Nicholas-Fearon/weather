export default function About() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">About Weather App</h1>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-4">
            Welcome to the <strong>Weather App</strong>, a simple yet powerful tool that provides real-time weather data powered by the API from <a
              href="https://www.weatherapi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              weatherapi.com
            </a>.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            This app is built with <strong>React</strong> and <strong>Vite</strong>, focusing on providing a clean, user-friendly interface with weather icons that represent current conditions.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            As I continue to improve this app, future updates will include features like location-based weather tracking and a dynamic background that adjusts based on the current weather.
          </p>
          <p className="text-lg text-gray-700">
            The goal of this project is to give users an intuitive and engaging experience while staying informed about the weather, no matter where they are.
          </p>
        </div>
      </div>
    );
  }