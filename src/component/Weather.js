import React, { Component } from 'react'
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

class Weather extends Component {
    constructor(props){
        super(props);
        this.state={
           
        }
    }
    render() {
        return (
            <Col md={3} className='mb-5'>
            <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Date is {this.props.getweather.date}</Card.Title>
                        <Card.Text>
                        {this.props.getweather.desc}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>         
        )
    }
}

export default Weather
