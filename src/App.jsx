import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import ButtonsTop from "./components/ButtonsTop";
import SearchBar from "./components/SearchBar";
import LocalTime_Location from "./components/LocalTime_Location";
import Temp_Details from "./components/Temp_Details";
import ForCastSection from "./components/ForCastSection";
function App() {
  return (
    <div
      className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-sky-800
    h-fit shadow-xl shadow-gray-500 
    "
    >
      {/* 1.Designing the Top Button Menu */}
      <ButtonsTop />
      {/* 2.Search Bar and Input field */}
      <SearchBar />
      {/* 3.This Component will Displays Selected Location and its Local time */}
      <LocalTime_Location />
      {/* 4.This Component will Displays the Temperature Details */}
      <Temp_Details />
      {/* 4.This Component will Displays the Hourly Forecast Details  */}
      <ForCastSection Title="Hourly Forecast" />
      <ForCastSection Title="Daily Forecast" />
    </div>
  );
}

export default App;
