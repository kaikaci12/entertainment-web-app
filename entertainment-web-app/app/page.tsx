"use client";
import Image from "next/image";
import data from "../data.json";
import { useEffect, useState } from "react";

export default function Home() {
  const [movieData, setMovieData] = useState([]);

  const [seriesData, setSeriesData] = useState([]);
  const trendingData = data.filter((movie) => movie.isTrending);

  return (
    <div className="w-full h-full  absolute lg:gap-[30px] lg:flex  bg-[#10141E] sm:p-[25px] lg:py-[32px] ">
      <header className="sm:h-[72px] w-full h-[56px] bg-[#161D2F] sm:rounded-[10px] lg:rounded-[20px] flex justify-between items-center px-[16px]  lg:h-full  lg:w-[96px] lg:flex-col lg:py-[32px] lg:ju">
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
        <nav className="flex gap-[20px] sm:gap-[40px] items-center lg:flex-col">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
              fill="#5A698F"
            />
          </svg>
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
              fill="#5A698F"
            />
          </svg>
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
              fill="#5A698F"
            />
          </svg>
          <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
              fill="#5A698F"
            />
          </svg>
        </nav>
        <img
          alt="avatar"
          src="/assets/image-avatar.png"
          className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] rounded-full border-2 border-white"
        />
      </header>
      <main className="p-[16px] flex flex-col gap-[24px]">
        <div className="flex gap-[24px] mt-[26px] sm:mt-[34px] lg:mt-[45px]">
          <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
              fill="#FFF"
            />
          </svg>
          <input
            type="search"
            className="bg-transparent text-[#FFF] text-[24px] font-normal opacity-50 w-full outline-none"
            placeholder="Search for movies or TV series"
          />
        </div>
        <h1 className="text-[#FFF] text-[20px] font-normal tracking-[-0.312px]">
          Trending
        </h1>
        <section className="flex  gap-[16px]">
          {trendingData.map((movie, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${movie.thumbnail.trending?.large})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="w-[240px] h-[140px] rounded-[8px]"
              ></div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
