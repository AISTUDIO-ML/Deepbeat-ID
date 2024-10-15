// import { screen } from "assets/images/images";
import { Video } from "./video";

const GetToKnow: React.FC = () => {
  return (
    <div className="myContainer !pt-28">
      <p className="lg:text-5xl text-3xl basier text-center">
        Get To <span className="text-themeOrange">Know More</span>
      </p>
      <Video />
      {/* <img src={screen} alt="video" className="mt-10 w-full h-auto" /> */}
    </div>
  );
};

export default GetToKnow;
