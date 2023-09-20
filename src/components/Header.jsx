import { useState, useEffect } from "react";

// react-router-dom
import { Link } from "react-router-dom";

// react-icons
import { AiFillGithub } from "react-icons/ai";

import MenuSp from "./MenuSp";

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
          {/* LOGO */}
          <h1 className="navLogo">
            <Link to="/" onClick={ChangePageTop}>
              <div className="commonTitle" style={{ padding: 0, fontSize: "2rem" }}>TSYKPP</div>
            </Link>
          </h1>

          <div className="navLinks">
            <Link to="/" onClick={ChangePageTop}>
              DOCS
            </Link>
            <Link to="/about" onClick={ChangePageTop}>
              ABOUT US
            </Link>
            <Link to="/contact" onClick={ChangePageTop}>
              CONTACT
            </Link>
          </div>

          <div className="navSNS">
            <a target="blank" href="https://github.com/TechnoEmpire" className="navSNS__link">
              <AiFillGithub style={{ color: "white", fontSize: "2rem" }} />
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
                  DOCUMENTATION
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
              <li className="overWrap__box--item">
                <Link
                  to="/about"
                  onClick={() => {
                    ChangePageTop();
                    toggleHam();
                  }}
                  className="overWrap__box--link"
                >
                  ABOUT US
                </Link>
              </li>

              {/* //! SP ONLY ACCORDION */}
              <div className="menuSp">
                <MenuSp />
              </div>
            </ul>

            {/* ================================== */}
            {/* SNS Icons borrowed from footer one */}
            {/* ================================== */}
            <div className="InHamburger">
              <a href="https://github.com/TechnoEmpire" className="sns icon">
                <AiFillGithub style={{ color: "white", fontSize: "2rem" }} />
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
