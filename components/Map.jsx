import ReactMapGL, { Marker } from 'react-map-gl';
import React from 'react'
import Image from 'next/image';

const Map = ({ lat, lng }) => {
    return (
        <ReactMapGL
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxApiAccessToken='pk.eyJ1IjoiandpbGxzIiwiYSI6ImNraHNhMndrZTIyaWYydm14enJ6bXBsaHkifQ.7gTH0B8N10wCDHE1OjxU4Q'
            latitude={lat}
            longitude={lng}
            zoom={13}
            width='inherit'
            height='inherit'
        >
            <Marker latitude={lat} longitude={lng} offsetLeft={-20} offsetTop={-10}>
                <Image src='/icon-location.svg' width='50px' height='60px' />
            </Marker>
        </ReactMapGL>
    )
}

export default Map