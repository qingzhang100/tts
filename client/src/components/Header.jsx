export default function Header() {
  return (
    <header className="flex space-x-4 items-center px-4 py-2 mb-6 bg-gray-100 shadow-md">
      {/* <a href="/" className="logo">
        LOGO
      </a> */}

      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-blue-500 hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-blue-500 hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="text-blue-500 hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
