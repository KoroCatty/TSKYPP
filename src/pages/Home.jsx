// components
import LeftMenu from "../components/LeftMenu";
import Body from "../components/Body";

function Home() {
  return (
    <main style={{marginTop: "40px"}}>
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
    </main>
  );
}

export default Home;
