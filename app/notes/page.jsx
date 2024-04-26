"use client";
import React from "react";
import { useEffect, useState } from "react";
import "../src/notes.css";
import "../i18n";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/navbar.jsx";

const Notes = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [current, setCurrent] = useState("");
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
  return (
    <main className="notes">
      <Navbar />
      <section className="notes">
        <div className="noteLeft">
          <div>
            <h1>{t("Start")}</h1>
            <div>
              <h2>
                <a href="#introduction">{t("Introduction")}</a>
              </h2>
              <h2>
                <a href="#preview">{t("Preview")}</a>
              </h2>
            </div>
          </div>
          <div>
            <h1>{t("Oasis Forum")}</h1>
            <div>
              <h2>
                <a href="#oasisOverview">{t("Overview")}</a>
              </h2>
              <h2>
                <a href="#oasisTechUse">{t("Tech Used")}</a>
              </h2>
              <h2>
                <a href="#oasisFeatures">{t("Features")}</a>
              </h2>
            </div>
          </div>
        </div>
        <div className="noteRight">
          <div className="left">
            <div id="introduction" className="leftOnes">
              <div className="leftOne">
                <h1>{t("Introduction")}</h1>
              </div>
              <div className="leftOne">
                <h1>{t("My Tech Stack")}</h1>
                <div className="techStack">
                  <ul className="doc">
                    <li>
                      <a href="https://reactjs.org/" target="_blank">
                        React
                      </a>
                    </li>
                    <li>
                      <a href="https://www.mongodb.com/" target="_blank">
                        MongoDB
                      </a>
                    </li>
                    <li>
                      <a href="https://expressjs.com/" target="_blank">
                        Express
                      </a>
                    </li>
                    <li>
                      <a href="https://nodejs.org/en/" target="_blank">
                        Node.js
                      </a>
                    </li>
                  </ul>
                  <ul className="doc">
                    <li>
                      <a href="https://angular.io/" target="_blank">
                        Angular
                      </a>
                    </li>
                    <li>
                      <a href="https://nextjs.org/" target="_blank">
                        Next.js
                      </a>
                    </li>
                    <li>
                      <a href="https://www.python.org/" target="_blank">
                        Python
                      </a>
                    </li>
                    <li>
                      <a href="https://www.java.com/" target="_blank">
                        Java
                      </a>
                    </li>
                  </ul>
                  <ul className="doc">
                    <li>
                      <a href="https://www.nginx.com/" target="_blank">
                        Nginx
                      </a>
                    </li>
                    <li>
                      <a href="https://www.cplusplus.com/" target="_blank">
                        C++
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="leftOne">
                <h1>{t("Educational Experience")}</h1>
                <div>
                  <p>
                    {t(
                      "I am currently a G10 high schooler in Basis International School Park Lane Harbor.",
                    )}
                  </p>
                  <p>{t("I have taken the following AP courses:")}</p>
                  <ul className="ap">
                    <li>{t("AP Macroeconomics:")} 5</li>
                    <li>{t("AP Microeconomics:")} 5</li>
                    <li>{t("AP Physics 1:")} 5</li>
                    <li>{t("AP World History:")} 4</li>
                    <li>
                      {t("AP Computer Science A:")} {t("Pending")}
                    </li>
                    <li>
                      {t("AP Calculus AB:")} {t("Pending")}
                    </li>
                    <li>
                      {t("AP Physics 2:")} {t("Pending")}
                    </li>
                    <li>
                      {t("AP European History:")} {t("Pending")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <h1>{t("Introduction")}</h1>
            <p>{t("IntroductionText")}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Notes;
