import React from "react";
import Link from "next/link";
function page() {
  return (
    <div>
      <h1> Welcome!</h1>
      to Continue:
      <div className="flex flex-col gap-3 ">
        <Link className="text-blue-400 underline" href={"/signup"}>
          SignUp
        </Link>
        or
        <Link className="text-blue-400 underline" href={"/login"}>
          SignIn
        </Link>
      </div>
    </div>
  );
}

export default page;
