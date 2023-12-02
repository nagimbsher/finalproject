import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const GoogleMapComponent = ({ listings = [] }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '100%' }}
      center={{ lat: 31.771959, lng: 35.217018 }} // Default center, you can set it to the first listing's location
      zoom={8}
    >
      {listings.map(listing => (
        <Marker
          key={listing.id}
          position={{ lat: listing.latitude, lng: listing.longitude }}
          label={listing.apartment.toString()}
        />
      ))}
    </GoogleMap>
  );
};

export default GoogleMapComponent;



// import React, { useState } from 'react';
// import { LoadScript } from '@react-google-maps/api';
// import GoogleMapComponent from './GoogleMapComponent';
// import './MapComponent.css';

// const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

// const MapComponent = ({ listings = [] }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSearch = () => {
//     console.log('Search for:', searchTerm);
//   };

//   const filteredListings = listings.filter(listing =>
//     listing.apartment.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="listing-container">
    
//       <div className="search-bar sticky-search-bar">
//         <input type="text" placeholder="Search listings" value={searchTerm} onChange={handleSearchChange} />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       <div className="main-content">
//         {filteredListings.map(listing => (
//           <div key={listing.id}>
//             <h3>{listing.apartment}</h3>
//           </div>
//         ))}
//       </div>
//       <div className="google-map-container">
//         <LoadScript googleMapsApiKey={googleMapsApiKey}>
//           <GoogleMapComponent listings={filteredListings} />
//         </LoadScript>
//       </div>
//     </div>
//   );
// };

// export default MapComponent;


