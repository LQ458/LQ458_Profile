"use client";
import React from "react";
import { useEffect, useState } from "react";
import "../app/src/navbar.css";
import Search from "./search.jsx";
import { CiSearch } from "react-icons/ci";
import { LuSigmaSquare } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";
import { IoLanguageOutline } from "react-icons/io5";
import { useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const language = i18n.language.substring(0, 2); // get language from i18n
  // Pull info(language) from localStorage
  const [searchDispaly, setSearchDisplay] = useState(false);
  const [showProject, setShowProject] = useState("loading");
  const ref = useRef();

  useEffect(() => {
    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", navigator.language.substring(0, 2));
    }
    const selectedLanguage = localStorage.getItem("language");
    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "/") {
        handleOpen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleOpen = () => {
    setSearchDisplay(true);
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = "hidden";
    }
  };

  const handleClose = () => {
    setSearchDisplay(false);
    const bg = document.getElementById("greyBG");
    const body = document.querySelector("body");
    if (bg && body) {
      bg.style.display = "none";
      body.style.overflow = "auto";
    }
  };

  const hideProject = () => {
    setShowProject("hide");
  };

  const openProject = () => {
    setShowProject("open");
  };

  return (
    <div className="navbar">
      <title>{t("Yihao Qin's Profile")}</title>
      <div className="navLeft">
        <Link href="/" className="navSig">
          <LuSigmaSquare />
        </Link>
        <button type="button" onClick={handleOpen} className="searchBtn">
          <CiSearch />
          <p>{t("search")}</p>
          <div>/</div>
        </button>
        <button className="languageBtn">
          <IoLanguageOutline />
        </button>
      </div>
      {searchDispaly && (
        <>
          <div className="greyBG" id="greyBG" onClick={handleClose} />
          <div className="searchDiv">
            <Search />
          </div>
        </>
      )}
      <div className="navRight">
        <button
          ref={ref}
          className="projectBtn"
          onMouseEnter={openProject}
          onMouseLeave={hideProject}
        >
          <p style={{ fontSize: "0.9rem" }}>{t("Projects")}</p>
          <IoIosArrowDown />
          <div
            className={`${showProject === "open" ? "fadeIn" : ""}${showProject === "hide" ? "fadeOut" : ""}${showProject === "loading" ? "ori" : ""}`}
          >
            <Link
              href="https://github.com/Oasisteens/OasisFrontend"
              target="_blank"
              className="projectLinks"
            >
              {t("Oasis Frontend")}
            </Link>
            <Link
              href="https://github.com/Oasisteens/OasisBackend"
              target="_blank"
              className="projectLinks"
            >
              {t("Oasis Backend")}
            </Link>
            <Link href="#" target="_blank" className="projectLinks">
              {t("BIPH Flora")}
            </Link>
            <Link href="#" target="_blank" className="projectLinks">
              {t("Todo List")}
            </Link>
            <Link
              href="https://github.com/LQ458/Sigma_Investing_Sourcecodes"
              target="_blank"
              className="projectLinks"
            >
              {t("Wharton Investing")}
            </Link>
          </div>
        </button>
        <Link href="#" className="toPlay">
          <p style={{ fontSize: "0.9rem" }}>{t("Playground")}</p>
          <IoIosArrowDown />
        </Link>
        <button className="projectBtn">
          <p style={{ fontSize: "0.9rem" }}>{t("Docs")}</p>
          <IoIosArrowDown />
        </button>
        <button className="themeBtn">
          <p style={{ fontSize: "0.9rem" }}>API</p>
        </button>
        <button className="themeBtn">
          <p style={{ fontSize: "0.9rem" }}>{t("Theme")}</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
