import { useAtom } from "jotai";
import { linksAtomFamily } from "./Menu";
import KeyValuePlataforms from "./components/Links/KeyValuePlataforms";

function LinkCard({ linkId }: { linkId: number }): JSX.Element {
  const [link] = useAtom(linksAtomFamily(linkId));

  return (
    <label htmlFor="" className="bg-blue-200 w-full h-11">
      <div>
        <KeyValuePlataforms plataform={link.plataform} selected={false} />
      </div>
    </label>
  );
}

export default LinkCard;
