import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, capital, flags, region, continents, currencies} = props.country;
    let currency;
    if(currencies){
        currency = Object.keys(currencies)[0]
        // console.log(currencies[currency].name);
    }
    return (
        <div className='CountryDiv'>
            <div className='nameNcapital'>
                <h2>{name.common}</h2>
                <h3>{capital}</h3>
            </div>
            <img src={flags.png} alt="" />
            <div className='nameNcapital'>
                <h2>{region}: <small>{continents}</small></h2>
                <h3>{currencies?.[currency]?.name}</h3>
            </div>
        </div>
    );
};

export default Country;
