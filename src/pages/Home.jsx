// components
import LeftMenu from "../components/LeftMenu";
import Body from "../components/Body";

import { Helmet } from "react-helmet";

function Home() {
  return (
    <main style={{ marginTop: "52px" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TSYKPP | Docs</title>
      </Helmet>

      <div className="homeContents">
        <div className="homeContents__leftMenu">
          <LeftMenu />
        </div>
        <div className="homeContents__body">
          <Body />
        </div>
      </div>
    </main>
  );
}

export default Home;
