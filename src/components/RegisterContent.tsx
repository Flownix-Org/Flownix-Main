function RegisterContent() {
  return (
    <div className="w-full max-w-lg bg-[#1f1f24] rounded-2xl shadow-2xl p-10 border border-fuchsia-600/30">
      <h2 className="text-3xl font-bold text-white text-center mb-6">
        Create an Account
      </h2>
      <form className="space-y-5">
        <div className="relative">
          <input
            type="text"
            id="name"
            className="peer w-full px-4 pt-6 pb-2 text-sm bg-[#2a2a31] text-white rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="absolute left-4 top-2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-fuchsia-400"
          >
            Full Name
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            id="email"
            className="peer w-full px-4 pt-6 pb-2 text-sm bg-[#2a2a31] text-white rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-fuchsia-400"
          >
            Email
          </label>
        </div>

        <div className="relative">
          <input
            type="password"
            id="password"
            className="peer w-full px-4 pt-6 pb-2 text-sm bg-[#2a2a31] text-white rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
            className="absolute left-4 top-2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-fuchsia-400"
          >
            Password
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 rounded-md text-white font-semibold bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-500 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-fuchsia-800/40"
        >
          Sign Up
        </button>
      </form>

      <p className="text-sm text-gray-400 text-center mt-6">
        Already have an account?{" "}
        <a href="#" className="text-fuchsia-400 hover:underline">
          Log in
        </a>
      </p>
    </div>
  );
}

export default RegisterContent;
