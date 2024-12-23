"use client";
import MapGL, { Marker, Popup } from 'react-map-gl';
import { useState } from 'react';
import { getCenter } from 'geolib';
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image';
import mapMarker from "../../Images/mapMarker.png";

export default function Map({ searchResultsData }) {

  const [selectedLocation, setSelectedLocation] = useState(null);

  const coordinates = searchResultsData.map((listing) => {
    return { longitude: listing.long, latitude: listing.lat };
  })
  const center = getCenter(coordinates);
  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    zoom: 11,
    longitude: center.longitude,
    latitude: center.latitude,
  });
  return (
    <MapGL {...viewPort}
      mapStyle='mapbox://styles/kareem2002shimes/cl9ogfais007a14o2dcf0byo6'
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
      onMove={(nextViewPort) =>
        setViewPort(prev => {
          return {
            ...prev,
            longitude: nextViewPort.viewState.longitude,
            latitude: nextViewPort.viewState.latitude,
          }
        })
      } >
      {searchResultsData.map((listing) => (
        <div onClick={() => {
          setSelectedLocation(listing)
        }} key={listing.long}>
          <Marker longitude={listing.long} latitude={listing.lat}>
            <Image src={mapMarker} alt="mapMarker" width={24} height={24} className="animate-bounce" />
          </Marker>
          {
            selectedLocation?.long === listing.long ? <Popup closeOnClick={false}
              onClose={() => { setSelectedLocation(null) }}
              longitude={listing.long}
              latitude={listing.lat}
            > {listing.title}</Popup> : null
          }
        </div>
      ))}
    </MapGL>

  )
}
