import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";
import phone from "../../../assets/images/illustration-phone-mockup.svg";
import LinkCard from "./LinkCard";
import { linksCountAtom } from "./components/Links/LinksGrid";
import { pictureAtom, userCredentialsAtom } from "./components/Profile/ProfileDetails";

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
    <aside className="flex relative col-span-2 justify-center items-center p-4 h-full bg-white rounded-lg">
      <div
        className="flex absolute z-30 flex-col items-center px-6 w-1/2"
        style={{ height: `${imgHeight}px` }} // Sincroniza a altura com a imagem
      >
        <div className="z-30 w-full h-1/10"></div>
        {/* USER INFOS DIV */}
        <div className="flex z-30 flex-col gap-y-4 justify-center items-center w-full bg-white">
          <div
            className={`w-1/3 aspect-square rounded-full border-solid border-4 border-custom-purple
             ${profilePicture.file.content ? "bg-cover bg-center" : ""}`}
            style={{
              backgroundImage: `url(${profilePicture.file.content})`,
            }}
          ></div>
          <h3 className="text-xl font-semibold">
            {userCredentials.lastName !== "" || userCredentials.firstName !== ""
              ? `${userCredentials.firstName} ${userCredentials.lastName}`
              : "Your Name"}
          </h3>
          <p className="text-sm text-custom-gray text-wrap">
            {userCredentials.email !== "" ? userCredentials.email : "username@example.com"}
          </p>
        </div>

        {/* CARD LINKS DIV*/}
        <div
          className="flex z-30 flex-col flex-auto gap-y-4 items-center pt-8 pb-4
            mt-auto mb-10 w-full bg-white rounded-xl"
        >
          {linksIds.map((link, index) => (
            <LinkCard linkId={index + 1} key={index} />
          ))}
        </div>
      </div>
      {/* PHONE VIEWER SVG */}
      <img ref={imgRef} src={phone} className="z-20 w-1/2 h-auto" />
    </aside>
  );
}

export default LinksViewerPhone;
