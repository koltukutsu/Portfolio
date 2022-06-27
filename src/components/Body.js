// import { First, Second, Third } from "./subComponents/Projects";
import GradientDivider from "./subComponents/Utils";
import Contact from "./subComponents/Contact";

export default function Body() {
  const Introduction = () => (
    <section id="intro">
      <p className="name">
        Hi, my name is <span>Mehmet Semih BABACAN.</span>
      </p>

      <h2>I work on technology.</h2>

      <p>
        I'm a student of double major program at Yildiz Technical University in
        Istanbul and a coder specializing in Deep Learning, Data Science, Data
        Visualizatoin, Automation, Project Management, and the Web.
      </p>

      <p>
        Currently, I'm working at{" "}
        <a href="https://uekae.bilgem.tubitak.gov.tr/en">TUBITAK UEKAE</a>,
        completing Scholarship of Project Internship on Blockchain Technologies,
        making a career based on state-of-the-art technologies.
      </p>
    </section>
  );

  const ProjectsSection = () => (
    <div className="section-blue">
      <section id="projects">
        <h2>Projects I'm proud of</h2>
        <div className="section-blue">
          {/* <First />
          <Second />
          <Third /> */}
        </div>
      </section>
    </div>
  );

  return (
    <div>
      <Introduction />
      <GradientDivider />
      <ProjectsSection />
      <GradientDivider />
      <Contact />
    </div>
  );
}
