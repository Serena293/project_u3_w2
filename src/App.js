import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CityWeather from "./components/CityWeather";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column vh-100">
        <MyNavbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<CityWeather city="Afragola" />} />
            <Route path="/London" element={<CityWeather city="London" />} />
            <Route path="/this-year" element={  <div>
                  <h2>This Year Wrapped</h2>
                  <div>
                    <CityWeather city="Auckland" />
                    <CityWeather city="Ho Chi Minh" />
                    <CityWeather city="Kuala Lumpur" />
                    <CityWeather city="Sarajevo" />
                    <CityWeather city="Belgrade" />
                    <CityWeather city="Florence" />
                    <CityWeather city="Rome" />
                    <CityWeather city="Pescara" />
                    <CityWeather city="Napoli" />
                    <CityWeather city="Truro" />
                    <CityWeather city="Edimburgo" />
                  </div>
                </div>} />
            <Route path="/next-trip" element={<div><h2>Next Trip</h2>
              <CityWeather city="Krakow" />
                    <CityWeather city="Brno" />
                    <CityWeather city="Bratislava" />
                    <CityWeather city="Prague" />
                    </div>
          } />
          </Routes>
        </main>
        <MyFooter />
      </div>
    </Router>
  );
}

export default App;
