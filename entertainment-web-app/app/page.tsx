import Link from "next/link";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-700 to-purple-600 p-6">
      <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg animate-fade-in">
        Welcome!
      </h1>
      <p className="text-2xl text-white mb-6 animate-fade-in delay-200">
        To continue:
      </p>
      <div className="flex flex-col items-center gap-3">
        <Link href="/signup">
          <button className="text-2xl  p-5 bg-yellow-500 text-white decoration-dotted hover:text-blue-800 hover:decoration-solid transition duration-300 animate-fade-in delay-300">
            Sign Up
          </button>
        </Link>
        <span className="text-xl text-white animate-fade-in delay-400">or</span>
        <Link href="/login">
          <button className="text-2xl  p-5 bg-yellow-500 text-white decoration-dotted hover:text-blue-800 hover:decoration-solid transition duration-300 animate-fade-in delay-300">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}
