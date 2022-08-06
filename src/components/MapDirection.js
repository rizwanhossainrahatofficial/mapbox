import React, { useEffect } from 'react';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import mapboxgl from 'mapbox-gl'; 
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
// import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

mapboxgl.accessToken = 'pk.eyJ1Ijoicml6d2FuaG9zc2FpbnJhaGF0IiwiYSI6ImNsMXo5eXd3ODAwcHgzY3AyZmVpeDFrY20ifQ.4CzJ9F6UYO8FNxP6r7ggkA';

const MapDirection = () => {
    useEffect(()=>{
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [90.389099, 23.791599],
            zoom: 13
            });
             
            map.addControl(
            new MapboxDirections({
            accessToken: mapboxgl.accessToken
            }),
            'top-left'
            );
    },[])
    return (
        <div>
            <div id="map"></div>
        </div>
    );
};

export default MapDirection;