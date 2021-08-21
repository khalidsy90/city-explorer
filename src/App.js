import React from 'react'
import './App.css';
import Details from './component/Details';
import NavComp from './component/NavCopm';
import axios from 'axios'
import Movies from './component/Movies';
import Weathers from './component/Weathers';


export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
          weather:[],
          showWeather:false,
          aflam:[],
          showAflam:false
        }
    }
   newWeather=async (city) =>{
     console.log(city);
      let data=await axios(`${process.env.REACT_APP_SERVER_LINK}/weather?city=${city}`)
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
    }
    newAflam=async (city) =>{
      let data=await axios(`${process.env.REACT_APP_SERVER_LINK}/movies?query=${city}`)
      if(data.data.length > 0){
        await this.setState({
          aflam:data.data,
          showAflam:true,
        })
      }
      else{
        this.setState({
          showAflam:false,
          aflam:[]
        })
      } 
    }

    render() {
      console.log(this.state.weather);
        return (
            <div className="App w-100 text-center mr-0 justify-content-center align-items-center">
                    <NavComp/>
                    <Details newWeather={this.newWeather} newAflam={this.newAflam}/>
                    <Weathers Weather={this.state.weather} showWeather={this.state.showWeather}/>
                    <Movies aflam={this.state.aflam} showAflam={this.state.showAflam}/>
            </div>
        )
    }
}