import phone from "../../../assets/images/illustration-phone-mockup.svg";

function LinksViewerPhone(): JSX.Element {
  return (
    <aside className="flex col-span-2 justify-center items-center p-4 h-full bg-white rounded-lg">
      <img src={phone} className="w-1/2 h-fit" />
    </aside>
  );
}

export default LinksViewerPhone;
