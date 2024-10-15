import { heart } from "assets/images/images";
import { ThemeButton } from "components/components";

const BottomBanner: React.FC = () => {
  return (
    <div className="myContainer !pt-10 !pb-32 grid md:grid-cols-2 gap-10">
      <img src={heart} alt="heart" />
      <div className="flex flex-col justify-around">
        <p className="lg:text-4xl text-3xl walsheim md:text-end text-center">
          Ready To Experience The Future Of{" "}
          <span className="text-themeOrange">DeepbeatID</span> Firsthand?
        </p>
        <p className="md:text-end text-center walsheim font-light opacity-70 leading-8 mt-5 md:mt-0">
          Take the first step towards seamless journeys by exploring our demo
          today. See DeepBeat ID in action and discover how our revolutionary
          technology can transform your travel experience. Click below to
          schedule your demo now and unlock a world of convenience and security.
        </p>
        <div className="flex md:justify-end justify-center mt-5 md:mt-0">
          <ThemeButton content={"Get Demo"} bgOrange />
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
