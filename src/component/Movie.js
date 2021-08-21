import React, { Component } from 'react'
import {Card, Col} from 'react-bootstrap'

class Movie extends Component {
    constructor(props){
        super(props)
        this.setState={

        }
    }
    render() {
        return (
            <Col md={4} className='mb-5 '>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top"/>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default Movie