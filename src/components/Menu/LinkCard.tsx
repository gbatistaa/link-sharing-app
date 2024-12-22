import { useAtom } from "jotai";
import { cardColorSelector } from "../../ts/logic/ColorSelectors";
import { linksAtomFamily } from "./Menu";
import KeyValuePlataforms from "./components/Links/KeyValuePlataforms";

function LinkCard({ linkId }: { linkId: number }): JSX.Element {
  const [link] = useAtom(linksAtomFamily(linkId));

  const linkCardBgColor = cardColorSelector(link.plataform);

  return (
    <label htmlFor="" className={`${linkCardBgColor} w-11/12 h-3/20 rounded-lg`}>
      <div>
        <KeyValuePlataforms plataform={link.plataform} colorState={"card"} />
      </div>
    </label>
  );
}

export default LinkCard;
