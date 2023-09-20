// components
import Hero from "../components/Hero";

import { Helmet } from "react-helmet";

const About = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TSYKPP | ABOUT US</title>
      </Helmet>

      <Hero />

      <article>
        <h1 className="text-center my-4">About Us</h1>
        <h2>lorem lorem lorem:</h2>
        <p className="my-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
          quaerat quasi distinctio nulla, sint error perspiciatis accusamus
          consequuntur numquam, asperiores porro iste officiis amet
          reprehenderit reiciendis. Praesentium optio natus officiis?
        </p>

        <h2>lorem lorem lorem:</h2>
        <p className="my-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
          quaerat quasi distinctio nulla, sint error perspiciatis accusamus
          consequuntur numquam, asperiores porro iste officiis amet
          reprehenderit reiciendis. Praesentium optio natus officiis?
        </p>
      </article>
    </main>
  );
};

export default About;
