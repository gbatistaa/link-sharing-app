import { atom } from "jotai";
import { Link } from "react-router-dom";
import links from "../../../assets/images/icon-links-header.svg";
import profile from "../../../assets/images/icon-profile-details-header.svg";
import phone from "../../../assets/images/illustration-phone-mockup.svg";
import logo from "../../../assets/images/logo-devlinks-large.svg";
import CustomizeLinks from "./components/Links/CustomizeLinks";

export const linksAtom = atom<number>(0);

function Menu(): JSX.Element {
  return (
    <div className="w-screen h-screen p-4 flex flex-col bg-custom-off-white gap-y-4">
      <header className="w-full h-auto p-4 flex justify-between items-center bg-white rounded-md">
        <img src={logo} className="w-auto h-7" />
        <div className="flex justify-between w-60 gap-x-4">
          <Link
            to="links"
            className="flex justify-center items-center text-sm bg-custom-lavender
           text-custom-purple font-semibold text-nowrap w-fit px-5 gap-x-1 h-10 rounded-md"
          >
            <img src={links} className="w-auto h-5" />
            Links
          </Link>
          <Link
            to="profile-details"
            className="flex justify-center items-center text-sm bg-custom-lavender
           text-custom-purple font-semibold text-nowrap w-fit px-5 gap-x-1 h-10 rounded-md"
          >
            <img src={profile} className="w-auto h-5" />
            Profile Details
          </Link>
        </div>
        <button
          type="button"
          className="flex justify-center items-center text-sm border-custom-purple border-solid border-1.5
           text-custom-purple font-semibold text-nowrap hover:bg-custom-lavender w-fit px-5 gap-x-1 h-10 rounded-md"
        >
          Preview
        </button>
      </header>
      <main className="grid grid-cols-5 h-full gap-x-4">
        <aside className="bg-blue-200 h-full col-span-2 p-4 rounded-md">
          <img src={phone} alt="" />
        </aside>
        <CustomizeLinks />
      </main>
    </div>
  );
}

export default Menu;
