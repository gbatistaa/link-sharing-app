import { atom, useAtom } from "jotai";
import dropdown from "../../../../../assets/images/icon-chevron-down.svg";
import drop from "../../../../../assets/images/icon-drag-and-drop.svg";
import linkIcon from "../../../../../assets/images/icon-link.svg";
import plataforms from "../../../../ts/lists/plataformsList";
import { linksAtom } from "../../Menu";

export const dropAtom = atom<boolean>(false);

function LinksGrid(): JSX.Element {
  const [links] = useAtom(linksAtom);
  const [isDropOn, setIsDropOn] = useAtom(dropAtom);

  return (
    <div className="overflow-y-auto h-84 flex flex-col gap-y-6 z-10">
      {links.map((link, linkIndex) => (
        <article key={linkIndex} className="bg-blue-200 w-full h-fit max-h-52 flex flex-auto justify-center flex-col rounded-md gap-y-3 p-4">
          <section className="h-fit w-full flex justify-between">
            <div className="flex justify-between items-center w-16">
              <img src={drop} className="" />
              <p className="text-sm text-custom-gray font-bold">Link #{linkIndex + 1}</p>
            </div>
            <button className="text-sm text-custom-gray">Remove</button>
          </section>
          <div className="flex flex-col gap-y-1">
            <p className="text-xs text-custom-gray">Platform</p>
            <button
              type="button"
              className="h-10 bg-white border-custom-light-gray group focus-within:border-custom-purple border-solid border-1.5
                rounded-md w-full flex justify-between items-center relative"
            >
              <div>
                <img src={""} />
                <p>{link.plataform}</p>
              </div>
              <img src={dropdown} className="group-focus:rotate-0 rotate-180 mr-4" />
              <div
                className="h-fit w-full absolute top-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg
                z-20 flex-col overflow-y-visible group-focus:grid group-focus:grid-cols-2 hidden"
              >
                {plataforms.map((plataform, idx) => (
                  <label key={idx} className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                    <input type="radio" name={`plataform-${linkIndex}`} value={plataform} className="mr-2" />
                    {plataform}
                  </label>
                ))}
              </div>
            </button>
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="text-xs text-custom-gray">Links</p>
            <label
              className="h-10 bg-white border-custom-light-gray focus-within:border-custom-purple
                border-solid border-1.5 rounded-md w-full flex px-4 gap-x-2"
            >
              <img src={linkIcon} />
              <input type="text" className="bg-transparent outline-none w-full" />
            </label>
          </div>
        </article>
      ))}
    </div>
  );
}

export default LinksGrid;
