import React, { useEffect, useState } from 'react';
import "../css/\style.css";

function TempApp() {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("pune");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=99919269fb6e57d66410ec004a3d6dcc`;
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            setCity(resJson.main);
        };
        fetchApi();
    }, [search])

    return (
            <div className='container'>
                <h1 className='heading'>Wheather App</h1>
                <div className='box'>
                    <div className='inputData'>
                        <input
                            type="search"
                            value={search}
                            className='inputField'
                            onChange={(event) => { setSearch(event.target.value)}}
                        />
                    </div>

                    {!city ? (
                        <p>No Data Found</p>
                    ) : (
                        <div className='info'>
                        <h2 className='location'>
                            <i className="fas fa-street-view"></i>{search}</h2>
                        <h1 className='temp'>{city.temp}°C</h1>
                        <h3 className='tempin_max'>Min : {city.temp}°C </h3>
                        <h3 className='tempin_max'>Max : {city.temp}°C </h3>
                    </div>
                    )}

                </div>
            </div>
    )
}

export default TempApp;