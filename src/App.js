import React from 'react'
import './App.css';
import Details from './component/Details';
import NavComp from './component/NavCopm';
import Weather from './component/Weather';
import axios from 'axios'
import { Row } from 'react-bootstrap';


export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
          weather:[],
          showWeather:false
        }
    }
    updateWeather = async(city)=>{
        let data=await axios.get(`http://localhost:3001/weather?city=${city}`)
        if(data.data.length > 0){
          await this.setState({
            weather:data.data,
            showWeather:true,
          })
        }
        else{
          this.setState({
            showWeather:false
          })
        } 
        console.log(this.state.weather);
      }
    render() {
        return (
            <div className="App w-100">
                    <NavComp/>
                    <Details updateWeather={this.updateWeather}/>
                    <Row className='justify-content-center w-100'>
                    {
                      this.state.showWeather && this.state.weather.map((city,idx) =>
                      <Weather getweather={city} key={idx}/>
                      ) 
                    }
                    </Row>               
            </div>
        )
    }
}