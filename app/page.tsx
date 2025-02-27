import Link from "next/link";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-700 to-purple-600 p-6">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome!</h1>
        <p className="text-lg text-gray-700 mb-8">
          To continue, please choose an option below:
        </p>
        <div className="space-y-4">
          <Link href="/signup">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300">
              Sign Up
            </button>
          </Link>
          <span className="block text-sm text-gray-600">or</span>
          <Link href="/login">
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-300">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
