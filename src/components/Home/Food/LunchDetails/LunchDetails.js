import React from 'react';
import { Button, Card } from 'react-bootstrap';

const LunchDetails = (props) => {
    const {id, name, description, img, price} = props.lunch;
    return (
        <div className="col-md-4 g-4">
            <Card className="h-100" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default LunchDetails;