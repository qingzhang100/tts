export default function Header() {
  return (
    <header>
      <div className="py-4 text-white text-center">
        <a
          href="/"
          className="text-xl font-bold text-cyan-600"
          style={{ fontFamily: "'Lobster', cursive" }}
        >
          TTS Converter
        </a>
      </div>

      <div className="flex items-center justify-between px-4 py-2 mb-6 bg-gray-100 shadow-md">
        <nav className="flex-1">
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-cyan-500 hover:underline">
                Converter
              </a>
            </li>
            <li>
              <a href="/about" className="text-cyan-500 hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/how-it-works" className="text-cyan-500 hover:underline">
                How It Works
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <a href="/login" className="text-cyan-500 hover:underline">
            Login
          </a>
        </div>
      </div>
    </header>
  );
}
