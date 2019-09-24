import React from 'react';
import WeatherExtraInfo from './WeateherExtraInfo'
import WeatherTemperature from './WeatherTemperature'
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from '../../../constants/weathers'

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature ={30} weatherState={RAIN} />
        <WeatherExtraInfo humidity = {80} wind = {"10 m/s"}/>
    </div>
);

export default WeatherData;