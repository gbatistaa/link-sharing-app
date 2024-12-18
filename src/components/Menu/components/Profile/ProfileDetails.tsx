function ProfileDetails(): JSX.Element {
  return (
    <form className="flex flex-col col-span-3 gap-y-4 p-8 w-full h-full max-h-full bg-white rounded-md">
      <h1 className="text-3xl font-bold">Profile Details</h1>
      <p className="text-sm text-custom-gray">
        Add your details to create a personal touch to your profile.
      </p>
      <section className="flex justify-between items-center p-4 h-1/3 rounded-md bg-custom-off-white">
        <p className="text-sm text-custom-gray">Profile Picture</p>
        <label htmlFor="profile-picture" className="flex justify-center items-center h-full rounded-md cursor-pointer just aspect-square bg-custom-lavender">
          <input type="file" id="profile-picture" className="hidden" />
        </label>
        <div className="flex flex-col">
          <p className="text-sm text-custom-gray">Image must be below 1024x1024.</p>
          <p className="text-sm text-custom-gray">Use PNG or JGP format.</p>
        </div>
      </section>
      <section className="flex flex-col gap-y-2 p-4 h-1/3 rounded-md bg-custom-off-white">
        <label className="flex justify-between items-center w-full h-fit">
          <p className="text-sm text-custom-gray">Full Name*</p>
          <input type="text" name="full-name" className="w-1/2 h-8 rounded-md bg-white border-1.5 border-solid border-custom-light-gray outline-none" />
        </label>
        <label className="flex justify-between items-center w-full h-fit">
          <p className="text-sm text-custom-gray">Email*</p>
          <input type="text" name="email" className="w-1/2 h-8 rounded-md bg-white border-1.5 border-solid border-custom-light-gray outline-none" />
        </label>
        <label className="flex justify-between items-center w-full h-fit">
          <p className="text-sm text-custom-gray">Phone*</p>
          <input type="text" name="phone" className="w-1/2 h-8 rounded-md bg-white border-1.5 border-solid border-custom-light-gray outline-none" />
        </label>
      </section>
      <footer className="flex justify-end mt-auto w-full h-auto">
        <button
          type="submit"
          className="flex gap-x-1 justify-center items-center px-5 mt-auto h-10 text-sm font-semibold text-white rounded-md bg-custom-purple w-fit hover:bg-custom-light-purple"
        >
          Save
        </button>
      </footer>
    </form>
  );
}

export default ProfileDetails;
