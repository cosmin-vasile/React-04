import { Routes, Route } from "react-router-dom";
import App from "../components/App";
import Home from "../components/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import Episode from "../components/Episode";

export default (
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/episodes" element={<EpisodeList />} /> */}
      <Route path="/episode/:episodeId" element={<Episode />} />
    </Route>
  </Routes>
);
