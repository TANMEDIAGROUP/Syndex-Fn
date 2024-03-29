import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";
import { RiMenu3Fill} from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useState,useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
//will have to fix Nav and Link
const NavigationLinks = [
  { title: "Home", route: "/" },
  { title: "Features", route: "/Features" },
  { title: "Community", route: "/Community" },
  { title: "Blog", route: "/Blog" },
  { title: "News", route: "/News" },
];
function Navbar({user}) {
  const [navStyle, setnavStyle] = useState("100%");
  useEffect(()=>{
    
  },[])
  return (
    <>
      <nav className="flex justify-between pb-4 md:py-2 items-center fixed w-full px-[3vw] z-[300] bg-white shadow-sm top-0">
        <Logo />
        <div className="hidden w-full md:relative  justify-end mr-6 md:flex flex-row">
          {NavigationLinks.map(({ title, route }) => {
            console.log(title);
            return (
              <a
                key={title}
                href={route}
                className="mx-4 text-lg text-lightGray hover:text-brandRed md:hover:scale-[1.25] hover:font-semibold my-4"
              >
                {title}
              </a>
            );
          })}
        </div>
        <div className=" min-w-max flex items-center ">
          {user ? (
            <div>
              <FaUserCircle className="text-4xl hover:text-brandRed hover:scale-105" />
            </div>
          ) : (
            <>
              <a href="/login" className="hover:bg-brandRed m-4 py-2 md:py-[.75em] px-6 rounded-md text-md md:text-lg hover:text-white hover:scale-105 max-w-fit bg-white text-brandRed border-2 border-brandRed"><button>Login</button></a>
              <Button text={"Sign up"} link="/register" />
            </>
          )}

          <button
            onClick={() => {
              if (navStyle == "100%") {
                setnavStyle("0%");
              } else {
                setnavStyle("100%");
              }
            }}
          >
            {navStyle == "100%" ? (
              <RiMenu3Fill className="text-4xl grid md:hidden ml-4" />
            ) : (
              <RxCross2 className="text-4xl grid md:hidden ml-4" />
            )}
          </button>
        </div>
      </nav>
      <div
        className="fixed right-0 flex flex-col h-[100vh] z-[100] bg-white top-0 w-[50%] pt-[4.3em] md:hidden"
        style={{ transform: `translateX(${navStyle})` }}
      >
        {NavigationLinks.map(({ title, route }) => {
          console.log(title);
          return (
            <a
              key={title}
              href={route}
              className="mx-4 text-lg text-lightGray hover:text-brandRed md:hover:scale-[1.25] hover:font-semibold my-4"
            >
              {title}
            </a>
          );
        })}
      </div>
    </>
  );
}

export default Navbar;
