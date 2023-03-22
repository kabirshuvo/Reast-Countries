import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, capital, flags} = props.country;
    console.log(props.country)
    return (
        <div className='CountryDiv'>
            <div className='nameNcapital'>
                <h2>{name.common}</h2>
                <h3>{capital}</h3>
            </div>
            <img src={flags.png} alt="" />
            <div className='nameNcapital'>
                <h2>{name.common}</h2>
                <h3>{capital}</h3>
            </div>
        </div>
    );
};

export default Country;
