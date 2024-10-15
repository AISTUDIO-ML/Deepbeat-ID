import { beat, right_white } from "assets/icons/icons";
import { ThemeButton } from "components/components";

const Features: React.FC = () => {
  return (
    <div id="features" className="myContainer !pt-28">
      <p className="lg:text-5xl text-3xl basier text-center">
        Key <span className="text-themeOrange">Features</span>
      </p>
      <div className="grid lg:grid-cols-3 gap-10 mt-14">
        <div>
          <div className="rounded-full h-12 semibold flex items-center text-xl gap-2 text-themeLightBlue">
            <img src={beat} alt="icon" width={40} />
            <p>DeepBeat ID</p>
          </div>
          <p className="regular mt-5 leading-7">
            DeepBeat ID introduces a host of revolutionary features poised to
            transform the landscape of travel authentication. At its core lies
            the groundbreaking utilization of heart ECG technology, providing
            travelers with an unprecedented level of convenience and security.{" "}
          </p>
          <ThemeButton
            className="mt-5"
            bgOrange
            content={
              <div className="flex items-center gap-3">
                <p>Get Started</p>
                <img src={right_white} alt="icon" width={9} />
              </div>
            }
          />
        </div>
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-5">
          <div className="bg-lightBlue p-5 rounded-lg">
            <p className="walsheim text-xl">Heart ECG Authentication</p>
            <p className="regular mt-5 text-sm">
              DeepBeat ID utilizes the unique electrical activity of the heart
              for seamless and reliable authentication, eliminating the need for
              physical documents.
            </p>
          </div>
          <div className="bg-lightPink p-5 rounded-lg">
            <p className="walsheim text-xl">Enhanced Security</p>
            <p className="regular mt-5 text-sm">
              By leveraging biometric data directly from the heart, DeepBeat ID
              offers a higher level of security, reducing the risk of identity
              theft and fraud.
            </p>
          </div>
          <div className="bg-lightPink p-5 rounded-lg">
            <p className="walsheim text-xl">Effortless Travel</p>
            <p className="regular mt-5 text-sm">
              With DeepBeat ID, travelers can breeze through airport checkpoints
              and other travel security measures without the hassle of
              presenting passports or IDs.
            </p>
          </div>
          <div className="bg-lightBlue p-5 rounded-lg">
            <p className="walsheim text-xl">Future-Proof Technology</p>
            <p className="regular mt-5 text-sm">
              DeepBeat ID represents the forefront of innovation in travel
              authentication, paving the way for a future where biometric
              technology plays a central role in securing travel experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
