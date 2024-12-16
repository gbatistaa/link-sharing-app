import { atom, useAtom } from "jotai";
import drop from "../../../../../assets/images/icon-drag-and-drop.svg";
import linkIcon from "../../../../../assets/images/icon-link.svg";
import PlataformChooser from "./PlataformChooser";

export const dropAtom = atom<boolean>(false);
export const linksCountAtom = atom<number[]>([]);

function LinksGrid(): JSX.Element {
  const [links] = useAtom(linksCountAtom);

  return (
    <div className="flex overflow-y-auto z-10 flex-col gap-y-6 p-4 h-84">
      {links.map((link, linkIndex) => (
        <article key={linkIndex} className="flex flex-col flex-auto gap-y-3 justify-center p-4 w-full max-h-52 rounded-md bg-custom-off-white h-fit">
          <section className="flex justify-between w-full h-fit">
            <div className="flex justify-between items-center w-16">
              <img src={drop} className="" />
              <p className="text-sm font-bold text-custom-gray">Link #{linkIndex + 1}</p>
            </div>
            <button className="text-sm text-custom-gray">Remove</button>
          </section>
          <div className="flex flex-col gap-y-1">
            <p className="text-xs text-custom-gray">Platform</p>
            <PlataformChooser linkId={linkIndex + 1} />
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="text-xs text-custom-gray">Links</p>
            <label
              className="h-10 bg-white border-custom-light-gray focus-within:border-custom-purple
                border-solid border-1.5 rounded-md w-full flex px-4 gap-x-2"
            >
              <img src={linkIcon} />
              <input type="text" className="w-full bg-transparent outline-none" />
            </label>
          </div>
        </article>
      ))}
    </div>
  );
}

export default LinksGrid;
