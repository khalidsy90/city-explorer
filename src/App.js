import React from 'react'
import './App.css';
import Details from './component/Details';
import NavComp from './component/NavCopm';
import Weather from './component/Weather';
import axios from 'axios'
import { Row } from 'react-bootstrap';
import Movies from './component/Movies';


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
      console.log(data.data);
      if(data.data.length > 0){
        await this.setState({
          aflam:data.data,
          showAflam:true,
        })
        // console.log(this.state.aflam);
      }
      else{
        this.setState({
          showAflam:false
        })
      } 
    }
    // updateWeather = async(city)=>{
    //     let data=await axios.get(`${process.env.REACT_APP_SERVER_LINK}/weather?city=${city}`)
    //     if(data.data.length > 0){
    //       await this.setState({
    //         weather:data.data,
    //         showWeather:true,
    //       })
    //     }
    //     else{
    //       this.setState({
    //         showWeather:false
    //       })
    //     } 
    //     console.log(this.state.weather);
    //   }
    render() {
        return (
            <div className="App w-100 text-center mr-0 justify-content-center align-items-center">
                    <NavComp/>
                    <Details updateWeather={this.updateWeather} newWeather={this.newWeather} newAflam={this.newAflam}/>
                    <Row className='justify-content-center w-100 p-5'>
                    {
                      this.state.showWeather && this.state.weather.map((city,idx) =>
                      <Weather getweather={city} key={idx}/>
                      ) 
                    }
                    </Row>

                    <Row className="justify-content-center w-100 p-5" style={{width:'100%',textAlign:"center"}}>
                    THe Moives
                    {
                      this.state.showAflam && this.state.aflam.map((film,idx)=>
                      <Movies getaflam={film} key={idx}/>
                      )
                    }
                    </Row>               
            </div>
        )
    }
}