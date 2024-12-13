import { useAtom } from "jotai";
import { linksAtom } from "../../Menu";
import Empty from "./Empty";

function CustomizeLinks(): JSX.Element {
  const [linksCount] = useAtom(linksAtom);

  return (
    <section className="bg-white h-full col-span-3 p-8 rounded-md">
      <div className="h-full bg-white flex flex-col gap-y-4">
        <h1 className="text-3xl font-bold">Customize your links</h1>
        <p className="text-sm text-custom-gray">Add/edit/remove links below and then share all your profiles with the world!</p>
        <button
          type="button"
          className="flex justify-center items-center text-sm border-custom-purple border-solid border-1.5
           text-custom-purple font-semibold text-nowrap hover:bg-custom-lavender px-5 gap-x-1 rounded-md w-full h-8"
        >
          + Add new link
        </button>
        {linksCount === 0 && <Empty />}
        {linksCount > 0 && <div>Mais de um link</div>}
      </div>
      <footer className="flex justify-end">
        <button
          type="button"
          className="flex justify-center items-center text-sm bg-custom-purple border-solid border-1.5
            text-white font-semibold w-fit hover:bg-custom-light-purple px-5 gap-x-1 h-10 rounded-md"
        >
          Save
        </button>
      </footer>
    </section>
  );
}

export default CustomizeLinks;
