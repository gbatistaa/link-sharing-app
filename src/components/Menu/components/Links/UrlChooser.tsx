import { useAtom } from "jotai";
import linkIcon from "../../../../../assets/images/icon-link.svg";
import UserLink, { Plataform } from "../../../../ts/classes/Link";
import { linksAtom } from "../../Menu";

function UrlChooser({ linkId, link }: { linkId: number; link: UserLink }): JSX.Element {
  const [links, setLinks] = useAtom(linksAtom);

  const handleUrlSelection = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newUrl = event.target.value as Plataform;

    setLinks((currLinks) => {
      return currLinks.map((currLink, index) => {
        if (index === linkId) return { ...currLink, url: newUrl };
        return currLink;
      });
    });
  };

  return (
    <label
      className="h-10 bg-white border-custom-light-gray focus-within:border-custom-purple
    border-solid border-1.5 rounded-md w-full flex px-4 gap-x-2 text-custom-black"
    >
      <img src={linkIcon} />
      <input
        type="text"
        className="w-full bg-transparent outline-none"
        value={link.url}
        onChange={(e) => handleUrlSelection(e)}
      />
    </label>
  );
}

export default UrlChooser;
