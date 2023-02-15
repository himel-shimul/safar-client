import React, { useCallback, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const RegisterForm = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();


  // const handleRegister = useCallback(data) => {
  //   console.log("hello");
  // };

  const onSubmit = useCallback(async (data) => {
    setIsSubmitting(true);
    try {
      // make API call to register user
      createUser(data.email, data.password)
        .then((data) => {
          console.log(data.user);

          saveUser({ email: data.user.email });
          reset();
          navigate('/myaccount/profile')

        })
        .catch((error) => {
          setError(error);
          console.error(error);
        });
      //const response = await registerUser(data);
      console.log(data);
      setIsSubmitting(false);
      // redirect to homepage
    } catch (err) {
      setError(err.message);
      setIsSubmitting(false);
      console.log(err);
    }
  }, []);

  // save user to database
  const saveUser = (user) => {
    console.log(user);
    fetch("https://safar-server-nasar06.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after storage", data);
        localStorage.setItem("accessToken", data.token);
        // if(data.acknowledged){
        //   console.log('user save to database')
        // }
      });
  };

  return (
    <div>
      {" "}
      <div className="flex min-h-full items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Create Account
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-6"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div className="mb-2">
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  id="email-address"
                  type="email"
                  autoComplete="email"
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Email"
                />
                {errors.email &&
                  "Email is required and must be a valid format."}
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  {...register("password", { required: true, minLength: 6 })}
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />

                {errors.password &&
                  "Password is required and must be at least 8 characters."}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                {/* <Link
                  to="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </Link> */}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-teal-500 py-2 px-4 text-sm font-medium text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                SIGN UP
              </button>
              {error && <p>{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
