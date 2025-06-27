import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import App from "./App";

function Root() {
  const user = null;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" replace />}
        /> */}
      </Routes>
    </Router>
  );
}

export default Root;
