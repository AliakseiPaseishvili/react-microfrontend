import React from "react";

import "./index.scss";
import { WeatherWidget } from "./components/WeatherWidget";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    There will be weather app
    <WeatherWidget />
  </div>
);

export default App;
