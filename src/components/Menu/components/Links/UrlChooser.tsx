import { useAtom } from "jotai";
import linkIcon from "../../../../../assets/images/icon-link.svg";
import { linksAtomFamily } from "../../Menu";

function UrlChooser({ linkId }: { linkId: number }): JSX.Element {
  const [link, setLink] = useAtom(linksAtomFamily(linkId));

  const handleLinkUrlChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newUrl = event.target.value;
    setLink((currLink) => ({
      ...currLink,
      url: newUrl,
    }));
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
        onChange={(e) => handleLinkUrlChange(e)}
      />
    </label>
  );
}

export default UrlChooser;
