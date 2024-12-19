import { atom, useAtom } from "jotai";
import React from "react";
import UploadImageIcon from "../../../../../assets/images/icon-upload-image";

export const pictureAtom = atom<File | null>(null);

function ProfileDetails(): JSX.Element {
  const [profilePicture, setProfilePicture] = useAtom(pictureAtom);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files) {
      const newProfilePicture = event.target.files[0];
      setProfilePicture(newProfilePicture);
      console.log("Arquivo selecionado:", newProfilePicture);
      console.log("Tipo do arquivo:", newProfilePicture.type);
      console.log("Tamanho do arquivo:", newProfilePicture.size);
    } else {
      console.log("Nenhum arquivo selecionado.");
    }
  };

  // const handle;

  return (
    <form className="flex flex-col col-span-3 gap-y-4 p-8 w-full h-full max-h-full bg-white rounded-lg">
      <h1 className="text-3xl font-bold">Profile Details</h1>
      <p className="text-sm text-custom-gray">Add your details to create a personal touch to your profile.</p>
      <section className="flex justify-between items-center p-4 h-2/5 rounded-md bg-custom-off-white">
        <p className="text-sm text-custom-gray">Profile Picture</p>
        <label
          htmlFor="profile-picture"
          className="flex flex-col gap-y-2 justify-center items-center h-full rounded-lg cursor-pointer aspect-square bg-custom-lavender font-semibold text-sm"
        >
          <UploadImageIcon fillColor={`${profilePicture !== null ? "#ffffff" : "#633cff"}`} />
          <p className={`${profilePicture !== null ? "text-white" : "text-custom-purple"}`}>
            {profilePicture !== null ? "Change Image" : "+Upload Image"}
          </p>
          <input type="file" id="profile-picture" className="hidden" onChange={(e) => handleImageChange(e)} />
        </label>
        <div className="flex flex-col">
          <p className="text-xs text-custom-gray">Image must be below 1024x1024.</p>
          <p className="text-xs text-custom-gray">Use PNG or JGP format.</p>
        </div>
      </section>
      <section className="flex flex-col flex-grow justify-between gap-y-2 p-4 rounded-lg bg-custom-off-white">
        <label className="flex justify-between items-center w-full h-fit">
          <p className="text-sm text-custom-gray">First Name*</p>
          <input
            type="text"
            name="first-name"
            className="w-1/2 h-8 rounded-lg bg-white border-1.5 border-solid border-custom-light-gray outline-none focus:border-custom-purple px-2 text-sm text-custom-black"
            autoComplete="off"
          />
        </label>
        <label className="flex justify-between items-center w-full h-fit">
          <p className="text-sm text-custom-gray">Last Name*</p>
          <input
            type="text"
            name="last-name"
            className="w-1/2 h-8 rounded-lg bg-white border-1.5 border-solid border-custom-light-gray outline-none focus:border-custom-purple px-2 text-sm text-custom-black"
            autoComplete="off"
          />
        </label>
        <label className="flex justify-between items-center w-full h-fit">
          <p className="text-sm text-custom-gray">Email</p>
          <input
            type="text"
            name="email"
            className="w-1/2 h-8 rounded-lg bg-white border-1.5 border-solid border-custom-light-gray outline-none focus:border-custom-purple px-2 text-sm text-custom-black"
            autoComplete="off"
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
    </form>
  );
}

export default ProfileDetails;
