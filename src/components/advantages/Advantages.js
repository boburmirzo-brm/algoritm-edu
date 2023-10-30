import React from 'react';
import './Advantages.css';
import { advantages } from '../../data/STATIC_DATA';

const Advantages = () => {
    return (
        <div className="advantages">
            {
                advantages?.map(
                    advantage => 
                    <div key={advantage.id} className="advantage">
                        <div className="advantage__head">
                            <img className="advantage__image" src={advantage.image} alt={advantage.title} />
                            <h1 className="advantage__title">{advantage.title}</h1>
                        </div>
                        <p className="advantage__description">{advantage.description}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Advantages
