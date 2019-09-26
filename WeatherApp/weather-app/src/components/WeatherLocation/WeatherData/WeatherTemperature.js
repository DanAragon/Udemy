import React from 'react';
import { WiDaySunny,WiCloud,WiThunderstorm,WiSnow, WiRaindrops,WiRain} from 'weather-icons-react';
import {CLOUD, THUNDER, SUN, RAIN, SNOW, DRIZZLE} from '../../../constants/weathers'
import PropTypes from 'prop-types'
import './styles.css'

const icons = {
    [CLOUD]: "cloud",
    [THUNDER]: "thunder",
    [SUN]: "sun",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [DRIZZLE]: "drizzle"
};  
const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];
    const iconSize = 76;
    switch(icon)
    {
        case "cloud": return <WiCloud className = "wicon" size={iconSize} color='#c6b03' />
        case "thunder": return <WiThunderstorm className = "wicon" size={iconSize} color='#fc6b03' />
        case "sun": return <WiDaySunny className = "wicon" size={iconSize} color='#fc6b03' />
        case "rain": return <WiRain className = "wicon" size={iconSize} color='#fc6b03' />
        case "snow": return <WiSnow className = "wicon" size={iconSize} color='#fc6b03' />
        case "drizzle": return <WiRaindrops className = "wicon" size={iconSize} color='#fc6b03' />
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
    temperature: PropTypes.string.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;