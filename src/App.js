import React, { useState } from 'react';
import Navbar from './Navbar';
import MapComponent from './MapComponent';
import RentalForm from './RentalForm';
import RentalList from './RentalList';
import AuthPage from './AuthPage';
import Airbnb from './Airbnb';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  // Function to handle rental submission
  const handleRentalSubmit = () => {
    // Handle rental submission logic here
  };

  return (
    <div className="App">
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />

      {/* Conditionally render components based on authentication */}
      {isAuthenticated ? (
        <>
          <RentalForm onRentalSubmit={handleRentalSubmit} />
          <RentalList />
        </>
      ) : (
        <>
          <AuthPage onLogin={handleLogin} />
          <Airbnb />
        </>
      )}

      <MapComponent />
    </div>
  );
}

export default App;



// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import MapComponent from './MapComponent';
// import RentalForm from './RentalForm';
// import RentalList from './RentalList';
// import AuthPage from './AuthPage';
// import Airbnb from './Airbnb';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = (token) => {
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//   };

//   const handleRentalSubmit = () => {
//     // Handle rental submission logic here
//   };

//   return (
//     <div className="App">
//       <Navbar onLogout={handleLogout} />
//       <Airbnb />

//       {!isAuthenticated ? (
//         <AuthPage onLogin={handleLogin} />
//       ) : (
//         <>
//           <RentalForm onRentalSubmit={handleRentalSubmit} />
//           <RentalList />
//         </>
//       )}

//       <MapComponent />
//     </div>
//   );
// }

// export default App;

