import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

// this is my login page
const LoginPage = () => {
  const { login } = useContext(AuthContext); 
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: '', password: '' });  // this i used for setup a user data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(form); // this one is send my data to  AuthContext for verifying crendential
      alert('Login successful!');
      navigate('/home'); // if it true i direcly navigate them to home page
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg w-100" style={{ maxWidth: '400px' }}>
        <div className="card-body p-4">
          <h2 className="text-center mb-4">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Enter username"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                required
                className="form-control"
                autoComplete="username"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                className="form-control"
                autoComplete="current-password"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </button>

            {error && <p className="text-danger text-center mt-3 mb-0">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
