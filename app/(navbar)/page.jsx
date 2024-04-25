"use client";
import React from "react";
import { useEffect, useState } from "react";
import "../src/navbar.css";
import Search from "../(search)/page";
import { CiSearch } from "react-icons/ci";
import { LuSigmaSquare } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import "../i18n";

const Navbar = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const language = i18n.language.substring(0, 2); // get language from i18n
  // Pull info(language) from localStorage
  const [searchDispaly, setSearchDisplay] = useState(false);

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

  return (
    <div className="navbar">
      <title>{t("Yihao Qin's Profile")}</title>
      <div className="navSig">
        <LuSigmaSquare />
      </div>
      <button type="button" onClick={handleOpen} className="searchBtn">
        <CiSearch />
        <p>{t("search")}</p>
        <div>/</div>
      </button>
      {searchDispaly && (
        <>
          <div className="greyBG" id="greyBG" onClick={handleClose} />
          <div className="searchDiv">
            <Search />
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
