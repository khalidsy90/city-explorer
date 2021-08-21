import React, { Component } from 'react'
import {Row} from 'react-bootstrap'
import Movie from './Movie';

export class Movies extends Component {
    constructor(props){
        super(props)
        this.state={
            aflam:this.props.aflam ,
            showAflam:false
        }
    }
    render() {
        return (
                <Row className="justify-content-center w-100 p-5" style={{width:'100%',textAlign:"center"}}>
                     {
                      this.state.showAflam && this.state.aflam.map((film,idx)=>
                      <Movie  key={idx}/>)
                     }
                </Row>
        )
    }
}

export default Movies
