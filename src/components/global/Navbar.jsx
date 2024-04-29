import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isNavbarTop, setIsNavbarTop] = React.useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavbarTop(true);
      } else {
        setIsNavbarTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      style={{
        fontFamily: "Avenir",
        position: "fixed",
        backgroundColor: isNavbarTop ? "white" : "transparent",
        color: isNavbarTop ? "black" : "black",
      }}
      className="h-24 w-full flex justify-between items-center"
    >
      <div
        onClick={() => {
          navigate("/");
        }}
        className={`${
          isNavbarTop ? "text-black" : "text-white"
        } flex justify-center items-center gap-5 ml-5 cursor-pointer`}
      >
        <img src="/sipallogo.jpeg" alt="" className="rounded-full w-14 h-14" />
        <p className="text-2xl">Sipal</p>
      </div>
      <ul className="flex gap-3 justify-between">
        <li>
          <a
            className={`${
              isNavbarTop ? "text-black" : "text-white"
            } p-8 text-lg hover:font-bold`}
            onClick={() => {
              navigate("/about");
            }}
          >
            About Palembang
          </a>
        </li>
        <li>
          <a
            className={`${
              isNavbarTop ? "text-black" : "text-white"
            } p-8 text-lg hover:font-bold`}
            onClick={() => {
              navigate("/tips");
            }}
          >
            Practical Tips
          </a>
        </li>
        <li>
          <a
            className={`${
              isNavbarTop ? "text-black" : "text-white"
            } p-8 text-lg hover:font-bold`}
            onClick={() => {
              navigate("/destination");
            }}
          >
            Places To Go
          </a>
        </li>
      </ul>
      <div className="p-8"></div>
    </nav>
  );
}

export default Navbar;
