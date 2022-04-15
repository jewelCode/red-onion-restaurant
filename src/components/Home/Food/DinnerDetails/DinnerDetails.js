import React from 'react';
import { Button, Card } from 'react-bootstrap';

const DinnerDetails = (props) => {
    const {id, name, description, img, price} = props.dinner;
    return (
        <div className="col-lg-4 g-4">
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

export default DinnerDetails;