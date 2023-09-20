// components
import LeftMenu from "../components/LeftMenu";
import Body from "../components/Body";

function Home() {
  return (
    <main style={{ marginTop: "52px" }}>

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
