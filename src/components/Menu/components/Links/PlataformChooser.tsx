import { useAtom } from "jotai";
import dropdown from "../../../../../assets/images/icon-chevron-down.svg";
import plataforms from "../../../../ts/lists/plataformsList";

import { linksAtomFamily } from "../../Menu";
import KeyValuePlataforms from "./KeyValuePlataforms";

function PlataformChooser({ linkId }: { linkId: number }): JSX.Element {

  const [link, setLink] = useAtom(linksAtomFamily(linkId));

  return (
    <button
      type="button"
      className="h-10 bg-white border-custom-light-gray group focus-within:border-custom-purple border-solid border-1.5
                rounded-md w-full flex justify-between items-center relative"
    >
      <div>
        <img src={""} />
        <p className="ml-4">{link.plataform}</p>
      </div>
      <img src={dropdown} className="mr-4 rotate-180 group-focus:rotate-0" />
      <div
        className="grid overflow-y-visible absolute top-full z-20 flex-col grid-cols-2 mt-1 w-full bg-white rounded-md h-fit"
      >
        {plataforms.map((plataform, idx) => (
          <label key={idx} className="hidden flex-row gap-x-2 items-center px-4 py-2 cursor-pointer hover:bg-gray-200">
            <input type="radio" name={`plataform-${linkId}`} value={plataform} className="" />
            {plataform}
            <KeyValuePlataforms plataform={plataform} selected={false} />
          </label>
        ))}
      </div>
    </button>
  )
}

export default PlataformChooser;
