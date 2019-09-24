import React from 'react';
import { WiDaySunny,WiCloud,WiCloudy,WiDayRain, WiDaySnow,WiDayWindy} from 'weather-icons-react';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from '../../../constants/weathers'
import PropTypes from 'prop-types'

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
    switch(icon)
    {
        case "cloud": return <WiCloud size={36} color='#000' />
        case "cloudy": return <WiCloudy size={36} color='#000' />
        case "sun": return <WiDaySunny size={36} color='#000' />
        case "rain": return <WiDayRain size={36} color='#000' />
        case "snow": return <WiDaySnow size={36} color='#000' />
        case "winsy": return <WiDayWindy size={36} color='#000' />
    }
}
const WeatherTemperature = ({temperature, weatherState}) =>(
    <div>
        {getWeatherIcon(weatherState)}        
        <span>{`${temperature} C° `}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;