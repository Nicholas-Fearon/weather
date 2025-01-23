import { useState, useEffect } from "react";

export default function SearchForm() {
  const [results, setResults] = useState("");
  const [location, setLocation] = useState("");
  const [temp, setTemp] = useState("");
  const [icon, setIcon] = useState("");
  const [condition, setCondition] = useState("");
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API = import.meta.env.VITE_KEY;

  useEffect(() => {
    fetchWeather("Stowmarket");
  }, []);

  const fetchWeather = (query) => {
    setLoading(true);
    setError("");
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API}&q=${query}&aqi=no`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Location not found");
        }
        return response.json();
      })
      .then((data) => {
        setLocation(data.location.name);
        setTemp(data.current.temp_c);
        setIcon(data.current.condition.icon);
        setCondition(data.current.condition.text);
        setRegion(data.location.region);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to fetch weather data. Please try again.");
        setLoading(false);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (results.trim()) {
      fetchWeather(results);
      setResults("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Weather App
        </h1>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="relative">
            <input
              onChange={(e) => setResults(e.target.value)}
              className="w-full p-3 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              type="text"
              id="SearchForm"
              value={results}
              placeholder="Enter location"
              aria-label="Search for a location"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Search
          </button>
        </form>

        {loading ? (
          <p className="text-center mt-6 text-blue-500 font-semibold">
            Loading...
          </p>
        ) : error ? (
          <p className="text-center mt-6 text-red-500 font-semibold">{error}</p>
        ) : (
          location && (
            <div className="mt-8 text-center space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {location}, {region}
              </h2>
              <p className="text-4xl font-bold text-gray-700">{temp} °C</p>
              {icon && (
                <img
                  src={icon}
                  alt={condition}
                  className="inline-block w-16 h-16"
                />
              )}
              <p className="text-lg text-gray-600">{condition}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
