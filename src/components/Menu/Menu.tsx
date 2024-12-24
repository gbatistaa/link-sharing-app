import { atomWithStorage } from "jotai/utils";
import { Link, Outlet } from "react-router-dom";
import links from "../../../assets/images/icon-links-header.svg";
import profile from "../../../assets/images/icon-profile-details-header.svg";
import logo from "../../../assets/images/logo-devlinks-large.svg";
import UserLink from "../../ts/classes/Link";
import LinksViewerPhone from "./LinksViewerPhone";

export const linksAtom = atomWithStorage<UserLink[]>("links", []);

function Menu(): JSX.Element {
  return (
    <div className="flex flex-col gap-y-4 p-4 w-screen h-screen bg-custom-off-white">
      <header className="flex justify-between items-center p-4 w-full h-auto bg-white rounded-lg">
        <img src={logo} className="w-auto h-7" alt="Logo" />
        <div className="flex gap-x-4 justify-between w-60">
          <Link
            to="links"
            className="flex gap-x-1 justify-center items-center px-5 h-10 text-sm font-semibold rounded-lg
          bg-custom-lavender text-custom-purple text-nowrap w-fit"
          >
            <img src={links} className="w-auto h-5" alt="Links Icon" />
            Links
          </Link>
          <Link
            to="profile-details"
            className="flex gap-x-1 justify-center items-center px-5 h-10 text-sm font-semibold rounded-lg
          bg-custom-lavender text-custom-purple text-nowrap w-fit"
          >
            <img src={profile} className="w-auto h-5" alt="Profile Icon" />
            Profile Details
          </Link>
        </div>
        <Link
          to="/preview"
          className="flex justify-center items-center text-sm border-custom-purple border-solid border-1.5
           text-custom-purple font-semibold text-nowrap hover:bg-custom-lavender w-fit px-5 gap-x-1 h-10 rounded-lg"
        >
          Preview
        </Link>
      </header>
      <main className="grid grid-cols-5 gap-x-4 h-full">
        <LinksViewerPhone />
        <Outlet />
      </main>
    </div>
  );
}

export default Menu;
