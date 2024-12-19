import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import React, { useEffect } from "react";
import UploadImageIcon from "../../../../../assets/images/icon-upload-image";
import UserCredentials from "../../../../ts/classes/UserCredentials";
import { ProfilePicture } from "../../../../ts/classes/ProfilePicture";



// Atom para o estado da imagem
export const pictureAtom = atomWithStorage<ProfilePicture>("profilePicture, {
});

// Atom para os dados do usuário
export const userCredentialsAtom = atomWithStorage<UserCredentials>("userCredentials", {
  firstName: "",
  lastName: "",
  email: "",
});

function ProfileDetails(): JSX.Element {
  const [profilePicture, setProfilePicture] = useAtom(pictureAtom);
  const [, setUserCredentials] = useAtom(userCredentialsAtom);

  // Gerenciar a mudança da imagem
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files[0]) {
      const newProfilePicture = event.target.files[0];
      const newProfilePictureUrl = URL.createObjectURL(newProfilePicture);

      // Salvar dados do arquivo no estado
      setProfilePicture({
        name: newProfilePicture.name,
        size: newProfilePicture.size,
        type: newProfilePicture.type,
        url: newProfilePictureUrl,
      });

      console.log("Selected file:", newProfilePicture.name);
      console.log("File size:", (newProfilePicture.size / 1024).toFixed(2), "KB");
      console.log("File type:", newProfilePicture.type);
      console.log("File url:", newProfilePictureUrl);
    } else {
      console.log("Nenhum arquivo selecionado.");
    }
  };

  // Atualizar dados do usuário
  const handleUserCredentialsUpdate = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setUserCredentials((prevCred) => ({
      ...prevCred,
      [name]: value,
    }));
  };

  // Gerar estilos dinamicamente
  const backgroundImageStyle = React.useMemo(() => {
    // Resgata o item do localStorage
    const storedPicture = localStorage.getItem("profilePicture");

    // Verifica se há algo salvo no localStorage
    if (storedPicture) {
      try {
        const parsedPicture = JSON.parse(storedPicture); // Converte para objeto
        return parsedPicture.url ? `url(${parsedPicture.url})` : undefined; // Retorna a URL se existir
      } catch (error) {
        console.error("Erro ao parsear o profilePicture:", error);
        return undefined; // Caso dê erro, retorna undefined
      }
    }

    return undefined; // Caso não exista no localStorage, retorna undefined
  }, []);
  const fillColor = profilePicture.url ? "#ffffff" : "#633cff";
  const buttonText = profilePicture.url ? "Change Image" : "+Upload Image";
  const textColor = profilePicture.url ? "text-white" : "text-custom-purple";

  useEffect(() => {
    console.log("Profile picture state loaded:", profilePicture);
  }, [profilePicture]);

  return (
    <div className="flex flex-col col-span-3 gap-y-4 p-8 w-full h-full max-h-full bg-white rounded-lg">
      <h1 className="text-3xl font-bold">Profile Details</h1>
      <p className="text-sm text-custom-gray">
        Add your details to create a personal touch to your profile.
      </p>
      <section className="flex justify-between items-center p-4 h-2/5 rounded-md bg-custom-off-white">
        <p className="text-sm text-custom-gray">Profile Picture</p>
        <label
          htmlFor="profilePicture"
          className={`flex flex-col bg-center bg-cover gap-y-2 justify-center items-center h-full rounded-lg cursor-pointer aspect-square font-semibold text-sm ${profilePicture.url ? "bg-cover" : "bg-custom-lavender"
            }`}
          style={{
            backgroundImage: backgroundImageStyle,
          }}
        >
          <UploadImageIcon fillColor={fillColor} />
          <p className={textColor}>{buttonText}</p>
          <input
            type="file"
            id="profilePicture"
            className="hidden"
            onChange={(e) => handleImageChange(e)}
          />
        </label>
        <div className="flex flex-col">
          <p className="text-xs text-custom-gray">Image must be below 1024x1024.</p>
          <p className="text-xs text-custom-gray">Use PNG or JGP format.</p>

          <p className="text-xs text-custom-gray">
            {`File: ${profilePicture.name}, Size: ${(profilePicture.size / 1024).toFixed(
              2
            )} KB, Type: ${profilePicture.type} ${localStorage.getItem("profilePicture")}`}
          </p>

        </div>
      </section>
      <section className="flex flex-col flex-grow gap-y-2 justify-between p-4 rounded-lg bg-custom-off-white">
        <label className="flex justify-between items-center w-full h-fit">
          <p className="text-sm text-custom-gray">First Name*</p>
          <input
            type="text"
            name="firstName"
            className="w-1/2 h-8 rounded-lg bg-white border-1.5 border-solid border-custom-light-gray outline-none focus:border-custom-purple px-2 text-sm text-custom-black"
            autoComplete="off"
            onChange={(e) => handleUserCredentialsUpdate(e)}
          />
        </label>
        <label className="flex justify-between items-center w-full h-fit">
          <p className="text-sm text-custom-gray">Last Name*</p>
          <input
            type="text"
            name="lastName"
            className="w-1/2 h-8 rounded-lg bg-white border-1.5 border-solid border-custom-light-gray outline-none focus:border-custom-purple px-2 text-sm text-custom-black"
            autoComplete="off"
            onChange={(e) => handleUserCredentialsUpdate(e)}
          />
        </label>
        <label className="flex justify-between items-center w-full h-fit">
          <p className="text-sm text-custom-gray">Email</p>
          <input
            type="text"
            name="email"
            className="w-1/2 h-8 rounded-lg bg-white border-1.5 border-solid border-custom-light-gray outline-none focus:border-custom-purple px-2 text-sm text-custom-black"
            autoComplete="off"
            onChange={(e) => handleUserCredentialsUpdate(e)}
          />
        </label>
      </section>
      <footer className="flex justify-end mt-auto w-full h-auto">
        <button
          type="submit"
          className="flex justify-center items-center text-sm bg-custom-purple border-solid border-1.5 text-white font-semibold w-fit h-10 hover:bg-custom-light-purple px-5 gap-x-1  rounded-md"
        >
          Save
        </button>
      </footer>
    </div>
  );
}

export default ProfileDetails;
