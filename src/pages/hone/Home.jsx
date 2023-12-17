import Banner from "../../components/banner/Banner";
import Contact from "../../components/banner/contact/Contact";
import Education from "../../components/education/Education";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/skills/Skills";

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            <Contact></Contact>
        </div>
    );
};

export default Home;