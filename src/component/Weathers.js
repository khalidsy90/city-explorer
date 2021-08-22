import React, { Component } from 'react'
import {Row} from 'react-bootstrap'
import Weather from './Weather'
export class Weathers extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
   
    render() {
        return (
            <Row className='justify-content-center w-100 p-5 '>
                {
                      this.props.showWeather && this.props.Weather.map((city,idx) =>
                      <Weather getweather={city} key={idx}/>
                      ) 
                }
            </Row>
        )
    }
}

export default Weathers
