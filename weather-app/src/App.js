import { useEffect } from "react";

import "./App.css";
import Card from "./component/Card";
import Button from "./component/Button";
import Input from "./component/SearchInput";
import { useWeather } from "./context/Weather";

function App() {
  const weather = useWeather();

  useEffect(() => {
    // Get Current Location
    weather.fetchCurrentUserLocationData();
  });

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <div className="box">
        <Input />
        <Button onClick={weather.fetchData} value="Search" />
      </div>
      <Card />
      <Button value="Refresh" />
    </div>
  );
}

export default App;
