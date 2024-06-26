import React from "react";
import movieIcon from "/assets/icon-category-movie.svg";
import Image from "next/image";
function SignUp() {
  return (
    <div className="w-full h-full absolute bg-[#10141E] flex flex-col justify-center items-center gap-[58px] px-[24px]">
      <div className="">
        <svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="26"
          viewBox="0 0 33 26"
          fill="none"
        >
          <path
            d="M26.463 0.408386L29.663 6.80839H24.863L21.663 0.408386H18.463L21.663 6.80839H16.863L13.663 0.408386H10.463L13.663 6.80839H8.86298L5.66298 0.408386H4.06298C2.29498 0.408386 0.878976 1.84039 0.878976 3.60839L0.862976 22.8084C0.862976 24.5764 2.29498 26.0084 4.06298 26.0084H29.663C31.431 26.0084 32.863 24.5764 32.863 22.8084V0.408386H26.463Z"
            fill="#FC4747"
          />
        </svg>
      </div>
      <div className=" w-full lg:h-[418px] sm:h-[373px] h-[365px] rounded-[20px] bg-[var(--Semi-Dark-Blue,_#161D2F)] flex flex-col p-6 gap-10">
        <h1 className="text-[#FFF] text-[32px] font-normal tracking-[-0.5px]">
          Sign Up
        </h1>
        <form action="" className="flex flex-col gap-[24px] ">
          <label
            htmlFor="email"
            className="text-[#FFF] opacity-50  text-[15px] not-italic font-normal leading-[normal] flex flex-col gap-[18px]"
          >
            <input
              type="text"
              id="email"
              placeholder="Email address "
              className="bg-transparent text-white outline-none"
            />
            <div className="w-full h-[1px] bg-[#5A698F]"></div>
          </label>
          <label
            htmlFor="password"
            className="text-[#FFF] opacity-50  text-[15px] not-italic font-normal leading-[normal] flex flex-col gap-[18px]"
          >
            <input
              type="text"
              id="password"
              placeholder="Password "
              className="bg-transparent text-white outline-none"
            />
            <div className="w-full h-[1.5px] bg-[#5A698F]"></div>
          </label>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
