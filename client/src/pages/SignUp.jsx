import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-5 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-8">Signup</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          name=""
          id="name"
          placeholder="Fullname..."
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="text"
          name=""
          id="username"
          placeholder="Username..."
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="email"
          name=""
          id="email"
          placeholder="Email..."
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="password"
          name=""
          id="password"
          placeholder="Password..."
          className="bg-slate-100 p-3 rounded-lg"
        />
        <button className="bg-green-950 text-white p-4 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>
          Have an account?
          <span className="text-blue-600">
            <Link to="/sign-in">Sign in</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
