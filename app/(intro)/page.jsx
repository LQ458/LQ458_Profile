"use client";
import { useRef } from "react";
import { useState, useEffect } from "react";
import React from "react";
import { LuSigmaSquare } from "react-icons/lu";
import "@/app/i18n";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { IonIcon } from "@ionic/react";
import axios from "axios";
import { person } from "ionicons/icons";
import { TailSpin } from "react-loader-spinner";
import {
  logoGithub,
  logoNodejs,
  logoCss3,
  logoHtml5,
  logoVue,
  logoReact,
  logoAngular,
  logoPython,
  logoJavascript,
  logoVercel,
} from "ionicons/icons";
import "../src/intro.css";
import { set } from "mongoose";

const Intro = () => {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  // i18n setting
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const language = i18n.language.substring(0, 2); // get language from i18n
  // Pull info(language) from localStorage

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
    // save user option in localStorage
    localStorage.setItem("language", selectedLanguage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const button = document.getElementById("sub");
      setLoading(true);
      if (button) {
        button.style.transition = "all 0.5s";
        button.style.width = "16rem";
      }
      const response = await axios.post("/api/message", {
        name: name,
        email: email,
        suggestion: suggestion,
        note: note,
      });
      setLoading(false);
      if (button) {
        button.style.width = "7rem";
      }
      formRef.current.reset();
    } catch (error) {
      setLoading(false);
      if (button) {
        button.style.width = "7rem";
      }
      setError(true);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };
  return (
    <main>
      <title>{t("Yihao Qin's Profile")}</title>
      <div className="header-container">
        <div className="icon-container">
          <IonIcon
            icon={person}
            style={{ fontSize: "2.3rem" }}
            className="icon"
          />
        </div>
        <div
          className={`Content ${i18n.language.substring(0, 2) === "zh" && "add"}`}
        >
          {t("Yihao Qin's Profile")}
        </div>
      </div>
      <div className="bg1" />
      <div className="language-selector">
        <select
          id="lang"
          name="lang"
          onChange={changeLanguage}
          value={language}
        >
          <option value="en">English</option>
          <option value="zh">中文</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="ja">日本語</option>
        </select>
      </div>

      <div className="background-shapes">
        <div className="logoBox1">
          <Link href="https://github.com/LQ458" target="_blank">
            <IonIcon
              icon={logoGithub}
              style={{ fontSize: "4rem" }}
              className="icon1"
            />
          </Link>
        </div>
        <div className="logoBox2">
          <Link href="https://nodejs.org/en/" target="_blank">
            <IonIcon
              icon={logoNodejs}
              style={{ fontSize: "4rem" }}
              className="icon2"
            />
          </Link>
        </div>

        <div className="logoBox3">
          <Link href="https://css3.com/" target="_blank">
            <IonIcon
              icon={logoCss3}
              style={{ fontSize: "4rem" }}
              className="icon1"
            />
          </Link>
        </div>

        <div className="logoBox4">
          <Link
            href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
            target="_blank"
          >
            <IonIcon
              icon={logoHtml5}
              style={{ fontSize: "4rem" }}
              className="icon2"
            />
          </Link>
        </div>

        <div className="logoBox5">
          <Link href="https://vuejs.org/" target="_blank">
            <IonIcon
              icon={logoVue}
              style={{ fontSize: "4rem" }}
              className="icon1"
            />
          </Link>
        </div>

        <div className="logoBox6">
          <Link href="https://www.python.org/" target="_blank">
            <IonIcon
              icon={logoPython}
              style={{ fontSize: "4rem" }}
              className="icon2"
            />
          </Link>
        </div>

        <div className="logoBox7">
          <Link href="https://react.dev/" target="_blank">
            <IonIcon
              icon={logoReact}
              style={{ fontSize: "4rem" }}
              className="icon1"
            />
          </Link>
        </div>

        <div className="logoBox8">
          <Link href="https://vercel.com/" target="_blank">
            <IonIcon
              icon={logoVercel}
              style={{ fontSize: "4rem" }}
              className="icon2"
            />
          </Link>
        </div>

        <div className="logoBox9">
          <Link href="https://angular.io/" target="_blank">
            <IonIcon
              icon={logoAngular}
              style={{ fontSize: "4rem" }}
              className="icon1"
            />
          </Link>
        </div>

        <div className="logoBox10">
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            <IonIcon
              icon={logoJavascript}
              style={{ fontSize: "4rem" }}
              className="icon2"
            />
          </Link>
        </div>
      </div>

      <div className="sigma">
        <LuSigmaSquare />
      </div>

      <div className="profile">
        <h1
          className={`pTitle ${i18n.language.substring(0, 2) === "zh" && "add1"}`}
        >
          {t("Yihao Qin (Nickname: Leo)")}
        </h1>
        <p
          className={`pContent ${i18n.language.substring(0, 2) === "zh" && "add1"}`}
        >
          {t("Hii! I am a high school student currently studying in")}{" "}
          <Link
            href="https://biph.basischina.com/#/home?lang=en"
            target="_blank"
            className="underline toWeb"
          >
            {t("Basis International School Park Lane Harbor")}
          </Link>{" "}
          {t("in Huizhou, China. I've completed 4 AP classes (")}
          <Link
            href="https://apcentral.collegeboard.org/courses"
            target="_blank"
            className="underline toWeb"
          >
            {t("AP Macro and Microeconomics, AP World History, AP Physics 1")}
          </Link>
          {t("), and I am studying 4 more AP classes (")}
          <Link
            href="https://apcentral.collegeboard.org/courses"
            target="_blank"
            className="underline toWeb"
          >
            {t(
              "AP Calculus AB, AP Computer Science A, AP European History, AP Physics 2",
            )}
          </Link>
          {t(").")}
        </p>
        <p
          className={`pContent ${i18n.language.substring(0, 2) === "zh" && "add1"}`}
        >
          {t(
            "I am a self-taught programmer who mainly focuses on web development for now. I've already built several full-stack web applications using frontend framework such as",
          )}{" "}
          <span className="underline">{t("React, Vue, Angular")}</span>
          {t(", and backend framework such as")}
          <span className="underline">{t("Express and nodejs")}</span>
          {t(
            ". I am also familiar with other programming languages such as",
          )}{" "}
          <span className="underline">
            {t("C++, Java, Python, and JavaScript (Typescript as well)")}
          </span>
          {t(".")}
        </p>
      </div>
      <div className="links">
        <div className="link-grid">
          <Link
            href="https://github.com/LQ458"
            target="_blank"
            className="link-item1"
          >
            <h2 className="link-title">{t("My Github")}</h2>
            <p className="link-description">
              {t("Find me through github by clicking this tab (LQ458).")}
            </p>
          </Link>

          <Link href="/notes" className="link-item2">
            <h2 className="link-title">{t("LQ Notes")}</h2>
            <p className="link-description">
              {t("Find in-depth information about me and my studing notes.")}
            </p>
          </Link>

          <Link href="/news" className="link-item1">
            <h2 className="link-title">{t("News")}</h2>
            <p className="link-description">
              {t(
                "Always catch up with my latest projects and development news.",
              )}
            </p>
          </Link>

          <Link href="/life" className="link-item2">
            <h2 className="link-title">{t("LQ Life")}</h2>
            <p className="link-description">
              {t("Find more interesting aspects about me in this block.")}
            </p>
          </Link>
        </div>
      </div>
      <footer>
        <form onSubmit={handleSubmit} id="inputform" ref={formRef}>
          <div className="block"></div>
          <div className="inputbox">
            <input
              type="name"
              onChange={(e) => setName(e.target.value)}
              placeholder={t("Your Name")}
              className="inp"
            />
          </div>
          <div className="inputbox">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("Your Email")}
              className="inp"
            />
          </div>
          <div className="inputbox">
            <input
              type="suggestion"
              onChange={(e) => setSuggestion(e.target.value)}
              required
              placeholder={t("Any Problems?*")}
              className="inp"
            />
          </div>
          <div className="inputbox">
            <input
              type="note"
              onChange={(e) => setNote(e.target.value)}
              required
              placeholder={t("Leave a Message...*")}
              className="inp"
            />
          </div>
          <div className="sbtn">
            <button type="submit" className="sub" id="sub" disabled={loading}>
              {loading && (
                <div className="loader">
                  <TailSpin
                    type="ThreeDots"
                    color="#953cff"
                    height={20}
                    width={20}
                  />
                  <p style={{ marginLeft: "8px" }}>Loading...</p>
                </div>
              )}
              {!loading && t("Send")}
            </button>
          </div>
          <div className="register">
            {error && <p className="error">Internal Server Error</p>}
            <br />
          </div>
        </form>
      </footer>
    </main>
  );
};

export default Intro;
