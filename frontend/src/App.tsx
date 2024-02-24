import { Route, Routes, BrowserRouter } from "react-router-dom";
import { lazy } from "react";

const Auth = lazy(() => import("./modules/auth/index"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth/*" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
