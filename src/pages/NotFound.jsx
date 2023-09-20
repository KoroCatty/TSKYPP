import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>TSYKPP | Not Found 404</title>
      </Helmet>

      <h1>Page Not Found 404</h1>
    </main>
  );
};

export default NotFound;
