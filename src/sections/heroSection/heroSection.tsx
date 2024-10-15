import { beat } from "assets/icons/icons";
import { dots, hero_section_cover } from "assets/images/images";
import { ThemeButton } from "components/components";

const HeroSection: React.FC = () => {
  return (
    <div className="myContainer !py-10">
      <div className="text-center">
        <div className="relative">
          <img src={dots} alt="dots" className="absolute" />
        </div>
        <p className="lg:text-5xl text-3xl walsheim mt-6 text-themeOrange">
          Revolutionizing <span className="text-black">Travel</span>
        </p>
        <p className="lg:text-5xl text-3xl walsheim md:mt-6">
          Authentication with <span className="text-themeOrange">Heart</span>
        </p>
        <p className="md:text-lg text-themeLightBlue pt-5 md:pt-10 pb-3 md:pb-7">
          Unlocking Seamless Travel Experiences, One Heartbeat at a Time
        </p>
        <div className="flex justify-center">
          <p className="text-themeLightBlue text-xs leading-6 md:w-3/4">
            DeepBeat ID revolutionizes travel authentication with heart ECG
            technology, eliminating the need for physical documents. It offers
            seamless journeys through airport checkpoints and beyond, ensuring
            convenience and security. Join us in shaping the future of travel
            authentication, where every heartbeat unlocks new possibilities."
          </p>
        </div>
        <div className="mt-7 flex items-center md:gap-5 gap-3 justify-center">
          <div className="rounded-full px-3 h-12 semibold flex items-center gap-2 bg-themeLightBlue/15 text-themeLightBlue">
            <img src={beat} alt="icon" width={40} />
            <p>DeepBeat ID</p>
          </div>
          <ThemeButton content={"Get Started"} bgOrange />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <img src={hero_section_cover} alt="cover_image" width={550} />
      </div>
    </div>
  );
};

export default HeroSection;
