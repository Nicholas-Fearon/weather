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
      `https://api.weatherapi.com/v1/current.json?key=${API}&q=${query}&aqi=no`
    )
      .then((response) => {
        if (!response.ok) throw new Error("Location not found");
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
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 w-full max-w-md">
        <h1 className="text-xl font-semibold text-black text-center mb-6 tracking-wide">
          Weather App
        </h1>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <input
            onChange={(e) => setResults(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-black focus:outline-none"
            type="text"
            value={results}
            placeholder="Enter location"
            aria-label="Search for a location"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition-colors"
          >
            Search
          </button>
        </form>

        {loading && (
          <p className="text-center mt-6 text-black font-medium">Loading...</p>
        )}

        {error && (
          <p className="text-center mt-6 text-red-600 font-medium">{error}</p>
        )}

        {!loading && !error && location && (
          <div className="mt-8 text-center space-y-3">
            <h2 className="text-lg font-semibold text-black">
              {location}, {region}
            </h2>

            <p className="text-4xl font-bold text-gray-900">{temp}°C</p>

            {icon && (
              <img src={icon} alt={condition} className="mx-auto w-14 h-14" />
            )}

            <p className="text-gray-700 text-lg">{condition}</p>
          </div>
        )}
      </div>
    </div>
  );
}