import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const Footer = () => (
    <footer>
      <h2>Mehmet Semih BABACAN &middot; Student</h2>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/mehmet-semih-babacan-5673841b9/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
            <span class="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/koltukutsu"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithubSquare} aria-hidden="true" />
            <span class="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a href="mailto:m.semihbabacan@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
            <span class="sr-only">Email</span>
          </a>
        </li>
      </ul>
      <p>
        <small>&copy; 2022 Mehmet Semih BABACAN. All rights reserved.</small>
      </p>
    </footer>
  );
  return <Footer />;
}
