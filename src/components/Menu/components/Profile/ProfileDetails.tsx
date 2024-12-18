function ProfileDetails(): JSX.Element {
  return (
    <form className="flex flex-col col-span-3 p-8 w-full h-full max-h-full bg-white rounded-md">
      <h1 className="text-3xl font-bold">Profile Details</h1>
      <p className="text-sm text-custom-gray">
        Add your details to create a personal touch to your profile.
      </p>
      <div className="p-4 bg-custom-off-white">
        <p>Profile Picture</p>
        <label htmlFor="profile-picture" className="flex h-full aspect-square bg-custom-light-purple">
          <input type="file" id="profile-picture" className="hidden" />
        </label>
        <p>Image must be below 1024x1024.</p>
        <p>Use PNG or JGP format.</p>
      </div>
      <footer>
        <label>
          <p></p>
          <input type="text" name="" />
        </label><label>
          <p></p>
          <input type="text" name="" />
        </label><label>
          <p></p>
          <input type="text" name="" />
        </label>
      </footer>
    </form>
  );
}

export default ProfileDetails;
