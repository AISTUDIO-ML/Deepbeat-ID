import { Footer, NavBar } from "components/components";
import State from "context/state";
import {
  BottomBanner,
  Home,
  JoinEarly,
  TopBanner,
  UseCases,
  WhyChoose,
  HeroSection,
  Features,
  GetToKnow,
} from "sections/sections";

function App() {
  return (
    <State>
      <TopBanner />
      <NavBar />
      <HeroSection />
      <Home />
      <Features />
      <GetToKnow />
      <UseCases />
      <WhyChoose />
      <JoinEarly />
      <BottomBanner />
      <Footer />
    </State>
  );
}

export default App;
