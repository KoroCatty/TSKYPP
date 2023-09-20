// BOOTSTRAP
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

// images
import Twitter from "../images/Twitter_w.svg";

// react-icons
import { AiFillGithub } from "react-icons/ai";

// go to top
function ChangePageTop() {
  window.scroll(0, 0);
}

function Footer() {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col>
              <h3 className="footer__title">GITHUB REPOSITORY</h3>

              <div className="footer__sns">
                <a href="https://github.com/TechnoEmpire">
                <AiFillGithub style={{ color: "white", fontSize: "2rem" }} />
                </a>
                <a href="https://icons8.com" className="">
                  <img src={Twitter} alt="" />
                </a>
              </div>

              <h3 className="footer__logo">TSKYPP</h3>
              <p className="footer__copyRight">
                © 2023 - TSKYPP - All Rights Reseved.{" "}
                <br className="breakLineSP" />{" "}
              </p>
            </Col>

            <Col>
              <div className="footer__links">
                <Link to="/" onClick={ChangePageTop}>
                  HOME
                </Link>
                <Link to="/about" onClick={ChangePageTop}>
                  ABOUT US
                </Link>
                <Link to="/contact" onClick={ChangePageTop}>
                  CONTACT
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
