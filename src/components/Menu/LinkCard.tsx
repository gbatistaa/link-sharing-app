import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import arrow from "../../../assets/images/icon-arrow-right.svg";
import { cardColorSelector } from "../../ts/logic/ColorSelectors";
import KeyValuePlataforms from "./components/Links/KeyValuePlataforms";
import { linksAtom } from "./Menu";

function LinkCard({ isPreview, linkId }: { isPreview: boolean; linkId: number }): JSX.Element {
  const [links] = useAtom(linksAtom);

  const link = links[linkId];
  const linkCardBgColor = cardColorSelector(link.plataform);

  return (
    <>
      {isPreview ? (
        <Link
          className={`${linkCardBgColor} ${isPreview ? "h-1/5 w-3/4" : "h-3/20 w-11/12"}
            rounded-md flex justify-between items-center cursor-pointer p-2`}
          to={link.url}
        >
          <div className="flex flex-row justify-between items-center gap-x-4">
            <KeyValuePlataforms plataform={link.plataform} colorState={"card"} />
            <p className={`text-white ${isPreview ? " text-sm" : "text-base"}`}>{link.plataform}</p>
          </div>
          <img src={arrow} alt="arrow" />
        </Link>
      ) : (
        <label
          className={`${linkCardBgColor} ${isPreview ? "h-1/5 w-3/4" : "h-3/20 w-11/12"}
     rounded-md flex justify-between items-center cursor-pointer p-2`}
        >
          <div className="flex flex-row justify-between items-center gap-x-4">
            <KeyValuePlataforms plataform={link.plataform} colorState={"card"} />
            <p className={`text-white ${isPreview ? " text-sm" : "text-base"}`}>{link.plataform}</p>
          </div>
          <img src={arrow} alt="arrow" />
        </label>
      )}
    </>
  );
}

export default LinkCard;
