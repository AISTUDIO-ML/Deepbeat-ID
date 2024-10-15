import { usecase_1, usecase_2, usecase_3 } from "assets/images/images";

const UseCases: React.FC = () => {
  return (
    <div id="usecases" className="myContainer !pt-28">
      <div className="flex items-center justify-center md:gap-5 gap-3">
        <p className="lg:text-5xl text-3xl basier text-center">
          Use <span className="text-themeOrange">Cases</span>
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 mt-16">
        <div className="flex flex-col justify-around h-[100%]">
          <div>
            <p className="text-lg semibold">USE CASE 1</p>
            <p className="font-bold lexend md:leading-snug md:text-5xl text-2xl mt-3">
              Airport Security
            </p>
          </div>
          <p className="md:leading-9 opacity-70 md:text-lg text-themeBlack mt-5 lg:mt-0">
            In today's fast-paced world, travelers often find themselves bogged
            down by the cumbersome process of airport security checks. With
            DeepBeat ID, this experience is transformed. Imagine breezing
            through airport checkpoints with nothing more than the rhythm of
            your own heartbeat. DeepBeat ID utilizes cutting-edge heart ECG
            technology to provide seamless and secure authentication,
            eliminating the need for physical documents like passports and IDs.
          </p>
        </div>
        <img src={usecase_1} alt="technology" />
      </div>
      <div className="grid lg:grid-cols-2 gap-10 mt-16">
        <img src={usecase_2} alt="technology" />
        <div className="flex flex-col justify-around h-[100%]">
          <div>
            <p className="text-lg semibold">USE CASE 2</p>
            <p className="font-bold lexend md:leading-snug md:text-5xl text-2xl mt-3">
              Border Crossings
            </p>
          </div>
          <p className="md:leading-9 opacity-70 md:text-lg text-themeBlack mt-5 lg:mt-0">
            Border crossings can be a daunting prospect for many travelers, with
            lengthy queues and tedious document checks often causing delays and
            frustration. DeepBeat ID offers a solution to this challenge. By
            leveraging advanced biometric technology, DeepBeat ID enables
            travelers to seamlessly cross borders without the need for
            traditional passports or IDs.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 mt-16">
        <div className="flex flex-col justify-around h-[100%]">
          <div>
            <p className="text-lg semibold">USE CASE 3</p>
            <p className="font-bold lexend md:leading-snug md:text-5xl text-2xl mt-3">
              Hotel Check-ins
            </p>
          </div>
          <p className="md:leading-9 opacity-70 md:text-lg text-themeBlack mt-5 lg:mt-0">
            Arriving at a hotel after a long journey should be a moment of
            relaxation, yet the check-in process can often be a source of stress
            and inconvenience. DeepBeat ID changes the game for hotel check-ins.
            With its innovative heart ECG technology, DeepBeat ID enables
            travelers to verify their identity securely and efficiently,
            eliminating the need for manual document checks and paperwork.
          </p>
        </div>
        <img src={usecase_3} alt="technology" />
      </div>
    </div>
  );
};

export default UseCases;
