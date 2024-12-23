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
    const updateHeight = (): void => {
      if (imgRef.current) {
        setImgHeight(imgRef.current.offsetHeight);
      }
    };

    // Atualiza a altura após a imagem carregar
    const imgElement = imgRef.current;
    if (imgElement && imgElement.complete) {
      updateHeight(); // Se a imagem já está carregada
    } else if (imgElement) {
      imgElement.addEventListener("load", updateHeight); // Aguarda o carregamento
    }

    // Atualiza a altura ao redimensionar a janela
    window.addEventListener("resize", updateHeight);

    // Limpeza dos listeners
    return () => {
      if (imgElement) {
        imgElement.removeEventListener("load", updateHeight);
      }
      window.removeEventListener("resize", updateHeight);
    };
  }, [setImgHeight]);

  return (
    <aside className="flex col-span-2 justify-center items-center p-4 h-full bg-white rounded-lg relative">
      <div
        className="flex flex-col px-6 items-center absolute z-30 w-1/2"
        style={{ height: `${imgHeight}px` }} // Sincroniza a altura com a imagem
      >
        <div className="w-full h-1/10 z-30"></div>
        {/* USER INFOS DIV */}
        <div className="flex flex-col w-full bg-white justify-center items-center gap-y-4 z-30">
          <div
            className={`w-1/3 aspect-square rounded-full border-solid border-4 border-custom-purple
             ${profilePicture.file.content ? "bg-cover bg-center" : ""}`}
            style={{
              backgroundImage: `url(${profilePicture.file.content})`,
            }}
          ></div>
          <h3 className="font-semibold text-xl">
            {userCredentials.lastName !== "" || userCredentials.firstName !== ""
              ? `${userCredentials.firstName} ${userCredentials.lastName}`
              : "Your Name"}
          </h3>
          <p className="text-sm text-custom-gray">{userCredentials.email !== "" ? userCredentials.email : "username@example.com"}</p>
        </div>

        {/* CARD LINKS DIV*/}
        <div
          className="flex flex-col items-center pt-8 pb-4 gap-y-4
         flex-auto w-full z-30 mt-auto mb-10 bg-white rounded-xl"
        >
          {linksIds.map((link, index) => (
            <LinkCard linkId={index + 1} key={index} />
          ))}
        </div>
      </div>
      {/* PHONE VIEWER SVG */}
      <img ref={imgRef} src={phone} className="w-1/2 h-auto min-h-phone z-20" />
    </aside>
  );
}

export default LinksViewerPhone;
