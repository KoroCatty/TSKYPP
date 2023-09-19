// components
import LeftMenu from "../components/LeftMenu";
import Body from "../components/Body";

// react-icons
import { AiFillGithub } from "react-icons/ai";

function Home() {
  return (
    <main style={{ marginTop: "40px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: "20%",
            marginTop: "3rem",
            position: "sticky",
            top: "10%",
            height: "100vh",
          }}
        >
          <LeftMenu />
        </div>

        <div style={{ width: "80%", padding: "4rem" }}>
          <Body />
        </div>
      </div>

      <nav>
        <ul>
          <li className="var_nav">
            <div className="link_bg"></div>
            <div className="link_title">
              <div className="icon">
                <i>
                  <AiFillGithub style={{ color: "white", fontSize: "2rem" }} />
                </i>
              </div>
              <a href="#">
                <span>About Us</span>
              </a>
            </div>
          </li>

          <li className="var_nav">
            <div className="link_bg"></div>
            <div className="link_title">
              <div className="icon">
                <i className="icon-lightbulb icon-2x"></i>
              </div>
              <a href="#">
                <span>Ideas</span>
              </a>
            </div>
          </li>
          <li className="var_nav">
            <div className="link_bg"></div>
            <div className="link_title">
              <div className="icon">
                <i className="icon-wrench icon-2x"></i>
              </div>
              <a href="#">
                <span>Services</span>
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default Home;
