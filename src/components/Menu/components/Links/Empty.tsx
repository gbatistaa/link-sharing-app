import empty from "../../../../../assets/images/illustration-empty.svg";

function Empty(): JSX.Element {
  return (
    <div className="bg-custom-off-white flex flex-auto justify-center items-center flex-col rounded-lg gap-y-6">
      <img src={empty} />
      <h1 className="text-3xl font-bold">Let's get you started</h1>
      <p className="text-center w-3/5 text-sm text-custom-gray">
        Use the "Add new link" button to get started. Once you have more than one link, you can reorder and edit them.
        We're here to help you share your profiles with everyone!
      </p>
    </div>
  );
}

export default Empty;
