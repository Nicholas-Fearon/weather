import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header className="bg-blue-600 shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo or App Title */}
        <h1 className="text-white text-2xl font-bold tracking-wide">Weather App</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white text-lg hover:text-blue-300 transition duration-200"
              aria-label="Home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white text-lg hover:text-blue-300 transition duration-200"
              aria-label="About"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white text-lg hover:text-blue-300 transition duration-200"
              aria-label="Contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}