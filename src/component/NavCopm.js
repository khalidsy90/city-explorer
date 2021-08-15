import React, { Component } from 'react'
import {Navbar, Container} from 'react-bootstrap'

export class NavComp extends Component {
    render() {
        return (
            <div>
              <Navbar style={{backgroundColor:'rgba(197, 197, 190, 1)'}}>
                    <Container>
                        <Navbar.Brand href="#home">City Explorer</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Explorer the World
                        </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
            </div>
        )
    }
}

export default NavComp
