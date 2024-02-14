import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import iconUrl from '../Images/house.png'; // Adjust path as necessary

interface CanBuyIcon {
  position: [number, number];
  popupText: string;
}

interface CanBuyProps {
  canBuyData: CanBuyIcon[];
}

const icon = L.divIcon({
  className: 'custom-icon',
  html: '<div style="background-color: green; display: inline-block;"><img src="' + iconUrl + '" style="width: 25px; height: 41px;"></div>',
});

const extractBoughtStatus = (popupText: string): string => {
  const lines = popupText.split('\n');
  const boughtLine = lines.find(line => line.includes('Bought:'));
  return boughtLine ? boughtLine.split(':')[1].trim() : 'Unknown';
};

const CanBuyInfoBox: React.FC<{
  canBuyNotBoughtData: CanBuyIcon[];
  onSelectHouse: (index: number) => void;
  selectedHouseIndex: number | null;
}> = ({ canBuyNotBoughtData, onSelectHouse, selectedHouseIndex }) => {
  if (canBuyNotBoughtData.length === 0) return null;

  return (
    <div style={{
      position: 'absolute',
      top: '10px',
      left: '10px',
      backgroundColor: 'white',
      padding: '5px',
      maxWidth: '260px',
      maxHeight: '700px', 
      zIndex: 1000,
      overflow: 'auto',
      overflowX: 'hidden'
    }}>
      <h3 style={{ fontSize: '14px' }}>Available Houses</h3>
      {canBuyNotBoughtData.map((item, index) => (
        <div 
          key={index} 
          style={{ 
            fontSize: '12px', 
            marginBottom: '5px',
            cursor: 'pointer',
            backgroundColor: selectedHouseIndex === index ? 'lightgrey' : 'transparent'
          }}
          onClick={() => onSelectHouse(index)}
        >
          <strong>Container Id: {index + 1}</strong>
          <div>Position: {item.position[0]}, {item.position[1]}</div>
          <div>{item.popupText}</div>
        </div>
      ))}
    </div>
  );
};



const CanBuy: React.FC<CanBuyProps> = ({ canBuyData }) => {
  const [selectedHouseIndex, setSelectedHouseIndex] = React.useState<number | null>(null);

  const canBuyNotBoughtData = canBuyData.filter(iconData => extractBoughtStatus(iconData.popupText) === 'No');

  return (
    <>
      {canBuyData.map((iconData, index) => (
        <Marker key={index} position={iconData.position} icon={icon}>
          <Popup>
            <div>
              <strong>Container Id: {index + 1}</strong>
              <br />
              {iconData.popupText.split('\n').slice(1).map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </Popup>
        </Marker>
      ))}
      <CanBuyInfoBox 
        canBuyNotBoughtData={canBuyNotBoughtData} 
        onSelectHouse={setSelectedHouseIndex} 
        selectedHouseIndex={selectedHouseIndex}
      />
    </>
  );
};


export default CanBuy;
