import  { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import CardComponent from './cardComponent';

// this one is my home component and currently not used any pacakage for icons
const HomePage = () => {
  const {  user } = useContext(AuthContext);

  return (
    <section className="container">
  <div className="text-center mt-4">
    <h1>Hello, {user?.username} 👋</h1>
    <p className="my-3">
      Welcome every new day with open arms, trust in the journey, and believe that something beautiful is on the horizon.
    </p>
    <h2 className="mb-4">What would you like to do today?</h2>
  </div>

      {/* For now i only add card not redirect them  when click on btn */}
  <div className="row g-2 px-2 px-md-0 pb-5 justify-content-center">
    <div className="col-12 col-sm-6 col-lg-4">
      <CardComponent
        imageSrc="https://media.istockphoto.com/id/1322158059/photo/dumbbell-water-bottle-towel-on-the-bench-in-the-gym.jpg?s=612x612&w=0&k=20&c=CIdh6LPGwU6U6lbvKCdd7LcppidaYwcDawXJI-b0yGE="
        title="Push Beyond Limits"
        text="Your body can stand almost anything. It’s your mind you have to convince."
        buttonText="Get Started"
        buttonLink="#"
      />
    </div>

    <div className="col-12 col-sm-6 col-lg-4">
      <CardComponent
        imageSrc="https://hips.hearstapps.com/hmg-prod/images/running-is-one-of-the-best-ways-to-stay-fit-royalty-free-image-1036780592-1553033495.jpg?resize=1200:*"
        title="Run for Your Mind"
        text="Running isn’t just physical—it’s therapy. Clear your mind, one mile at a time."
        buttonText="Start Running"
        buttonLink="#"
      />
    </div>

    <div className="col-12 col-sm-6 col-lg-4">
      <CardComponent
        imageSrc="https://www.smartlynx.aero/storage/app/uploads/public/6f5/4d4/f77/thumb__1142_0_0_0_auto.jpg"
        title="Wander Often"
        text="Travel is not about the destination—it's about the stories you create along the way."
        buttonText="Explore Now"
        buttonLink="#"
      />
    </div>
  </div>
</section>
  );
};

export default HomePage;
