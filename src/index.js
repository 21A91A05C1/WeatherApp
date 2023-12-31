import React from "react";
import reactDOM from "react-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import WeatherApp from "./Components/WeatherApp/WeatherApp";
reactDOM.render(
    <>
        <div className="App">
            <WeatherApp/>
        </div>
    </>,document.getElementById('root')
);
