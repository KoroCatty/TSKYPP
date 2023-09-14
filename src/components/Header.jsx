import { useState, useEffect } from "react";

// react-router-dom
import { Link } from "react-router-dom";

// img
import FB from "../images/Facebook.svg";
import Insta from "../images/Insta.svg";
import Twitter from "../images/Twitter.svg";

// img
import FB_w from "../images/Fb_w.svg";
import Insta_w from "../images/Insta_w.svg";
import Twitter_w from "../images/Twitter_w.svg";

// go to top
function ChangePageTop() {
  window.scroll(0, 0); // ページの一番上に移動
}

function Header() {
  // hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Headerの透明化
  const [isTransparent, setIsTransparent] = useState(false);

  // hamburger menu 開閉の管理
  const toggleHam = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // スクロールでHeaderの透明化
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={isTransparent ? "header scrolled" : "header"}>
        <span
          onClick={toggleHam}
          className={isMenuOpen ? "header unShownLayer" : "header"}
        ></span>

        <nav className="nav">
          <div className="navLinks">
            <Link to="/" onClick={ChangePageTop}>
              Home
            </Link>
            <Link to="/contact" onClick={ChangePageTop}>
              Contact
            </Link>
          </div>

          {/* LOGO */}
          <h1 className="navLogo">
            <Link to="/" onClick={ChangePageTop}>
              MODAL UI
            </Link>
          </h1>

          <div className="navSNS">
            <a href="" className="navSNS__link">
              <img src={FB} alt="FB" className="navSNS__img" />
            </a>
            <a href="" className="navSNS__link">
              <img src={Insta} alt="Instagram" className="navSNS__img" />
            </a>
            <a href="" className="navSNS__link">
              <img src={Twitter} alt="Twiiter" className="navSNS__img" />
            </a>
          </div>

          {/* ======================= */}
          {/* <!-- Hamburger Icon --> */}
          {/* ======================= */}
          <div className="headerHam">
            <button
              onClick={toggleHam}
              className={
                isMenuOpen ? "hamOpen headerHam__icon" : "headerHam__icon"
              }
            >
              <span
                className={
                  isMenuOpen
                    ? "headerHam__icon--bar top iconWhite"
                    : "headerHam__icon--bar top"
                }
              ></span>
              <span className="headerHam__icon--bar middle"></span>
              <span
                className={
                  isMenuOpen
                    ? "headerHam__icon--bar bottom iconWhite"
                    : "headerHam__icon--bar bottom"
                }
              ></span>
            </button>
          </div>

          {/* ======================= */}
          {/*  Hamburger Hidden Menu */}
          {/* ======================= */}
          <div
            className={
              isMenuOpen ? "hamOpen overWrap active hiddenMenu" : "overWrap"
            }
          >
            <ul className="overWrap__box">
              <li className="overWrap__box--item">
                <Link
                  to="/"
                  onClick={() => {
                    ChangePageTop();
                    toggleHam();
                  }}
                  className="overWrap__box--link"
                >
                  Home
                </Link>
              </li>

              <li className="overWrap__box--item">
                <Link
                  to="/contact"
                  onClick={() => {
                    ChangePageTop();
                    toggleHam();
                  }}
                  className="overWrap__box--link"
                >
                  CONTACT
                </Link>
              </li>
            </ul>

            {/* ================================== */}
            {/* SNS Icons borrowed from footer one */}
            {/* ================================== */}
            <div className="footer__sns InHamburger">
              <a href="https://icons8.com" className="sns icon">
                <img src={FB_w} alt="Facebook Icon" />
              </a>
              <a href="https://icons8.com" className="sns icon">
                <img src={Insta_w} alt="" />
              </a>
              <a href="https://icons8.com" className="sns icon">
                <img src={Twitter_w} alt="" />
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
