import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import drop from "../../../../../assets/images/icon-drag-and-drop.svg";
import { linksAtom } from "../../Menu";
import PlataformChooser from "./PlataformChooser";
import UrlChooser from "./UrlChooser";

export const dropAtom = atom<boolean>(false);
export const linksCountAtom = atomWithStorage<number[]>("linksIdsList", []);
export const currentIdAtom = atomWithStorage<number>("currentId", 0);

function LinksGrid(): JSX.Element {
  const [links] = useAtom(linksAtom);

  // const removeLink = (chosenId: number, event: React.MouseEvent<HTMLButtonElement>): void => {
  //   event.preventDefault();

  //   const newLinks;
  //   setLinksIds(newLinksIds);
  // };

  return (
    <div className="flex flex-col overflow-y-auto z-10  flex-auto gap-y-6 p-4 h-84">
      {links.map((link, index: number) => (
        <article
          key={index}
          className="flex flex-col flex-auto gap-y-3 justify-center p-4 w-full max-h-52
          rounded-md bg-custom-off-white h-fit"
        >
          <section className="flex justify-between w-full h-fit">
            <div className="flex justify-between items-center w-16">
              <img src={drop} className="" />
              <p className="text-sm font-bold text-custom-gray">Link #{index + 1}</p>
            </div>
            <button type="button" className="text-sm text-custom-gray">
              Remove
            </button>
          </section>
          <div className="flex flex-col gap-y-1">
            <p className="text-xs text-custom-gray">Platform</p>
            <PlataformChooser linkId={index} link={link} />
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="text-xs text-custom-gray">Link</p>
            <UrlChooser linkId={index} link={link} />
          </div>
        </article>
      ))}
    </div>
  );
}

export default LinksGrid;
