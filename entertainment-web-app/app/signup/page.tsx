"use client";
import React from "react";
import movieIcon from "/assets/icon-category-movie.svg";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { Span } from "next/dist/trace";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function SignUp() {
  type Inputs = {
    email: string;
    password: string;
    repeatPassword: string;
  };
  const schema = yup.object({
    email: yup.string().required("Can't be blank"),
    password: yup.string().required("Can't be blank"),
    repeatPassword: yup
      .string()
      .required("Can't be blank")
      .test(
        "check correctly repeated password",
        "passwords dont match",
        (value) => value === password
      ),
  });
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const password: string = watch("password");
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(errors);
  return (
    <div className="w-full h-full absolute bg-[#10141E] flex flex-col lg:justify-center  items-center  gap-[58px] px-[24px]">
      <div className="mt-[48px] sm:mt-[88px] lg:mt-0">
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
      <div className=" w-full sm:w-[400px]  rounded-[20px] bg-[var(--Semi-Dark-Blue,_#161D2F)] flex flex-col p-6 gap-10">
        <h1 className="text-[#FFF] text-[32px] font-normal tracking-[-0.5px]">
          Sign Up
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="flex flex-col gap-[24px] "
        >
          <label
            htmlFor="email"
            className="text-[#FFF] opacity-50  text-[15px] not-italic font-normal leading-[normal] flex flex-col gap-[18px]"
          >
            <input
              {...register("email")}
              type="text"
              id="email"
              placeholder="Email address"
              className="bg-transparent text-white outline-none"
            />
            {errors.email && (
              <span className="text-[13px] font-normal text-[#FC4747] ">
                {errors.email.message}
              </span>
            )}
            <div className="w-full h-[1px] bg-[#5A698F]"></div>
          </label>
          <label
            htmlFor="password"
            className="text-[#FFF] opacity-50  text-[15px] not-italic font-normal leading-[normal] flex flex-col gap-[18px]"
          >
            <input
              {...register("password")}
              type="text"
              id="password"
              placeholder="Password"
              className="bg-transparent text-white outline-none"
            />
            {errors.password && (
              <span className="text-[13px] font-normal text-[#FC4747] ">
                {errors.password.message}
              </span>
            )}
            <div className="w-full h-[1.5px] bg-[#5A698F]"></div>
          </label>
          <label
            htmlFor="password"
            className="text-[#FFF] opacity-50  text-[15px] not-italic font-normal leading-[normal] flex flex-col gap-[18px]"
          >
            <input
              {...register("repeatPassword")}
              type="text"
              id="password"
              placeholder="Repeat Password "
              className="bg-transparent text-white outline-none"
            />
            {errors.repeatPassword && (
              <span className="text-[13px] font-normal text-[#FC4747] ">
                {errors.repeatPassword.message}
              </span>
            )}
            <div className="w-full h-[2px] bg-[#5A698F]"></div>
          </label>
          <button className="text-center text-[15px] text-white font-normal rounded-[6px] bg-[#FC4747] w-full py-[15px]">
            Create an account
          </button>
        </form>
        <div className="w-full flex gap-[8px] justify-center">
          <span className="text-[#FFF] text-[15px] font-normal">
            Already have an account?
          </span>
          <span className=" text-[15px] font-normal text-[#FC4747]">Login</span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
