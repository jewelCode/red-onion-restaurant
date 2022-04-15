import React, { useEffect, useState } from 'react';
import BreakFastDetails from '../BreakFastDetails/BreakFastDetails';

const BreakFast = () => {
    const [breakFasts, setBreakFasts] = useState([]);
    useEffect(() => {
        fetch('breakfast.json')
        .then(res => res.json())
        .then(data => setBreakFasts(data))
    }, [])
    return (
        <div className="container">
            <div className="row">

                {
                    breakFasts.map(breakFast => <BreakFastDetails breakFast={breakFast} key={breakFast.id}></BreakFastDetails>)
                }
                </div>
        </div>
    );
};

export default BreakFast;