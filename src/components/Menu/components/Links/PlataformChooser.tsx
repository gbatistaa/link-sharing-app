import { useAtom } from "jotai";
import React from "react";
import dropdown from "../../../../../assets/images/icon-chevron-down.svg";
import { Plataform } from "../../../../ts/classes/Link";
import plataforms from "../../../../ts/lists/plataformsList";
import { linksAtomFamily } from "../../Menu";
import KeyValuePlataforms from "./KeyValuePlataforms";

function PlataformChooser({ linkId }: { linkId: number }): JSX.Element {
  const [link, setLink] = useAtom(linksAtomFamily(linkId));

  const handlePlataformSelection = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newPlataform = event.target.value as Plataform;
    setLink((currLink) => ({
      ...currLink,
      plataform: newPlataform,
    }));
  };

  return (
    <button
      type="button"
      className="h-10 bg-white border-custom-light-gray group focus-within:border-custom-purple border-solid border-1.5
      rounded-lg w-full flex justify-between items-center relative"
    >
      <div className="ml-4 flex flex-row gap-x-2 justify-between items-center">
        <KeyValuePlataforms plataform={link.plataform} colorState={false} />
        <p className="text-custom-black">{link.plataform}</p>
      </div>
      <img src={dropdown} className="mr-4 rotate-180 group-focus:rotate-0" />
      <div
        className="group-focus:flex group-focus:flex-col hidden overflow-y-visible group-focus:absolute top-full z-20
        mt-1 w-full bg-white rounded-lg h-fit border-1.5 border-solid border-white gap-x-2 divide-y
        divide-custom-light-gray"
      >
        {plataforms.map((plataform, idx) => (
          <label key={idx} className="flex flex-row gap-x-2 items-center px-4 py-2 cursor-pointer hover:bg-gray-200">
            <input type="radio" name={`plataform-${linkId}`} value={plataform} checked={link.plataform === plataform} onChange={(e) => handlePlataformSelection(e)} className="hidden" />
            <span className={`${link.plataform === plataform ? "text-custom-purple" : "text-custom-black"}`}>{plataform}</span>
            <KeyValuePlataforms plataform={plataform} colorState={link.plataform === plataform} />
          </label>
        ))}
      </div>
    </button>
  );
}

export default PlataformChooser;
