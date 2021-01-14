import React from "react";
import { Routes, Route } from "react-router";
import { Link, HashRouter, MemoryRouter } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Routing Sandbox</h1>
      <HashRouter>
        <nav>
          <Link to="">Home</Link>
          <br />
          <Link to="feature-a">Feature A</Link>
          <br />
          <Link to="feature-b/1">Feature B</Link>
          <br />
        </nav>
        <Routes>
          <Route path="" element={<h1>Home</h1>} />
          <Route path="feature-a" element={<h1>Feature A</h1>} />
          <Route path="feature-b/:id/*" element={<FeatureRoutes />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

const FeatureRoutes = () => (
  <>
    <nav>
      <Link to="">Feature B - Home</Link>
      <br />
      <Link to="feature-c">Feature C</Link>
      <br />
      <Link to="feature-d">Feature D</Link>
      <br />
      <Link to="notexist">Not Exist</Link>
    </nav>
    <Routes>
      <Route path="feature-c" element={<h1>Feature C</h1>} />
      <Route path="feature-d" element={<h1>Feature D</h1>} />
      <Route path="" element={<h1>Feature B - Home</h1>} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  </>
);
