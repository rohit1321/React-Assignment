import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

//  this is my nav bar 
const Navbar = () => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 m-3 rounded-5 ">
      <Link className="navbar-brand" to="/">ReactAssi</Link>

      {/* this is bootstrap btn which used in small device */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </li>
          {user && (
            <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={handleLogout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
