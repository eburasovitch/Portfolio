import IndexPage from "./pages";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import CvPage from "./pages/cvPage";

const AllPages = () => {
  return (
    <div className="w-screen h-screen overflow-y-scroll">
      <section id="home" className="snap-start"><IndexPage /></section>
      <section id="about" className="snap-start"><AboutPage /></section>
      <section id="contact" className="snap-start"><ContactPage /></section>
      <section id="cv" className="snap-start"><CvPage /></section>
    </div>
  );
};

export default AllPages;
