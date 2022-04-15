import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Food.css'

const Food = () => {
    return (
        <div>
             <Nav className="justify-content-center">
                <Nav.Item className="m-4">
                    <Link className="nav-item" to="/breakfast">Breakfast</Link>
                </Nav.Item>
                <Nav.Item className="m-4 nav-item">
                    <Link className="nav-item" to="/lunch">Lunch</Link>
                </Nav.Item>
                <Nav.Item className="m-4">
                    <Link className="nav-item" to="/dinner">Dinner</Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Food;