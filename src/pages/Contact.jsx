// components
import Forms from "../components/Forms";

import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <main style={{ marginTop: "52px" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TSYKPP | CONTACT</title>
      </Helmet>

      <Forms />
    </main>
  );
};

export default Contact;
