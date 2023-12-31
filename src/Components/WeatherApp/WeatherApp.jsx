import React from "react";
import "./WeatherApp.css";
import { useState } from "react";
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";
const WeatherApp=()=>{
    let api_key="532a0c7edd99481e74fe95c9e7ae2150";

    const [wicon,seticon]=useState("cloud_icon");
    const search=async()=>{
        const element=document.getElementsByClassName("cityInput");
        if(element[0].value==="")
        {
            return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        let response=await fetch(url);
        let data= await response.json();
        const humidity=document.getElementsByClassName("humidity-percent");
        const wind=document.getElementsByClassName("wind-rate");
        const temperature=document.getElementsByClassName("weather-temp");
        const location=document.getElementsByClassName("weather-location");
        humidity[0].innerHTML=Math.floor(data.main.humidity)+" %";
        wind[0].innerHTML=Math.floor(data.wind.speed)+" km/h";
        temperature[0].innerHTML=Math.floor(data.main.temp)+" °c";
        location[0].innerHTML=data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
        {
            seticon(clear_icon);
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
        {
            seticon(cloud_icon);
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
        {
            seticon(drizzle_icon);
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
        {
            seticon(drizzle_icon);
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
        {
            seticon(rain_icon);
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
        {
            seticon(rain_icon);
        }
        else if(data.weather[0].icon==="010d" || data.weather[0].icon==="010n")
        {
            seticon(rain_icon);
        }
        else if(data.weather[0].icon==="013d" || data.weather[0].icon==="013n")
        {
            seticon(snow_icon);
        }
        else
        {
            seticon(clear_icon);
        }

    }
    return (
        <div className="fullbg">
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="enter the city name"/>
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src={search_icon} alt=""/>

                </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt=""/>
            </div>
            <div className="weather-temp">24°c</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon"/>
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon"/>
                    <div className="data">
                        <div className="wind-rate">18km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
            </div>
            </div>
    )
}

export default WeatherApp;