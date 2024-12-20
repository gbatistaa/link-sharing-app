import { useAtom } from "jotai";
import Empty from "./Empty";
import LinksGrid, { currentIdAtom, linksCountAtom } from "./LinksGrid";

function CustomizeLinks(): JSX.Element {
  const [linksIds, setLinksIds] = useAtom(linksCountAtom);
  const [currentId, setCurrentId] = useAtom(currentIdAtom);

  const incrementLinks = (): void => {
    setCurrentId((current) => {
      const newId = current + 1;
      setLinksIds((ids) => [...ids, newId]);
      return newId;
    });
  };

  return (
    <form className="flex flex-col col-span-3 p-8 max-h-full bg-white rounded-lg">
      <div className="flex flex-col gap-y-4 h-full bg-white">
        <h1 className="text-3xl font-bold">Customize your links</h1>
        <p className="text-sm text-custom-gray">Add/edit/remove links below and then share all your profiles with the world!</p>
        <button
          type="button"
          className="flex justify-center items-center text-sm border-custom-purple border-solid border-1.5
        text-custom-purple font-semibold text-nowrap hover:bg-custom-lavender px-5 gap-x-1 rounded-lg
          w-full h-8 min-h-8"
          onClick={() => incrementLinks()}
        >
          + Add new link
        </button>
        {linksIds.length === 0 && <Empty />}
        {linksIds.length > 0 && <LinksGrid />}
      </div>
      <footer className="flex justify-end items-end h-16">
        <button
          type="submit"
          className="flex justify-center items-center text-sm bg-custom-purple border-solid border-1.5
            text-white font-semibold w-fit h-10 hover:bg-custom-light-purple px-5 gap-x-1  rounded-lg"
        >
          Save
        </button>
      </footer>
    </form>
  );
}

export default CustomizeLinks;
