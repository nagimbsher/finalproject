import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ApartmentDetails() {
  const { id } = useParams(); // Extract the apartment ID from the URL

  const [apartment, setApartment] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch apartment details based on the ID (use `id` in your fetch URL)
    // Example: fetch(`/api/apartments/${id}`)
    fetch(`https://myserver-9ut2.onrender.com/apartment/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setApartment(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!apartment) {
    return <div>No apartment data available.</div>;
  }

  return (
    <div>
      <h2>Apartment Details</h2>
      <p>ID: {apartment.id}</p>
      <p>Title: {apartment.title}</p>
      {/* Display other apartment details here */}
    </div>
  );
}

export default ApartmentDetails;


// import React from 'react';
// import { useParams } from 'react-router-dom';

// function ApartmentDetails({ apartments }) {
//   const { id } = useParams();
//   const apartment = apartments.find((apt) => apt.id === parseInt(id));

//   return (
//     <div>
//       {apartment ? (
//         <div>
//           <p>Apartment ID: {apartment.id}</p>
//           <p>Location: {apartment.location}</p>
//           <p>Status: {apartment.isAvailable ? 'Available' : 'Not Available'}</p>
//         </div>
//       ) : (
//         <p>Apartment not found</p>
//       )}
//     </div>
//   );
// }

// export default ApartmentDetails;



// import React from 'react';
// import { useParams } from 'react-router-dom';

// function ApartmentDetails({ apartments }) {
//   const { id } = useParams();
//   const apartment = apartments.find((apt) => apt.id === parseInt(id));

//   return (
//     <div>
//       {apartment ? (
//         <div>
//           <p>Apartment ID: {apartment.id}</p>
//           <p>Location: {apartment.location}</p>
//           <p>Status: {apartment.isAvailable ? 'Available' : 'Not Available'}</p>
//         </div>
//       ) : (
//         <p>Apartment not found</p>
//       )}
//     </div>
//   );
// }

// export default ApartmentDetails;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ApartmentList() {
//   const [apartments, setApartments] = useState([]);

//   useEffect(() => {
//     const fetchApartments = async () => {
//       try {
//         const response = await axios.get('https://myserver-9ut2.onrender.com/apartments'); 
//         setApartments(response.data);
//       } catch (error) {
//         console.error('There was an error fetching the apartments:', error);
//       }
//     };

//     fetchApartments();
//   }, []);

//   return (
//     <div>
//       {apartments.map(apartment => (
//         <div key={apartment.id}>
//           <p>Apartment ID: {apartment.id}</p>
//           <p>Location: {apartment.location}</p>
//           <p>Status: {apartment.isAvailable ? 'Available' : 'Not Available'}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ApartmentList;



// import { useParams } from "react-router-dom";
// import { useEffect, useState } from 'react';

// const ApartmentPage = () => {
//     const params = useParams();
//     const [apartmentData, setApartmentData] = useState(null);

//     useEffect(() => {
//         const fetchListingInfo = async () => {
//             try {
//                 const res = await fetch(`http://localhost:3001/apartments/${params.id}`);
//                 if (!res.ok) {
//                     throw new Error(`HTTP error! status: ${res.status}`);
//                 }
//                 const data = await res.json();
//                 setApartmentData(data);
//             } catch (error) {
//                 console.error("Fetching error: ", error);
//             }
//         };

//         fetchListingInfo();
//     }, [params.id]);

//     return (
//         <div>
//             Hello, this is the page of apartment {params.id}
//             {apartmentData && <div>{/* Display your apartment data here */}</div>}
//         </div>
//     );
// };

// export default ApartmentPage;




// import { useParams } from "react-router-dom";
// import {useEffect,useState} from 'react'
// const ApartmentPage= ()=>{
//     const params=useParams()
//     console.log(params)
//     useEffect(()=>{
//         const fetchListingInfo= async()=>{
//             cont res=await fetch("localhost:3001/id")
//         }
//     },[])
//     return(
//         <div>Hello, this is the page of apartment {params.id}</div>
//     )
// }
// export default ApartmentPage