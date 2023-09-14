// BOOTSTRAP
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

// images
import FB from "../images/Fb_w.svg";
import Insta from "../images/Insta_w.svg";
import Twitter from "../images/Twitter_w.svg";

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
              <h3 className="footer__title">LATEST ON TWITTER</h3>

              <div className="footer__sns">
                <a href="https://icons8.com" className="">
                  <img src={FB} alt="Facebook Icon" />
                </a>
                <a href="https://icons8.com" className="">
                  <img src={Insta} alt="" />
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
