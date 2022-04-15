import React, { useEffect, useState } from 'react';
import LunchDetails from '../LunchDetails/LunchDetails';

const Lunch = () => {
    const [lunchs, setLunchs] = useState([]);
    useEffect(() => {
        fetch('lunch.json')
        .then(res => res.json())
        .then(data => setLunchs(data))
    }, [])
    return (
        <div className="container">
            <div className="row">
                
                {
                    lunchs.map(lunch => <LunchDetails lunch={lunch} key={lunch.id}></LunchDetails>)
                }
            </div>
        </div>
    );
};

export default Lunch;