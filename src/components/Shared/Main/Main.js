import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './Main.css'

const Main = () => {
    return (
        <div className="main-container container-fluid d-flex align-items-center justify-content-center">
            
            <div>
            <h2>Best Food Waiting For Your Belly</h2>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Search Food Items"
                />
                <Button className="btn btn-danger">
                Search
                </Button>
            </InputGroup>
            </div>
        </div>
    );
};

export default Main;