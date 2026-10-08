import Hero from "../Components/Hero";
import About from "../Components/About";
import Skill from "../Components/Skill";
import Projects from "../Components/Projects";
import Journey from "../Components/Journey";
import Contact from "../Components/Contact";

import Reveal from "../Components/Reveal";


function Home() {

  return (

    <>

      <section id="hero">

        <Reveal>
          <Hero />
        </Reveal>

      </section>


      <section id="about">

        <Reveal>
          <About />
        </Reveal>

      </section>


      <section id="skills">

        <Reveal>
          <Skill />
        </Reveal>

      </section>


      <section id="projects">

        <Reveal>
          <Projects />
        </Reveal>

      </section>


      <section id="journey">

        <Reveal>
          <Journey />
        </Reveal>

      </section>


      <section id="contact">

        <Reveal>
          <Contact />
        </Reveal>

      </section>

    </>

  );

}

export default Home;