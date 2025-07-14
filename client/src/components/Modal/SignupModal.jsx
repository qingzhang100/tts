import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";

function SignUpModal({ onClose }) {
  const [nickname, setNickname] = useState("");
  46048;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const passwordsMatch = password === confirmPassword;

  async function handleSignUp(e) {
    e.preventDefault();
    setErrorMsg("");

    if (!passwordsMatch) {
      setErrorMsg("Passwords do not match");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setErrorMsg(error.message);
      setLoading(false);
      return;
    }

    const user = data.user;

    const { error: insertError } = await supabase.from("profiles").insert({
      id: user.id,
      nickname: nickname,
      email: user.email,
    });

    setLoading(false);

    if (insertError) {
      setErrorMsg(
        "Sign up succeeded but saving nickname failed: " + insertError.message
      );
      return;
    }

    alert("Sign up successful!");
    onClose();
    navigate("/dashboard");
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-70 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          {errorMsg && (
            <div className="text-red-600 text-sm mb-3 text-center">
              {errorMsg}
            </div>
          )}

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Nickname</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-16 relative">
            <label className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              className={`w-full px-3 py-2 border rounded ${
                confirmPassword && !passwordsMatch
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            {confirmPassword && !passwordsMatch && (
              <p className="text-red-600 text-sm mt-1 absolute">
                Passwords do not match
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || (confirmPassword && !passwordsMatch)}
            className="w-full bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700 transition disabled:opacity-50"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpModal;
