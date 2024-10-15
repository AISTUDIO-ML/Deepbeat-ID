import { deployment, security_orange, settings } from "assets/images/images";

const WhyChoose: React.FC = () => {
  return (
    <div id="whyus" className="myContainer !py-28">
      <div className="flex items-center justify-center md:gap-5 gap-3">
        <p className="lg:text-5xl text-3xl basier text-center">
          Why <span className="text-themeOrange">DeepBeatID</span>
        </p>
      </div>
      <p className="text-center mt-7 regular text-themeGray md:text-lg md:px-5">
        DeepBeat ID emerges as the preeminent selection for travel
        authentication, distinguished by a multitude of compelling factors that
        underscore its superiority in the realm of security and convenience.
      </p>
      <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20">
        <div>
          <div className="flex h-28 justify-center">
            <img src={settings} alt="icon" />
          </div>
          <p className="semibold text-themeBlack mt-7 text-xl">
            Cutting-Edge Technology
          </p>
          <p className="mt-5 regular text-sm leading-6 text-themeBlack">
            DeepBeat ID harnesses state-of-the-art heart ECG technology,
            offering a level of authentication precision and security unmatched
            by traditional methods.
          </p>
        </div>
        <div>
          <div className="flex h-28 justify-center">
            <img src={deployment} alt="icon" />
          </div>
          <p className="semibold text-themeBlack mt-7 text-xl">
            Future-Proof Solution
          </p>
          <p className="mt-5 regular text-sm leading-6 text-themeBlack">
            DeepBeat ID is at the forefront of innovation in travel
            authentication, paving the way for a future where biometric
            technology plays a central role in securing travel experiences.
          </p>
        </div>
        <div>
          <div className="flex h-28 justify-center">
            <img src={security_orange} alt="icon" />
          </div>
          <p className="semibold text-themeBlack mt-7 text-xl">
            Enhanced Security
          </p>
          <p className="mt-5 regular text-sm leading-6 text-themeBlack">
            By leveraging biometric data directly from the heart, DeepBeat ID
            provides a robust layer of security, significantly reducing the risk
            of identity theft &fraud.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
