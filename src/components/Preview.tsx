import { Link } from "react-router-dom";

function Preview(): JSX.Element {
  return (
    <section className="flex items-center">
      <header>
        <div className="bg-white flex justify-between">
          <Link to="/menu">Back to Editor</Link>
          <button>Share Link</button>
        </div>
      </header>
      <div></div>
    </section>
  );
}

export default Preview;
