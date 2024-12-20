import { useAtom } from "jotai";
import phone from "../../../assets/images/illustration-phone-mockup.svg";
import { linksCountAtom } from "./components/Links/LinksGrid";
import { pictureAtom, userCredentialsAtom } from "./components/Profile/ProfileDetails";
import LinkCard from "./LinkCard";

function LinksViewerPhone(): JSX.Element {
  const [userCredentials] = useAtom(userCredentialsAtom);
  const [profilePicture] = useAtom(pictureAtom);
  const [linksIds, setLinksIds] = useAtom(linksCountAtom);

  return (
    <aside className="flex col-span-2 justify-center items-center p-4 h-full bg-white rounded-lg relative">
      <div className="flex flex-col px-6 items-center border-solid border-red-500 border-2 h-phone absolute z-30 w-1/2">
        {/* USER INFOS DIV */}
        <div className="flex flex-col w-full bg-white justify-center items-center gap-y-2 z-30 border-solid border-green-500 border-2 mt-16">
          <div
            className={`h-24 w-24 rounded-full border-solid border-4 border-custom-purple ${profilePicture.file.content ? "bg-cover bg-center" : ""}`}
            style={{
              backgroundImage: `url(${profilePicture.file.content})`,
            }}
          ></div>
          <h3 className="font-semibold text-xl">{`${userCredentials.firstName} ${userCredentials.lastName}`}</h3>
          <p className="text-sm text-custom-gray">{userCredentials.email}</p>
        </div>
        {/* CARD LINKS DIV*/}
        <div className="flex flex-col gap-y-5 h-50 w-full p-4 z-30 bg-white border-solid border-2 border-custom-purple">
          {linksIds.map((link, index) => (
            <LinkCard linkId={index + 1} key={index} />
          ))}
        </div>
      </div>
      {/* PHONE VIEWER SVG */}
      <img src={phone} className="w-1/2 max-h-phone z-20" />
    </aside>
  );
}

export default LinksViewerPhone;
