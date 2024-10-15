import { home_cover } from "assets/images/images";

const Home: React.FC = () => {
  return (
    <div className="myContainer !pt-20 grid lg:grid-cols-2 gap-10">
      <div>
        <p className="lg:text-5xl text-3xl walsheim mt-6 text-themeOrange">
          Electrocardiography
        </p>
        <p className="lg:text-5xl text-3xl walsheim mt-3">For Authentication</p>
        <p className="regular leading-7 mt-7 pb-2 text-sm md:text-base">
          DeepBeat ID sets itself apart by harnessing the cutting-edge
          technology of heart ECG. This innovative approach utilizes the unique
          electrical activity of the heart to authenticate individuals,
          eliminating the need for traditional physical documents like passports
          and IDs. By seamlessly integrating this advanced biometric technology
          into travel authentication processes, DeepBeat ID offers travelers
          unparalleled convenience and security.
        </p>
      </div>
      <div>
        <img src={home_cover} alt="home_cover" />
      </div>
    </div>
  );
};

export default Home;
