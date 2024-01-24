// import 'bootstrap/dist/css/bootstrap.min.css'; 
// import "./navbar.css";
// import { Link } from 'react-router-dom';

// const Navbar = ({ isAuthenticated }) => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">TravelStay</Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/airbnb1">Airbnb 1</Link>
//             </li>
           
//             {/* Add more Airbnb links as needed */}
            
//             {/* Conditional rendering for the login link */}
//             {!isAuthenticated ? (
//               <li className="nav-item">
//                 <Link className="nav-link" to="/login">Login</Link>
//               </li>
//             ) : null}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">TravelStay</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
             
            </li>
        
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





