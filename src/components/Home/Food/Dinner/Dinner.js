import React, { useEffect, useState } from 'react';
import DinnerDetails from '../DinnerDetails/DinnerDetails';

const Dinner = () => {
    const [dinners, setDinners] = useState([]);
    useEffect(() => {
        fetch('dinner.json')
        .then(res => res.json())
        .then(data => setDinners(data))
    }, [])
    return (
        <div className="container">
                <div className="row">
                    {
                        dinners.map(dinner => <DinnerDetails dinner={dinner} key={dinner.id}></DinnerDetails>)
                    }
                </div>
        </div>
    );
};

export default Dinner;