
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

//  this one is my dashboard page  and currently not used any pacakage for icons
const DashboardPage = () => {
  const { user } = useContext(AuthContext);  // this i used for   access user name 
  return (
    <section className='p-3 text-center mt-4'>
      <h3>Wellcome Back, {user?.username}</h3>
      <p>Here is your Analysis</p>

      <div className="row g-2 px-2 px-md-0 pb-5 justify-content-center">
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="card shadow-sm border-0 p-3">
            <div className="card-body text-center">
              <h5 className="card-title mb-3">Today's Activity Time</h5>
              <h1 className="display-6 fw-bold text-primary">01:23:45</h1>
              <p className="text-muted mb-4">Keep going! You're doing great 💪</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
