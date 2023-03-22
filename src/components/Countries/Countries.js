import './Countries.css';

import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect( () => {
        const URL = "https://restcountries.com/v3.1/all";
        fetch(URL).then(resp=>resp.json()).then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Moving Arround The World: <span>({countries.length})</span> Countries</h1>
            
            <div className='CountriesDIV'>
            {
                countries.map(country => 
                <Country 
                    country={country}
                    key={country.cca3}
                ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;
