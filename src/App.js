import React, { useState } from 'react';
import Navbar from './Navbar';
import MapComponent from './MapComponent';
import RentalForm from './RentalForm';
import RentalList from './RentalList';
import AuthPage from './AuthPage';
import Airbnb from './Airbnb';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (token) => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleRentalSubmit = () => {
    // Handle rental submission logic here
  };

  return (
    <div className="App">
      <Navbar onLogout={handleLogout} />
      <Airbnb />

      {!isAuthenticated ? (
        <AuthPage onLogin={handleLogin} />
      ) : (
        <>
          <RentalForm onRentalSubmit={handleRentalSubmit} />
          <RentalList />
        </>
      )}

      <MapComponent />
    </div>
  );
}

export default App;

