import email from "../../assets/images/icon-email.svg";
import password from "../../assets/images/icon-password.svg";
import devlinks from "../../assets/images/logo-devlinks-large.svg";

function Login(): JSX.Element {
  return (
    <div className="h-screen w-screen bg-custom-off-white flex flex-col justify-center items-center">
      <img src={devlinks} alt="devlinks" className="relative bottom-10" />
      <section className="w-120 min-h-96 p-10 bg-white flex flex-col justify-center items-center gap-y-4">
        <div className="w-full flex flex-col gap-y-3 mb-4">
          <h1 className="text-3xl font-bold">Login</h1>
          <span className="text-custom-gray text-base">Add your details below to get back into the app</span>
        </div>
        <div className="w-full flex flex-col space-y-6">
          <div className="flex flex-col space-y-1">
            <p className="text-xs">Email address</p>
            <label
              className="h-10 w-full px-4 border-1.5 border-custom-light-gray rounded-lg
             bg-white flex justify-between focus-within:border-custom-purple text-sm focus-within:shadow-md shadow-custom-light-purple"
            >
              <img src={email} alt="Email Icon" />
              <input type="text" placeholder="you@example.com" className="w-11/12 outline-none focus:outline-none" />
            </label>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-xs">Password</p>
            <label
              className="h-10 w-full px-4 border-1.5 border-custom-light-gray rounded-lg
             bg-white flex justify-between focus-within:border-custom-purple text-sm focus-within:shadow-md shadow-custom-light-purple"
            >
              <img src={password} alt="Password Icon" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-11/12 outline-none focus:outline-none"
              />
            </label>
          </div>
        </div>
        <button className="min-h-10 w-full text-white text-sm flex justify-center items-center bg-custom-purple hover:bg-custom-light-purple rounded-lg">
          Login
        </button>
        <p className="text-sm text-custom-gray">
          Don't have an account?
          <span className="text-custom-purple"> Create account</span>
        </p>
      </section>
    </div>
  );
}

export default Login;
