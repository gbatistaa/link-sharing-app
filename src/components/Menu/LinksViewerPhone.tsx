import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";
import phone from "../../../assets/images/illustration-phone-mockup.svg";
import { linksCountAtom } from "./components/Links/LinksGrid";
import { pictureAtom, userCredentialsAtom } from "./components/Profile/ProfileDetails";
import LinkCard from "./LinkCard";

// Atom para armazenar a altura da imagem
const imgHeightAtom = atom(0);

function LinksViewerPhone(): JSX.Element {
  const [userCredentials] = useAtom(userCredentialsAtom);
  const [profilePicture] = useAtom(pictureAtom);
  const [linksIds] = useAtom(linksCountAtom);
  const [imgHeight, setImgHeight] = useAtom(imgHeightAtom);

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      const updateHeight = (): void => setImgHeight(imgRef.current!.offsetHeight);
      updateHeight();

      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    }
  }, [setImgHeight]);

  return (
    <aside className="flex col-span-2 justify-center items-center p-4 h-full bg-white rounded-lg relative">
      <div className="flex flex-col px-6 gap-y-8 items-center justify-between border-solid border-red-500 border-2 absolute z-30 w-1/2" style={{ height: `${imgHeight}px` }}>
        {/* USER INFOS DIV */}
        <div className="flex flex-col w-full bg-white justify-center items-center gap-y-2 z-30 border-solid border-green-500 border-2 mt-14">
          <div
            className={`w-1/3 aspect-square rounded-full border-solid border-4 border-custom-purple ${profilePicture.file.content ? "bg-cover bg-center" : ""}`}
            style={{
              backgroundImage: `url(${profilePicture.file.content})`,
            }}
          ></div>
          <h3 className="font-semibold text-xl">{userCredentials.lastName !== "" && userCredentials.firstName !== "" ? `${userCredentials.firstName} ${userCredentials.lastName}` : "Your Name"}</h3>
          <p className="text-sm text-custom-gray">{userCredentials.email !== "" ? userCredentials.email : "username@example.com"}</p>
        </div>
        {/* CARD LINKS DIV*/}
        <div className="flex flex-col items-center gap-y-5 h-50 w-full z-30 bg-white">
          {linksIds.map((link, index) => (
            <LinkCard linkId={index + 1} key={index} />
          ))}
        </div>
      </div>
      {/* PHONE VIEWER SVG */}
      <img ref={imgRef} src={phone} className="w-1/2 h-auto z-20" />
    </aside>
  );
}

export default LinksViewerPhone;
