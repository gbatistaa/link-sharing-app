import { Link } from "react-router-dom";
import PreviewCard from "./PreviewCard";

function Preview(): JSX.Element {
  return (
    <section className="flex h-screen">
      <header className="h-2/5 bg-custom-purple w-full p-6 rounded-b-3xl">
        <div className="h-1/4 flex justify-between items-center px-4 bg-white rounded-lg">
          <Link
            to="/menu"
            className="h-3/5 w-fit px-5 flex justify-center items-center border-custom-purple border-solid border-1.5
             font-semibold text-custom-purple text-sm rounded-md"
          >
            Back to Editor
          </Link>
          <button
            className="h-3/5 w-fit px-5 bg-custom-purple rounded-md text-white font-semibold text-sm"
            onClick={() => console.log("clicou")}
          >
            Create Link Share
          </button>
        </div>
      </header>
      <PreviewCard />
    </section>
  );
}

export default Preview;
