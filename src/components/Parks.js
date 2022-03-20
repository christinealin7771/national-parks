import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Parks.css'

const Parks = () => {
    const[data, setParks] = useState({allParks: [] });
    const {id} = useParams();

    useEffect(async () => {
        const result = await axios(
            'https://developer.nps.gov/api/v1/activities/parks?api_key=ytNVauyImC2nnfIzXTiY2l5jkKmYubfpneyD6X8C',
        )
        setParks(result.data);
    });

    return (
        <div>
            <h2> {data.allParks[0] && data.allParks[0].fullName} </h2>
            {id}
        </div>
    )
}

export default Parks
