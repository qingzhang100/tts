import { useState } from "react";
import LoginModal from "./Modal/LoginModal";
import SignUpModal from "./Modal/SignUpModal"; // 新增导入

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false); // 新增状态

  function openLoginModal(e) {
    e.preventDefault();
    setShowLogin(true);
  }

  function openSignUpModal(e) {
    e.preventDefault();
    setShowSignUp(true);
  }

  function closeLoginModal() {
    setShowLogin(false);
  }

  function closeSignUpModal() {
    setShowSignUp(false);
  }

  return (
    <header className="text-sm">
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
              <a href="/" className="text-cyan-600 hover:underline">
                Home/Converter
              </a>
            </li>
            <li>
              <a href="/about" className="text-cyan-600 hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/how-it-works" className="text-cyan-600 hover:underline">
                How It Works
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex space-x-4">
          <a
            href="/signup"
            className="text-cyan-600 hover:underline"
            onClick={openSignUpModal}
          >
            Sign Up
          </a>
          <a
            href="/login"
            className="text-cyan-600 hover:underline"
            onClick={openLoginModal}
          >
            Login
          </a>
        </div>
      </div>

      {/* 弹窗区 */}
      {showLogin && <LoginModal onClose={closeLoginModal} />}
      {showSignUp && <SignUpModal onClose={closeSignUpModal} />}
    </header>
  );
}
