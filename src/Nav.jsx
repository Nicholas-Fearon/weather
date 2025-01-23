export default function Nav() {
    return (
      <header className="bg-blue-600 shadow-md">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo or App Title */}
          <h1 className="text-white text-2xl font-bold tracking-wide">Weather App</h1>
  
          {/* Navigation Links */}
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="text-white text-lg hover:text-blue-300 transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white text-lg hover:text-blue-300 transition duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white text-lg hover:text-blue-300 transition duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  