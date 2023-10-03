import Yi_LiveDemo from "../UI_demos/Yi/Yi_LiveDemo";
import Yi_StaticDemo from "../UI_demos/Yi/Yi_StaticDemo";

const Body = () => {
  return (
    <article>
      <h2 id="1" className="bodyTitle">
        Introduction
      </h2>
      <p>
        The best way to consume React-Bootstrap is via the npm package which you
        can install with npm (or yarn if you prefer).
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo
        molestias, amet exercitationem nihil laborum minus, consequuntur iure
        dolore quisquam nisi eius iste doloremque voluptate
      </p>

      <code className="text-5">npm install react-dialogue</code>

      <h3 className="bodyTitle mt-4" id="2">
        Getting Started
      </h3>
      <div>
        Here’s what you need to know before getting started with the navbar:
      </div>
      <p>
        The best way to consume React-Bootstrap is via the npm package which you
        can install with npm (or yarn if you prefer).
      </p>

      <p>
        If you plan on customizing the Bootstrap Sass files, or dont want to use
        a CDN for the stylesheet, it may be helpful to install vanilla Bootstrap
        as well.
      </p>

      <h3 className="bodyTitle mt-4" id="6">
        How it works
      </h3>
      <div>
        Here’s what you need to know before getting started with the navbar:
      </div>
      <ul>
        <li>
          Navbars require a wrapping <code>.navbar</code> with{" "}
          <code>.navbar-expand</code> for responsive collapsing and color scheme
          classes.
        </li>
        <li>
          Navbars and their contents are fluid by default. Use optional
          containers to limit their horizontal width.
        </li>
        <li>
          Use our spacing and flex utility classes for controlling spacing and
          alignment within navbars.
        </li>
        <li>
          Navbars are responsive by default, but you can easily modify them to
          change that. Responsive behavior depends on our Collapse JavaScript
          plugin.
        </li>
      </ul>

      <h2 className="bodyTitle__large">Examples</h2>
      <hr />

      <h3 className="bodyTitle">Static Demo</h3>
      <p>
        Below is a static modal example (meaning its position and display have
        been overridden). Included are the modal header, modal body (required
        for padding), and modal footer (optional).
      </p>

      <Yi_StaticDemo />

      <h2 className="bodyTitle">Live Demo</h2>

      <Yi_LiveDemo />

      <h3 className="bodyTitle mt-4" id="3">
        How it works
      </h3>
      <div>
        Here’s what you need to know before getting started with the navbar:
      </div>
      <ul>
        <li>
          Navbars require a wrapping <code>.navbar</code> with{" "}
          <code>.navbar-expand</code> for responsive collapsing and color scheme
          classes.
        </li>
        <li>
          Navbars and their contents are fluid by default. Use optional
          containers to limit their horizontal width.
        </li>
        <li>
          Use our spacing and flex utility classes for controlling spacing and
          alignment within navbars.
        </li>
        <li>
          Navbars are responsive by default, but you can easily modify them to
          change that. Responsive behavior depends on our Collapse JavaScript
          plugin.
        </li>
      </ul>

      <h3 className="bodyTitle mt-4" id="4">
        How it works
      </h3>
      <div>
        Here’s what you need to know before getting started with the navbar:
      </div>
      <ul>
        <li>
          Navbars require a wrapping <code>.navbar</code> with{" "}
          <code>.navbar-expand</code> for responsive collapsing and color scheme
          classes.
        </li>
        <li>
          Navbars and their contents are fluid by default. Use optional
          containers to limit their horizontal width.
        </li>
        <li>
          Use our spacing and flex utility classes for controlling spacing and
          alignment within navbars.
        </li>
        <li>
          Navbars are responsive by default, but you can easily modify them to
          change that. Responsive behavior depends on our Collapse JavaScript
          plugin.
        </li>
      </ul>

      <h3 className="bodyTitle mt-4" id="5">
        How it works
      </h3>
      <div>
        Here’s what you need to know before getting started with the navbar:
      </div>
      <ul>
        <li>
          Navbars require a wrapping <code>.navbar</code> with{" "}
          <code>.navbar-expand</code> for responsive collapsing and color scheme
          classes.
        </li>
        <li>
          Navbars and their contents are fluid by default. Use optional
          containers to limit their horizontal width.
        </li>
        <li>
          Use our spacing and flex utility classes for controlling spacing and
          alignment within navbars.
        </li>
        <li>
          Navbars are responsive by default, but you can easily modify them to
          change that. Responsive behavior depends on our Collapse JavaScript
          plugin.
        </li>
      </ul>
    </article>
  );
};

export default Body;
