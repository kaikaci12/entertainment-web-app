"use client";
import Image from "next/image";
import data from "../../data.json";
import { useEffect, useState } from "react";
import { TMovie } from "../types";
import NextTopLoader from "nextjs-toploader";
import { useRouter } from "next/navigation";
import BookMarked from "../components/BookMarked";
import LogOut from "../components/LogOut";
import SearchResultsWrapper from "../components/SearchResultsWrapper";

export default function Dashboard() {
  const [filmData, setFilmData] = useState<TMovie[]>(data);
  const [filteredMovies, setFilteredMovies] = useState<TMovie[]>(data);
  const [seriesActive, setSeriesActive] = useState(false);
  const [moviesActive, setMoviesActive] = useState(false);
  const [bookmarkedActive, setBookMarkActive] = useState(false);
  const [homeActive, setHomeActive] = useState(true);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [logOut, setLogOut] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const [searchResults, setSearchResults] = useState<TMovie[]>([]);

  const filterMoviesByCategory = (category: string) => {
    setFilteredMovies(filmData.filter((movie) => movie.category === category));
  };
  const trendingData = filmData.filter((movie) => movie.isTrending);
  const router = useRouter();

  useEffect(() => {
    const storage = localStorage.getItem("authDetails");
    if (!storage && userLoggedIn) {
      router.push("/login");
    }
  }, [localStorage, userLoggedIn]);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleThumbnailSize(movie: TMovie) {
    if (windowWidth <= 640) {
      return movie.thumbnail.regular.small;
    }
    if (windowWidth >= 640 && windowWidth <= 1024) {
      return movie.thumbnail.regular.medium;
    } else {
      return movie.thumbnail.regular.large;
    }
  }
  function handleTitle() {
    if (moviesActive) return "Movies";

    if (homeActive) return "Recommended for you";
    if (seriesActive) return "TV Series";
  }
  useEffect(() => {
    setSearchResults(
      filmData.filter((value) => {
        const results = value.title
          .toLowerCase()
          .includes(searchValue.toLowerCase().trim());

        if (homeActive) {
          return results;
        } else if (moviesActive) {
          return results && value.category === "Movie";
        } else if (seriesActive) {
          return results && value.category === "TV Series";
        } else {
          return results && value.isBookmarked;
        }
      })
    );
  }, [searchValue]);
  console.log(searchResults);

  return (
    <div className="  bg-[#10141E]  w-full h-full lg:gap-[30px]  lg:flex   sm:p-[25px] lg:py-[32px] ">
      <header className="sm:h-[72px]  w-full h-[56px] bg-[#161D2F] sm:rounded-[10px] lg:rounded-[20px] flex justify-between items-center px-[16px]  lg:h-screen  lg:w-[96px] lg:flex-col lg:py-[32px] ">
        <svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="26"
          viewBox="0 0 33 26"
          fill="#000"
        >
          <path
            d="M26.463 0.408386L29.663 6.80839H24.863L21.663 0.408386H18.463L21.663 6.80839H16.863L13.663 0.408386H10.463L13.663 6.80839H8.86298L5.66298 0.408386H4.06298C2.29498 0.408386 0.878976 1.84039 0.878976 3.60839L0.862976 22.8084C0.862976 24.5764 2.29498 26.0084 4.06298 26.0084H29.663C31.431 26.0084 32.863 24.5764 32.863 22.8084V0.408386H26.463Z"
            fill="#FC4747"
          />
        </svg>
        <nav className="flex gap-[20px] sm:gap-[40px] items-center lg:flex-col">
          <svg
            className="cursor-pointer"
            onClick={() => {
              setHomeActive(true);
              setFilteredMovies(data);
              setMoviesActive(false);

              setBookMarkActive(false);
              setSeriesActive(false);
            }}
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
              fill={` ${homeActive ? "#fff" : " #5A698F"}`}
            />
          </svg>
          <svg
            className="cursor-pointer"
            onClick={() => {
              setMoviesActive(true);
              filterMoviesByCategory("Movie");
              setHomeActive(false);
              setBookMarkActive(false);
              setSeriesActive(false);
            }}
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
              fill={`${moviesActive ? "#fff" : "#5A698F"}`}
            />
          </svg>
          <svg
            className="cursor-pointer"
            onClick={() => {
              setSeriesActive(true);
              filterMoviesByCategory("TV Series");
              setMoviesActive(false);
              setHomeActive(false);
              setBookMarkActive(false);
            }}
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
              fill={`${seriesActive ? "#fff" : "#5A698F"}`}
            />
          </svg>
          <svg
            className="cursor-pointer"
            onClick={() => {
              setBookMarkActive(true);

              setSeriesActive(false);
              setMoviesActive(false);
              setHomeActive(false);
            }}
            width="17"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
              fill={`${bookmarkedActive ? "#fff" : "#5A698F"}`}
            />
          </svg>
        </nav>
        <div
          onClick={() => setUserLoggedIn(true)}
          className="flex flex-col gap-5 w-full items-start"
        >
          <img
            onClick={() => setLogOut(!logOut)}
            alt="avatar"
            src="/assets/image-avatar.png"
            className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] cursor-pointer rounded-full border-2 border-white"
          />
          <div
            className={`ease-linear absolute left-0${
              logOut ? " translate-x-20" : ""
            }  duration-500 z-[999]`}
          >
            {logOut && <LogOut />}
          </div>
        </div>
      </header>
      <main className="p-[16px] flex flex-col relative h-full gap-[24px] ">
        <div className="flex gap-[24px] mt-[26px] sm:mt-[34px] lg:mt-[45px]">
          <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
              fill="#FFF"
            />
          </svg>
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            type="search"
            className="bg-transparent text-[#FFF] text-[24px] font-normal opacity-50 w-full outline-none"
            placeholder={
              homeActive
                ? "Search for movies or TV series"
                : moviesActive
                ? "Search for movies"
                : seriesActive
                ? "Search for TV series"
                : "Search for bookmarked shows"
            }
          />
        </div>
        {homeActive && searchValue === "" && (
          <div className="  ">
            <h1 className="text-[#FFF] text-[30px] font-normal tracking-[-0.312px] ">
              Trending
            </h1>
            <section
              className={`  overflow-x-auto py-10 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[1000px] `}
            >
              <div className=" flex flex-nowrap gap-[30px] lg:gap-[70px] p-1 lg:p-0  ">
                {trendingData.map((movie, index) => {
                  return (
                    <div key={index} className="relative flex-shrink-0">
                      <div
                        className="movie-container lg:w-[470px] w-[320px] group  h-[140px] md:w-[470px] md:h-[230px] rounded-[8px] flex flex-col items-center gap-[4px] p-5 "
                        style={{
                          backgroundImage: `url(${
                            windowWidth >= 1024
                              ? movie.thumbnail.trending?.large
                              : movie.thumbnail.trending?.small
                          })`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="h-full  flex justify-center items-center ">
                          <div className="w-[117px] hidden    group-hover:flex group-hover:duration-300 absolute h-[48px] rounded-[28.5px] bg-opacity-25 bg-white  p-4 justify-between   items-center">
                            <span className="text-white  text-[18px]">
                              Play
                            </span>
                            <svg
                              width="30"
                              height="30"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
                                fill="#fff"
                              />
                            </svg>
                          </div>
                        </div>
                        <div
                          onClick={() => {
                            const currentMovie = filteredMovies.find(
                              (item, i) => i === index
                            );
                            setFilteredMovies((prevMovies) =>
                              prevMovies.map((movie) => {
                                if (movie.title === currentMovie?.title) {
                                  return {
                                    ...movie,
                                    isBookmarked: !movie.isBookmarked,
                                  };
                                }
                                return movie;
                              })
                            );
                            setFilmData((prevMovies) =>
                              prevMovies.map((movie) => {
                                if (movie.title === currentMovie?.title) {
                                  return {
                                    ...movie,
                                    isBookmarked: !movie.isBookmarked,
                                  };
                                }
                                return movie;
                              })
                            );
                          }}
                          className={`cursor-pointer absolute right-[10px] ${
                            movie.isBookmarked
                              ? "hover:bg-black"
                              : "hover:bg-white"
                          }  rounded-full    top-[10px] z-[999]`}
                        >
                          <circle fill="#10141E"></circle>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill={`${movie.isBookmarked ? "#fff" : "none"}`}
                          >
                            <path
                              d="M20.7112 9.771L20.7215 9.77548L20.7319 9.77965C20.7992 9.80657 20.8386 9.84049 20.8705 9.88692C20.9032 9.93458 20.9167 9.97786 20.9167 10.0364V21.9636C20.9167 22.0221 20.9032 22.0654 20.8705 22.1131C20.8386 22.1595 20.7992 22.1934 20.7319 22.2203L20.7237 22.2236L20.7156 22.2271C20.7107 22.2292 20.6807 22.2407 20.6094 22.2407C20.5085 22.2407 20.4397 22.2142 20.3686 22.15L16.3572 18.2346L15.8333 17.7233L15.3095 18.2346L11.2975 22.1505C11.2129 22.2276 11.1421 22.25 11.0573 22.25C11.02 22.25 10.9882 22.2433 10.9555 22.229L10.9452 22.2245L10.9347 22.2203C10.8674 22.1934 10.8281 22.1595 10.7962 22.1131C10.7635 22.0654 10.75 22.0221 10.75 21.9636V10.0364C10.75 9.97786 10.7635 9.93458 10.7962 9.88692C10.8281 9.84049 10.8674 9.80657 10.9347 9.77965L10.9452 9.77548L10.9555 9.771C10.9882 9.75674 11.02 9.75 11.0573 9.75H20.6094C20.6466 9.75 20.6784 9.75674 20.7112 9.771Z"
                              stroke={movie.isBookmarked ? "white" : "black"}
                              stroke-width="1.5"
                            />
                          </svg>
                        </div>
                        <div className="w-full flex flex-col justify-center gap-3 items-start">
                          <div className="flex items-center  gap-2">
                            <span className="text-[#FFF] text-[12px] font-normal opacity-75">
                              {movie.year}
                            </span>
                            <div className="rounded-full bg-white opacity-50 w-[3px] h-[3px]"></div>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                            >
                              <path
                                opacity="0.75"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M10.1733 0H1.82667C0.817827 0 0 0.817827 0 1.82667V10.1733C0 11.1822 0.817827 12 1.82667 12H10.1733C10.6578 12 11.1224 11.8075 11.465 11.465C11.8075 11.1224 12 10.6578 12 10.1733V1.82667C12 1.3422 11.8075 0.877585 11.465 0.535018C11.1224 0.192452 10.6578 0 10.1733 0ZM2.4 5.4H1.2V4.2H2.4V5.4ZM2.4 6.6H1.2V7.8H2.4V6.6ZM10.8 5.4H9.6V4.2H10.8V5.4ZM10.8 6.6H9.6V7.8H10.8V6.6ZM10.8 1.644V2.4H9.6V1.2H10.356C10.4738 1.2 10.5867 1.24678 10.67 1.33004C10.7532 1.41331 10.8 1.52624 10.8 1.644ZM2.4 1.2H1.644C1.52624 1.2 1.41331 1.24678 1.33004 1.33004C1.24678 1.41331 1.2 1.52624 1.2 1.644V2.4H2.4V1.2ZM1.2 10.356V9.6H2.4V10.8H1.644C1.52624 10.8 1.41331 10.7532 1.33004 10.67C1.24678 10.5867 1.2 10.4738 1.2 10.356ZM10.356 10.8C10.6012 10.8 10.8 10.6012 10.8 10.356V9.6H9.6V10.8H10.356Z"
                                fill="white"
                              />
                            </svg>
                            <span className="text-[#FFF] text-[12px] font-normal opacity-75">
                              {movie.category}
                            </span>

                            <div className="rounded-full bg-white opacity-50 w-[3px] h-[3px]"></div>
                            <span className="text-[#FFF] text-[12px] font-normal opacity-75">
                              {movie.rating}
                            </span>
                          </div>
                          <h2 className="text-[#FFF] text-[18px] font-bold">
                            {movie.title}
                          </h2>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        )}

        <section className="flex flex-col gap-[32px]">
          {searchValue === "" ? (
            <h2 className="text-[#FFF] text-[32px] font-normal tracking-[-0.5px]">
              {handleTitle()}
            </h2>
          ) : (
            <h2 className="text-[#FFF] text-[32px] font-normal tracking-[-0.5px]">
              Found {searchResults.length} results for "{searchValue}"
            </h2>
          )}

          <div className="flex flex-wrap gap-[15px] sm:gap-[30px]  lg:gap-[40px]">
            {searchValue === "" && !bookmarkedActive ? (
              filteredMovies.map((movie, index) => {
                return (
                  <div
                    key={index}
                    className=" flex flex-col gap-2 cursor-pointer "
                  >
                    <div
                      style={{
                        backgroundImage: `url(${handleThumbnailSize(movie)})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                      className="movie-container w-[164px] group  p-[16px] h-[110px] rounded-[8px] sm:w-[220px] sm:h-[140px] lg:w-[280px] lg:h-[174px]"
                    >
                      <div className="h-full  flex justify-center items-center">
                        <div className="w-[117px] hidden    group-hover:flex group-hover:duration-300 absolute h-[48px] rounded-[28.5px] bg-opacity-25 bg-white  p-4 justify-between   items-center">
                          <span className="text-white  text-[18px]">Play</span>
                          <svg
                            width="30"
                            height="30"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
                              fill="#fff"
                              className="z-[999]"
                            />
                          </svg>
                        </div>
                      </div>

                      <div
                        onClick={() => {
                          const currentMovie = filteredMovies.find(
                            (item, i) => i === index
                          );

                          setFilmData((prevMovies) =>
                            prevMovies.map((movie) => {
                              if (movie.title === currentMovie?.title) {
                                return {
                                  ...movie,
                                  isBookmarked: !movie.isBookmarked,
                                };
                              }
                              return movie;
                            })
                          );
                          setFilteredMovies((prevMovies) =>
                            prevMovies.map((movie) => {
                              if (movie.title === currentMovie?.title) {
                                return {
                                  ...movie,
                                  isBookmarked: !movie.isBookmarked,
                                };
                              }
                              return movie;
                            })
                          );
                        }}
                        className=" absolute top-[10px] right-[10px] z-[999]"
                      >
                        <svg
                          className=""
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill={`${movie.isBookmarked ? "#fff" : "#10141E"}`}
                        >
                          <circle
                            opacity="0.500647"
                            cx="16"
                            cy="16"
                            r="16"
                            fill="#10141E"
                          />
                          <path
                            d="M20.7112 9.771L20.7215 9.77548L20.7319 9.77965C20.7992 9.80657 20.8386 9.84049 20.8705 9.88692C20.9032 9.93458 20.9167 9.97786 20.9167 10.0364V21.9636C20.9167 22.0221 20.9032 22.0654 20.8705 22.1131C20.8386 22.1595 20.7992 22.1934 20.7319 22.2203L20.7237 22.2236L20.7156 22.2271C20.7107 22.2292 20.6807 22.2407 20.6094 22.2407C20.5085 22.2407 20.4397 22.2142 20.3686 22.15L16.3572 18.2346L15.8333 17.7233L15.3095 18.2346L11.2975 22.1505C11.2129 22.2276 11.1421 22.25 11.0573 22.25C11.02 22.25 10.9882 22.2433 10.9555 22.229L10.9452 22.2245L10.9347 22.2203C10.8674 22.1934 10.8281 22.1595 10.7962 22.1131C10.7635 22.0654 10.75 22.0221 10.75 21.9636V10.0364C10.75 9.97786 10.7635 9.93458 10.7962 9.88692C10.8281 9.84049 10.8674 9.80657 10.9347 9.77965L10.9452 9.77548L10.9555 9.771C10.9882 9.75674 11.02 9.75 11.0573 9.75H20.6094C20.6466 9.75 20.6784 9.75674 20.7112 9.771Z"
                            stroke="white"
                            stroke-width="1.5"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#FFF] text-[12px] font-normal opacity-75">
                        {movie.year}
                      </span>
                      <div className="rounded-full bg-white opacity-50 w-[3px] h-[3px]"></div>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          opacity="0.75"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.1733 0H1.82667C0.817827 0 0 0.817827 0 1.82667V10.1733C0 11.1822 0.817827 12 1.82667 12H10.1733C10.6578 12 11.1224 11.8075 11.465 11.465C11.8075 11.1224 12 10.6578 12 10.1733V1.82667C12 1.3422 11.8075 0.877585 11.465 0.535018C11.1224 0.192452 10.6578 0 10.1733 0ZM2.4 5.4H1.2V4.2H2.4V5.4ZM2.4 6.6H1.2V7.8H2.4V6.6ZM10.8 5.4H9.6V4.2H10.8V5.4ZM10.8 6.6H9.6V7.8H10.8V6.6ZM10.8 1.644V2.4H9.6V1.2H10.356C10.4738 1.2 10.5867 1.24678 10.67 1.33004C10.7532 1.41331 10.8 1.52624 10.8 1.644ZM2.4 1.2H1.644C1.52624 1.2 1.41331 1.24678 1.33004 1.33004C1.24678 1.41331 1.2 1.52624 1.2 1.644V2.4H2.4V1.2ZM1.2 10.356V9.6H2.4V10.8H1.644C1.52624 10.8 1.41331 10.7532 1.33004 10.67C1.24678 10.5867 1.2 10.4738 1.2 10.356ZM10.356 10.8C10.6012 10.8 10.8 10.6012 10.8 10.356V9.6H9.6V10.8H10.356Z"
                          fill="white"
                        />
                      </svg>
                      <span className="text-[#FFF] text-[12px] font-normal opacity-75">
                        {movie.category}
                      </span>

                      <div className="rounded-full bg-white opacity-50 w-[3px] h-[3px]"></div>
                      <span className="text-[#FFF] text-[12px] font-normal opacity-75">
                        {movie.rating}
                      </span>
                    </div>
                    <h2 className="text-[#FFF] text-[15px] font-normal">
                      {movie.title}
                    </h2>
                  </div>
                );
              })
            ) : searchValue !== "" ? (
              <SearchResultsWrapper
                searchResults={searchResults}
                handleThumbnailSize={handleThumbnailSize}
              />
            ) : (
              <BookMarked
                filmData={filmData}
                handleThumbnailSize={handleThumbnailSize}
              />
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
