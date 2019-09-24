import React from 'react';
import { WiDaySunny,WiCloud,WiCloudy,WiDayRain, WiDaySnow,WiDayWindy} from 'weather-icons-react';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from '../../../constants/weathers'
import PropTypes from 'prop-types'
import './styles.css'

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "sun",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
};  
const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];
    const iconSize = 76;
    switch(icon)
    {
        case "cloud": return <WiCloud className = "wicon" size={iconSize} color='#c6b03' />
        case "cloudy": return <WiCloudy className = "wicon" size={iconSize} color='#fc6b03' />
        case "sun": return <WiDaySunny className = "wicon" size={iconSize} color='#fc6b03' />
        case "rain": return <WiDayRain className = "wicon" size={iconSize} color='#fc6b03' />
        case "snow": return <WiDaySnow className = "wicon" size={iconSize} color='#fc6b03' />
        case "winsy": return <WiDayWindy className = "wicon" size={iconSize} color='#fc6b03' />
    }
}
const WeatherTemperature = ({temperature, weatherState}) =>(
    <div className = "weatherTemperatureCont">
        {getWeatherIcon(weatherState)}        
        <span className = "temperature">{`${temperature}`}</span>
        <span className = "temperatureType">{` C° `}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;