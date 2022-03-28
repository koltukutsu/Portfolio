import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const NavigationBar = () => (
    <nav>
      <ul>
        <li>
          <h1>
            <a href="index.html">
              <span className="fas fa-code" aria-hidden="true"></span> Mehmet
              Semih BABACAN
            </a>
          </h1>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mehmet-semih-babacan-5673841b9/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/koltukutsu"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithubSquare} aria-hidden="true" />
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.dropbox.com/s/isxwl2kkj5uoiu7/Resume.pdf?dl=0"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );

  return <NavigationBar />;
}
