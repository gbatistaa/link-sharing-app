import { atom, useAtom } from "jotai";
import drop from "../../../../../assets/images/icon-drag-and-drop.svg";
import PlataformChooser from "./PlataformChooser";
import UrlChooser from "./UrlChooser";

export const dropAtom = atom<boolean>(false);
export const linksCountAtom = atom<number[]>([]);
export const currentIdAtom = atom<number>(0);

function LinksGrid(): JSX.Element {
  const [linksIds, setLinksIds] = useAtom(linksCountAtom);

  return (
    <div className="flex overflow-y-auto z-10 flex-col gap-y-6 p-4 h-84">
      {linksIds.map((linkId, linkIndex) => (
        <article
          key={linkIndex}
          className="flex flex-col flex-auto gap-y-3 justify-center p-4 w-full max-h-52
          rounded-md bg-custom-off-white h-fit"
        >
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
            <p className="text-xs text-custom-gray">Link</p>
            <UrlChooser linkId={linkIndex + 1} />
          </div>
        </article>
      ))}
    </div>
  );
}

export default LinksGrid;
