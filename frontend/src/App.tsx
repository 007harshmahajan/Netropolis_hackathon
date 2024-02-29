import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Activity from "./modules/activity";
import Tasks from "./modules/tasks";
import PageNotFound from "./modules/page-not-found";
import Auth from "./modules/auth";
import Home from "./modules/pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth/*" element={<Auth />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="activity" element={<Activity />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="*" Component={PageNotFound} />
        </Route>
        <Route path="*" Component={PageNotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
