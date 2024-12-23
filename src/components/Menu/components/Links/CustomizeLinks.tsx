import { useAtom } from "jotai";
import UserLink from "../../../../ts/classes/Link";
import { linksAtom } from "../../Menu";
import Empty from "./Empty";
import LinksGrid from "./LinksGrid";

function CustomizeLinks(): JSX.Element {
  const [links, setLinks] = useAtom(linksAtom);

  const createNewLink = (): void => {
    if (links.length < 5) {
      setLinks((currLinks) => {
        const newLinks = [...currLinks, new UserLink("", "")];
        return newLinks;
      });
    }
  };

  return (
    <form className="flex flex-col col-span-3 p-8 max-h-full bg-white rounded-lg">
      <div className="flex flex-col gap-y-4 h-full bg-white">
        <h1 className="text-3xl font-bold">Customize your links</h1>
        <p className="text-sm text-custom-gray">
          Add/edit/remove links below and then share all your profiles with the world!
        </p>
        <button
          type="button"
          className="flex justify-center items-center text-sm border-custom-purple border-solid border-1.5
        text-custom-purple font-semibold text-nowrap hover:bg-custom-lavender px-5 gap-x-1 rounded-lg
          w-full h-8 min-h-8"
          onClick={() => createNewLink()}
        >
          + Add new link
        </button>
        {links.length === 0 && <Empty />}
        {links.length > 0 && <LinksGrid />}
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
