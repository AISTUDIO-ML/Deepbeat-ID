import { screen } from "assets/images/images";
import myVideo from "assets/intro.mp4";
import { ThemeButton } from "components/components";
import { useRef } from "react";

export const Video = () => {
  let ref = useRef(null);
  const playVideo = () => {
    ref.current.play();
  };
  return (
    <>
      <video
        ref={ref}
        src={myVideo}
        controls
        className="w-full mt-10 rounded-2xl"
        poster={screen}
      />
      <div className="flex justify-center mt-7">
        <ThemeButton onClick={playVideo} content={"Click to Watch"} bgOrange />
      </div>
    </>
  );
};
