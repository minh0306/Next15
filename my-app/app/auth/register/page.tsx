import Link from "next/link";

const Register = () => {
  return (
    <div className="bg-yellow-300 flex items-center min-h-[600px] justify-end  px-2 lg:pr-56">
      <div className="max-w-md  bg-white shadow-lg rounded-lg p-8">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-left mb-6">Sign up</h1>
        </div>

        <form className="">
          <div className="mb-4">
            <input
              type="text"
              id="phone"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-200"
              placeholder="Phone Number"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-yellow-200 text-white font-bold rounded-md hover:bg-yellow-300"
          >
            NEXT
          </button>

          <div className="text-center text-gray-400 my-4 flex items-center gap-5">
            <div className="w-full bg-[#dbdbdb] h-0.5" />
            OR
            <div className="w-full bg-[#dbdbdb] h-0.5" />
          </div>

          <div className="flex justify-between gap-4">
            <button className="w-full py-2 bg-blue-600 text-white rounded-md flex items-center justify-center hover:bg-blue-700">
              <span className="font-bold">Facebook</span>
            </button>
            <button className="w-full py-2 bg-red-500 text-white rounded-md flex items-center justify-center hover:bg-red-600">
              <span className="font-bold">Google</span>
            </button>
          </div>
        </form>

        <div className="text-center text-sm text-gray-600 mt-6">
          By signing up, you agree to Shopee's{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms of Service{" "}
          </a>
          &amp;
          <a href="#" className="text-blue-600 hover:underline">
            {" "}
            Privacy Policy
          </a>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-500">
            Have an account?{" "}
            <Link
              href="/login"
              className="text-orange-500 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
