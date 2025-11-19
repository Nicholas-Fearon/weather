export default function About() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6 text-black tracking-wide">
        About Weather App
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 max-w-3xl mx-auto">
        <p className="text-lg text-gray-800 mb-4">
          Welcome to the <strong>Weather App</strong>, a straightforward tool designed to provide up-to-date weather information using data from{" "}
          <a
            href="https://www.weatherapi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline hover:opacity-70 transition"
          >
            weatherapi.com
          </a>.
        </p>

        <p className="text-lg text-gray-800 mb-4">
          This application is built with <strong>React</strong> and <strong>Vite</strong>, with an emphasis on a clear, minimalist interface supported by visual icons for current conditions.
        </p>

        <p className="text-lg text-gray-800 mb-4">
          Planned enhancements include location-based weather detection and a dynamic interface that adapts visually to reflect current weather patterns.
        </p>

        <p className="text-lg text-gray-800">
          The goal of this project is to offer users a simple, engaging, and reliable way to stay informed about weather conditions wherever they are.
        </p>
      </div>
    </div>
  );
}