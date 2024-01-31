import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [success, setSuccess] = useState(true);

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const handleRegister = async (data) => {
    // backend url ---> http://localhost:5555/api/users
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5555/api/auth/signup",
        data
      );
      setLoading(false);
      setSuccess(response.data.success);
      setResponse(response.data.message);
      setTimeout(() => {
        setResponse(null);
        navigate("/sign-in");
      }, 1000);
      setValue("name", "");
      setValue("username", "");
      setValue("email", "");
      setValue("password", "");
    } catch (error) {
      setLoading(false);
      const htmlString = error.response.data;
      const regex = /Error: (.*?)<br>/;
      const match = htmlString.match(regex);

      if (match) {
        const errorMessage = match[1].trim();
        setSuccess(false);
        setResponse(errorMessage);
        setTimeout(() => {
          setResponse(null);
        }, 2500);
      } else {
        console.log("Internal server Error");
      }
    }
  };
  return (
    <div className="p-5 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-5">Signup</h1>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(handleRegister)}
      >
        {response ? (
          <p
            className={
              success
                ? "text-green-800 bg-green-200 font-bold p-1 rounded-md max-h-8"
                : "text-red-700 font-bold bg-red-200 p-1 rounded-md max-h-8"
            }
          >
            {response}
          </p>
        ) : (
          <span className="min-h-8"></span>
        )}
        <p className="text-red-500 flex flex-col justify-center items-start max-h-0">
          {errors.name?.message}
        </p>
        <input
          type="text"
          name="name"
          placeholder="Fullname..."
          className="bg-slate-100 p-3 rounded-lg"
          {...register("name", {
            required: {
              value: true,
              message: "Name is required",
            },
          })}
        />

        <p className="text-red-500 flex flex-col justify-center items-start max-h-0">
          {errors.username?.message}
        </p>
        <input
          type="text"
          name="username"
          placeholder="Username..."
          className="bg-slate-100 p-3 rounded-lg"
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
        />

        <p className="text-red-500 flex flex-col justify-center items-start max-h-0">
          {errors.email?.message}
        </p>
        <input
          type="email"
          name="email"
          placeholder="Email..."
          className="bg-slate-100 p-3 rounded-lg"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
        />

        <p className="text-red-500 flex flex-col justify-center items-start max-h-0">
          {errors.password?.message}
        </p>
        <input
          type="password"
          name="password"
          placeholder="Password..."
          className="bg-slate-100 p-3 rounded-lg"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
        />

        <button className="bg-green-950 text-white p-4 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loading ? "loading" : "signup"}
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
