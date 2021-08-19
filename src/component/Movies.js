import React, { Component } from 'react'
import {Card, Col} from 'react-bootstrap'

export class Movies extends Component {
    constructor(props){
        super(props)
        this.setState={

        }
    }
    //title,overview,vote_average,vote_count,poster_path,popularity,release_date
    render() {
        return (
            <Col md={4} className='mb-5 '>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.getaflam.poster_path}/>
                    <Card.Body>
                        <Card.Title>{this.props.getaflam.title}</Card.Title>
                        <Card.Text>
                        {this.props.getaflam.overview}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default Movies
