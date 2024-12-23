import { useAtom } from "jotai";
import { linksCountAtom } from "../Menu/components/Links/LinksGrid";
import { pictureAtom, userCredentialsAtom } from "../Menu/components/Profile/ProfileDetails";
import LinkCard from "../Menu/LinkCard";

function PreviewCard(): JSX.Element {
  const [userCredentials] = useAtom(userCredentialsAtom);
  const [profilePicture] = useAtom(pictureAtom);
  const [linksIds] = useAtom(linksCountAtom);

  return (
    <main
      className="flex flex-col items-center w-80 h-fit bg-white z-20
     rounded-3xl shadow-md gap-y-6 p-6"
    >
      <section className="flex flex-col items-center gap-y-4">
        <div
          className={`w-1/3 aspect-square rounded-full border-solid border-4 border-custom-purple
             ${profilePicture.file.content ? "bg-cover bg-center" : ""}`}
          style={{
            backgroundImage: `url(${profilePicture.file.content})`,
          }}
        ></div>
        <h3 className="text-2xl font-bold">{`${userCredentials.firstName} ${userCredentials.lastName}`}</h3>
        <p className="text-sm text-custom-gray text-wrap">{userCredentials.email}</p>
      </section>
      <div className="flex flex-col items-center w-full h-68 gap-y-3 max-xl:w-10/12">
        {linksIds.map((link, index) => {
          return <LinkCard isPreview={true} linkId={index + 1} key={index} />;
        })}
      </div>
    </main>
  );
}

export default PreviewCard;
