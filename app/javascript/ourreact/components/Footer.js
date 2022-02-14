import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function Footer() {
  return (
    <div className="bg-dark py-4 text-muted">
      <Container>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
          <div className="col-md-4 d-flex align-items-center">
            <Link className="navbar-brand mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1" to="/">hela</Link>
            <span className="text-muted">© 2021 Company, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex fs-4">
            <li className="ms-3">
              <a className="text-muted" href="https://www.instagram.com/hela.talk" target="_blank">
                  <FontAwesomeIcon icon={brands('instagram')}/>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="https://www.tiktok.com/@hela.talk" target="_blank">
                <FontAwesomeIcon icon={brands('tiktok')}/>
              </a>
            </li>
          </ul>
        </footer>
      </Container>
    </div>
  );
}

export default Footer;
