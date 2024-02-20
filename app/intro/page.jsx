"use client";
import { useRef } from "react";
import { useState, useEffect } from "react";
import React from "react";
import "@/app/i18n";
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
      setLoading(true);
      const response = await axios.post("/api/message", {
        name: name,
        email: email,
        suggestion: suggestion,
        note: note,
      });
      console.log("Message successfully sent");
      setLoading(false);
      formRef.current.reset();
    } catch (error) {
      setLoading(false);
      setError(true);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };
  return (
    <body>
      <div className="header-container">
        <div className="icon-container">
          <IonIcon
            icon={person}
            style={{ fontSize: "2.3rem" }}
            className="icon"
          />
        </div>
        <div className={`Content ${i18n.language.substring(0, 2) === 'zh' && "add"}`}>{t("Yihao Qin's Profile")}</div>
      </div>
      <div className="bg1"/>
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
          <a href="https://github.com/" target="_blank">
            <IonIcon
              icon={logoGithub}
              style={{ fontSize: "4rem" }}
              className="icon1"
            />
          </a>
        </div>
        <div className="logoBox2">
          <a href="https://nodejs.org/en/" target="_blank">
            <IonIcon
              icon={logoNodejs}
              style={{ fontSize: "4rem" }}
              className="icon2"
            />
          </a>
        </div>

        <div className="logoBox3">
          <a href="https://css3.com/" target="_blank">
            <IonIcon
              icon={logoCss3}
              style={{ fontSize: "4rem" }}
              className="icon1"
            />
          </a>
        </div>

        <div className="logoBox4">
          <a
            href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
            target="_blank"
          >
            <IonIcon
              icon={logoHtml5}
              style={{ fontSize: "4rem" }}
              className="icon2"
            />
          </a>
        </div>

        <div className="logoBox5">
          <a href="https://vuejs.org/" target="_blank">
            <IonIcon
              icon={logoVue}
              style={{ fontSize: "4rem" }}
              className="icon1"
            />
          </a>
        </div>

        <div className="logoBox6">
          <a href="https://www.python.org/" target="_blank">
            <IonIcon
              icon={logoPython}
              style={{ fontSize: "4rem" }}
              className="icon2"
            />
          </a>
        </div>

        <div className="logoBox7">
          <a href="https://react.dev/" target="_blank">
            <IonIcon
              icon={logoReact}
              style={{ fontSize: "4rem" }}
              className="icon1"
            />
          </a>
        </div>

        <div className="logoBox8">
          <a href="https://vercel.com/" target="_blank">
            <IonIcon
              icon={logoVercel}
              style={{ fontSize: "4rem" }}
              className="icon2"
            />
          </a>
        </div>

        <div className="logoBox9">
          <a href="https://angular.io/" target="_blank">
            <IonIcon
              icon={logoAngular}
              style={{ fontSize: "4rem" }}
              className="icon1"
            />
          </a>
        </div>

        <div className="logoBox10">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            <IonIcon
              icon={logoJavascript}
              style={{ fontSize: "4rem" }}
              className="icon2"
            />
          </a>
        </div>
      </div>

      <div className="profile">
        <h1 className={`pTitle`}>{t('Yihao Qin (Nickname: Leo)')}</h1>
        <p className={`pContent ${i18n.language.substring(0, 2) === 'zh' && "add"}`}>
          {t('Hii! I am a high school student currently studying in')}{" "}
          <a href="https://biph.basischina.com/#/home?lang=en" target="_blank" className="underline toWeb">
            {t('Basis International School Park Lane Harbor')}
          </a>{" "}
          {t("in Huizhou, China. I've completed 4 AP classes (")}
          <a href="https://apcentral.collegeboard.org/courses" target="_blank" className="underline toWeb">
            {t('AP Macro and Microeconomics, AP World History, AP Physics 1')}
          </a>
          {t('), and I am studying 4 more AP classes (')}
          <a href="https://apcentral.collegeboard.org/courses" target="_blank" className="underline toWeb">
            {t('AP Calculus AB, AP Computer Science A, AP European History, AP Physics 2')}
          </a>
          ).
        </p>
        <p className="pContent">
          I am a self-taught programmer who mainly focuses on web development
          for now. I've already built several full-stack web applications using
          frontend framework such as{" "}
          <span className="underline">React, Vue, Angular</span>, and backend
          framework such as
          <span className="underline">Express and nodejs</span>. I am also
          familiar with other programming languages such as{" "}
          <span className="underline">
            C++, Java, Python, and JavaScript (Typescript as well)
          </span>
          .
        </p>
      </div>
      <div className="links">
        <div className="link-grid">
          <a href="https://github.com/LQ458" className="link-item1">
            <h2 className="link-title">My Github</h2>
            <p className="link-description">
              Find me through github by clicking this tab (LQ458).
            </p>
          </a>

          <a href="/notes" className="link-item2">
            <h2 className="link-title">LQ Notes</h2>
            <p className="link-description">
              Find in-depth information about me and my studing notes.
            </p>
          </a>

          <a href="/news" className="link-item1">
            <h2 className="link-title">News</h2>
            <p className="link-description">
              Always catch up with my latest projects and development news.
            </p>
          </a>

          <a href="/life" className="link-item2">
            <h2 className="link-title">LQ Life</h2>
            <p className="link-description">
              Find more interesting aspects about me in this block.
            </p>
          </a>
        </div>
      </div>
      <footer>
        <form onSubmit={handleSubmit} id="inputform" ref={formRef}>
          <div className="block"></div>
          <div className="inputbox">
            <input
              type="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="inp"
            />
          </div>
          <div className="inputbox">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="inp"
            />
          </div>
          <div className="inputbox">
            <input
              type="suggestion"
              onChange={(e) => setSuggestion(e.target.value)}
              required
              placeholder="Any Problems?*"
              className="inp"
            />
          </div>
          <div className="inputbox">
            <input
              type="note"
              onChange={(e) => setNote(e.target.value)}
              required
              placeholder="Leave a Message...*"
              className="inp"
            />
          </div>
          <div className="sbtn">
            <button type="submit" className="sub" disabled={loading}>
              {loading && (
                <div className="loader">
                  <TailSpin
                    type="ThreeDots"
                    color="#431f82"
                    height={30}
                    width={50}
                  />
                  <p>Loading...</p>
                </div>
              )}
              {!loading && "Send"}
            </button>
          </div>
          <div className="register">
            {error && <p className="error">Internal Server Error</p>}
            <br />
          </div>
        </form>
      </footer>
    </body>
  );
};

export default Intro;
