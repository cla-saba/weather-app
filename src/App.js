import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WeatherByHour from "./components/WeatherByHour/WeatherByHour";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={
          <WeatherByHour
            hour="1639859451"
            iconId="04n"
            temp="7.42"
            sunrise='1639814528'
            sunset='1639842732' />
        } />
        {/* <Route path='/' element={} /> */}
        {/* <Route path='/' element={} /> */}
      </Routes>
    </Router>
  );
}

export default App;
