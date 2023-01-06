import { Routes, Route } from "react-router-dom";
import RouteSwitch from "./RouteSwitch";
import Header from "./components/Header";


function App() {
  return (
    <div className="app">
      <Header/>
      <RouteSwitch/>
    </div>
  );
}

export default App;
