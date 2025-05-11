import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '600px',
};

const center = {
  lat: 10.8505,
  lng: 78.6921,
};

// 40 locations: 20 surplus (green), 20 scarcity (red)
const foodLocations = [
  // ✅ Surplus locations
  { id: 1, lat: 13.0827, lng: 80.2707, type: 'surplus', name: 'Chennai' },
  { id: 2, lat: 9.9252, lng: 78.1198, type: 'surplus', name: 'Madurai' },
  { id: 3, lat: 8.7139, lng: 77.7567, type: 'surplus', name: 'Tirunelveli' },
  { id: 4, lat: 11.3424, lng: 77.7282, type: 'surplus', name: 'Erode' },
  { id: 5, lat: 11.6512, lng: 78.1580, type: 'surplus', name: 'Salem' },
  { id: 6, lat: 10.7905, lng: 78.7047, type: 'surplus', name: 'Trichy' },
  { id: 7, lat: 10.7900, lng: 79.1306, type: 'surplus', name: 'Thanjavur' },
  { id: 8, lat: 10.2653, lng: 77.9780, type: 'surplus', name: 'Theni' },
  { id: 9, lat: 11.4102, lng: 79.3248, type: 'surplus', name: 'Villupuram' },
  { id: 10, lat: 9.5797, lng: 77.9629, type: 'surplus', name: 'Virudhunagar' },
  { id: 11, lat: 12.7224, lng: 78.6357, type: 'surplus', name: 'Vaniyambadi' },
  { id: 12, lat: 11.9338, lng: 79.8297, type: 'surplus', name: 'Puducherry' },
  { id: 13, lat: 10.1677, lng: 77.9500, type: 'surplus', name: 'Periyakulam' },
  { id: 14, lat: 10.7992, lng: 78.6866, type: 'surplus', name: 'Srirangam' },
  { id: 15, lat: 11.1026, lng: 77.3498, type: 'surplus', name: 'Pollachi' },
  { id: 16, lat: 12.5735, lng: 78.5855, type: 'surplus', name: 'Tirupattur' },
  { id: 17, lat: 10.3650, lng: 77.9700, type: 'surplus', name: 'Bodinayakanur' },
  { id: 18, lat: 12.2849, lng: 78.8242, type: 'surplus', name: 'Tiruvannamalai' },
  { id: 19, lat: 10.7867, lng: 79.1378, type: 'surplus', name: 'Kumbakonam' },
  { id: 20, lat: 12.8026, lng: 79.1386, type: 'surplus', name: 'Arcot' },

  // ❌ Scarcity locations
  { id: 21, lat: 11.0168, lng: 76.9558, type: 'scarcity', name: 'Coimbatore' },
  { id: 22, lat: 12.9165, lng: 79.1325, type: 'scarcity', name: 'Vellore' },
  { id: 23, lat: 10.1658, lng: 77.9894, type: 'scarcity', name: 'Dindigul' },
  { id: 24, lat: 11.9360, lng: 79.8306, type: 'scarcity', name: 'Cuddalore' },
  { id: 25, lat: 9.2812, lng: 77.5869, type: 'scarcity', name: 'Sivakasi' },
  { id: 26, lat: 12.6950, lng: 77.9996, type: 'scarcity', name: 'Krishnagiri' },
  { id: 27, lat: 10.9440, lng: 79.0037, type: 'scarcity', name: 'Ariyalur' },
  { id: 28, lat: 12.5122, lng: 78.2132, type: 'scarcity', name: 'Dharmapuri' },
  { id: 29, lat: 9.4204, lng: 78.0821, type: 'scarcity', name: 'Ramanathapuram' },
  { id: 30, lat: 10.4930, lng: 77.8237, type: 'scarcity', name: 'Tiruppur' },
  { id: 31, lat: 12.4972, lng: 79.3188, type: 'scarcity', name: 'Chengalpattu' },
  { id: 32, lat: 11.2183, lng: 78.1674, type: 'scarcity', name: 'Namakkal' },
  { id: 33, lat: 12.1047, lng: 78.0164, type: 'scarcity', name: 'Ambur' },
  { id: 34, lat: 11.9200, lng: 79.6500, type: 'scarcity', name: 'Panruti' },
  { id: 35, lat: 9.2756, lng: 79.1187, type: 'scarcity', name: 'Thoothukudi' },
  { id: 36, lat: 12.5523, lng: 80.0246, type: 'scarcity', name: 'Tambaram' },
  { id: 37, lat: 11.7494, lng: 78.1632, type: 'scarcity', name: 'Mettur' },
  { id: 38, lat: 10.3034, lng: 78.0742, type: 'scarcity', name: 'Pudukottai' },
  { id: 39, lat: 11.5484, lng: 79.4834, type: 'scarcity', name: 'Chidambaram' },
  { id: 40, lat: 12.1361, lng: 79.8550, type: 'scarcity', name: 'Tindivanam' },
];

const Map = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={7}
      >
        {foodLocations.map((location) => (
          <Marker
            key={location.id}
            position={{ lat: location.lat, lng: location.lng }}
            title={`${location.name} (${location.type})`}
            icon={{
              url:
                location.type === 'surplus'
                  ? 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
                  : 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
