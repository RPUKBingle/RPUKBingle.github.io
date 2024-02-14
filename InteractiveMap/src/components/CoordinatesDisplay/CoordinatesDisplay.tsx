// MouseCoordinates.tsx
import React, { useState } from 'react';
import { useMapEvents } from 'react-leaflet';

const MouseCoordinates: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<[number, number] | null>(null);

  useMapEvents({
    mousemove: (e) => {
      setMousePosition([e.latlng.lat, e.latlng.lng]);
      console.log(`Mouse Coordinates: ${e.latlng.lat.toFixed(2)}, ${e.latlng.lng.toFixed(2)}`);
    },
  });
  
  return (
    <div className="mouse-coordinates" style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000, background: 'white', padding: '5px' }}>
      {mousePosition && (
        <div>
          Mouse Coordinates: {mousePosition[0].toFixed(2)}, {mousePosition[1].toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default MouseCoordinates;
