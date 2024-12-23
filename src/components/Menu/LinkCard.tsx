import { useAtom } from "jotai";
import arrow from "../../../assets/images/icon-arrow-right.svg";
import { cardColorSelector } from "../../ts/logic/ColorSelectors";
import { linksAtomFamily } from "./Menu";
import KeyValuePlataforms from "./components/Links/KeyValuePlataforms";

function LinkCard({ linkId, isPreview }: { linkId: number; isPreview: boolean }): JSX.Element {
  const [link] = useAtom(linksAtomFamily(linkId));

  const linkCardBgColor = cardColorSelector(link.plataform);

  return (
    <a
      className={`${linkCardBgColor} ${isPreview ? "h-1/5 w-3/4" : "h-3/20 w-11/12"}
       rounded-md flex justify-between items-center cursor-pointer p-2`}
      href={link.url}
    >
      <div className="flex flex-row justify-between items-center gap-x-4">
        <KeyValuePlataforms plataform={link.plataform} colorState={"card"} />
        <p className={`text-white ${isPreview ? " text-sm" : "text-base"}`}>{link.plataform}</p>
      </div>
      <img src={arrow} alt="arrow" />
    </a>
  );
}

export default LinkCard;
