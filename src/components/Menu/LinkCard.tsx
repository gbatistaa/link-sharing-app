import { useAtom } from "jotai";
import arrow from "../../../assets/images/icon-arrow-right.svg";
import { cardColorSelector } from "../../ts/logic/ColorSelectors";
import { linksAtomFamily } from "./Menu";
import KeyValuePlataforms from "./components/Links/KeyValuePlataforms";

function LinkCard({ linkId }: { linkId: number }): JSX.Element {
  const [link] = useAtom(linksAtomFamily(linkId));

  const linkCardBgColor = cardColorSelector(link.plataform);

  return (
    <label htmlFor="" className={`${linkCardBgColor} w-11/12 h-3/20 rounded-md flex justify-between items-center cursor-pointer`}>
      <div className="flex flex-row justify-between items-center gap-x-4">
        <KeyValuePlataforms plataform={link.plataform} colorState={"card"} />
        <p className="text-white">{link.plataform}</p>
      </div>
      <img src={arrow} alt="arrow" />
    </label>
  );
}

export default LinkCard;
