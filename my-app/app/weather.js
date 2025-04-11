"use client";
import React, { useEffect, useState } from "react";

const Weather = ({ onIconUpdate }) => {
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        try {
            const apiKey = "9c25f858aae843b1b64172935251104";
            const city = "New York"; 
            const response = await fetch(
                `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
            );
            const data = await response.json();
            setWeather(data);
            onIconUpdate?.(data.current.condition.icon);
        } catch (error){
            console.error(error);
        }
    };

    useEffect(() => {
        fetchWeather();
    }, []);

    if (!weather){
        return <div>Loading...</div>;
    }

    return(
        <div>
            <h1>oooh omg weather!!</h1>
            <h2>Location: {weather.location.name}</h2>
            <p>Temperature: {weather.current.temp_f}F</p>
            <p>Condition: {weather.current.condition.text}</p>
        </div>
    );
};

export default Weather;