import React, { useState, ChangeEvent } from 'react';
import { MapContainer, Marker, Popup, ImageOverlay } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import MouseCoordinates from './components/CoordinatesDisplay/CoordinatesDisplay';
import houseIconUrl from './components/Icons/Images/house.png';

interface LocationWithImage {
  name: string;
  position: L.LatLngExpression;
  imageUrl: string;
  additionalText: string;
}


const houseIcon = L.divIcon({
  className: 'custom-house-icon',
  html: `<div style="
    background-color: white; 
    padding: 5px; 
    border-radius: 50%; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    width: 35px;
    height: 35px;
  ">
    <img src="${houseIconUrl}" style="display: block; width: 25px; height: 41px;" />
  </div>`,
  iconSize: [35, 51],
  iconAnchor: [17, 51],
  popupAnchor: [1, -34],
});

const App = () => {
  const [locations, setLocations] = useState<LocationWithImage[]>([]);
  const mapStyle = { height: "100vh", width: "100%", backgroundColor: "#143d6b" };
  const imageUrl = "/gta5map.jpg";
  const imageBounds: L.LatLngBoundsExpression = [[0, 0], [100, 100]];

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const content = e.target ? e.target.result : '';
        try {
          const json = JSON.parse(content as string) as LocationWithImage[];
          setLocations(json);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept=".json" />
      <MapContainer center={[50, 50]} zoom={3.5} scrollWheelZoom={true} style={mapStyle}>
        <MouseCoordinates />
        <ImageOverlay url={imageUrl} bounds={imageBounds} />
        {locations.map((location, index) => (
          <Marker key={index} position={location.position} icon={houseIcon}>
            <Popup maxWidth={1000}>
                <strong>{location.name}</strong><br />
                <img
                  src={location.imageUrl}
                  alt={location.name}
                  style={{
                    maxWidth: '900px', 
                    height: 'auto', 
                    borderRadius: '4px',
                  }}
                />
                <p style={{
                marginTop: '10px',
              }}>{location.additionalText}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer >
    </div >
  );
};

export default App;