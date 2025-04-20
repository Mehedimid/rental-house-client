import PrimaryButton from "@/components/shared/PrimaryButton";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-6 ">
      <div className="flex flex-col gap-6 w-full max-w-md p-8 border-2 border-white shadow-theme "
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="text-secondary mt-2">Login to your account</p>
        </div>

        <form className="flex flex-col gap-6 mt-6">
          {/* Email Input */}
          <div className="grid gap-2">

            <input
              id="email"
              type="email"
              placeholder="Email Address"
              required
              className="border border-gray-300 focus:border-secondary outline-none p-3  w-full text-sm placeholder-secondary"
            />
          </div>

          {/* Password Input */}
          <div className="grid gap-2">
            <input
              id="password"
              type="password"
              placeholder="Password"
              required
              className="border border-gray-300 focus:border-secondary outline-none p-3  w-full text-sm placeholder-secondary"
            />
          </div>

          {/* Submit Button */}
          <PrimaryButton
            type="submit"
            customClass="w-full py-3 px-4 bg-blue-600 text-white hover:bg-blue-700"
          >
            Login
          </PrimaryButton>

          {/* Sign Up Link */}
          <div className="text-center text-sm mt-4">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline underline-offset-4 text-secondary">
              Sign up
            </Link>
          </div>
        </form>

      </div>
    </div>
  );
};

export default LoginForm;
