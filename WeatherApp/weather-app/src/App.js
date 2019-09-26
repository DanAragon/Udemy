import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import './App.css';
import {Grid,Row,Col} from 'react-flexbox-grid'
import LocationList from './components/WeatherLocation/WeatherData/LocationList';
import ForecastExtended from './components/ForecastExtended'

const cities = [
  "Buenos Aires,ar",
  "Bogota,col",
  "Mexico City, mx",
  "Madrid, es",
  "Washington,us",
  "Lima,pe"
]

class App extends Component {
  handleSelectedLocation = city =>{
    console.log(`handleSelectedLocation ${city}`);
  }
  render() { 
    return (
      <Grid>
        <Row>
          <AppBar position ='sticky'>
            <Toolbar>
              <Typography variant ='title' color ='inherit'> 
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
          <div className = "App">
            <LocationList cities= {cities} onSelectedLocation={this.handleSelectedLocation}/> 
          </div>
          </Col>
          <Col xs = {12} md = {6}>
            <Paper elevation ={4}>
            <div className ="details">
            <ForecastExtended></ForecastExtended>
            </div>
            </Paper>
          </Col>
        </Row>
        
      </Grid>
    );
  }
}
 
export default App;

