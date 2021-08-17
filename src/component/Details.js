import axios from 'axios'
import React, { Component } from 'react'
import {Form, Button, Spinner} from 'react-bootstrap'
class Details extends Component {
    constructor(props){
        super(props)
        this.state={
            token:process.env.React_APP_TOKENKEY,
            city:'irbid',
            cityInfo:{},
            show:false,
            src:''
        }
    }
    getLoction=async(e) =>{
     e.preventDefault();
     this.props.updateWeather(e.target.parentElement.cityText.value,)
     if (e.target.parentElement.cityText.value === '') {
         e.target.parentElement.cityText.style.backgroundColor='red'
         return;
        }

     await this.setState({
        city:e.target.parentElement.cityText.value,
     })
     let site=await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${this.state.token}&q=${this.state.city}&format=json`)
     await this.setState({
        cityInfo:site['data'][0],
     })
     await this.setState({
        src:`https://maps.locationiq.com/v3/staticmap?key=${process.env.React_APP_TOKENKEY}&center=${this.state.cityInfo.lat},${this.state.cityInfo.lon}&zoom=12&size=400x400&markers=icon:large-red-cutout|${this.state.cityInfo.lat},${this.state.cityInfo.lon}|${this.state.cityInfo.lat},${this.state.cityInfo.lon}`,
        show:true 
     })
     }
     changeText=(e)=>{
        e.target.parentElement.cityText.style.backgroundColor='white'
     }
    render() {
        return (
            <div className="mx-auto d-flex justify-content-between p-5" style={{width:'100%',backgroundColor:'rgba()'}}>
                        <Form className="text-center">
                        <Spinner animation="border" variant="primary" />
                        <Spinner animation="border" variant="secondary" />
                        <Spinner animation="border" variant="success" />
                        <Spinner animation="border" variant="danger" />
                        <br/>
                        <Form.Label style={{fontSize:'30px',color:'	#dc143c'}} className='my-3'>Explorer City from Here</Form.Label>
                        <br/>
                        <Spinner animation="border" variant="warning" />
                        <Spinner animation="border" variant="info" />
                        <Spinner animation="border" variant="secondary" />
                        <Spinner animation="border" variant="dark" />
                        <Form.Control type="text" placeholder="Enter the City" name="cityText" onChange={this.changeText} className='mt-4'/>
                        <Button variant="warning" type="submit" onClick={this.getLoction} className="d-block my-5">Submit</Button>
                        {this.state.show === true ?
                        <Form.Text className="text-muted" style={{fontSize:'25px'}}>
                        City is {this.state.city}<br/>
                        Lat is {this.state.cityInfo.lat} <br/>
                        Lon is is {this.state.cityInfo.lon} <br/>
                        </Form.Text>:''
                        }
                </Form>
                {
                            this.state.show &&
                            <div>
                                 <img src={this.state.src} alt={this.state.name}/>
                            </div>                          
                        }
            </div>
        )
    }
}

export default Details
