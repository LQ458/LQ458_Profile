/* eslint-disable @next/next/no-img-element */
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
  const current = sessionStorage.getItem("current") || "start";
  let lastCurrent = sessionStorage.getItem("current");

  const setCurrent = (current) => {
    if (current !== lastCurrent) {
      sessionStorage.setItem("current", current);
      lastCurrent = current;
    }
  };
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
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
          {/* Start */}
          <div>
            <div
              onMouseEnter={() => setHover1(true)}
              onMouseLeave={() => setHover1(false)}
              onClick={() => setCurrent("start")}
              style={{ position: "relative", padding: "0", cursor: "pointer" }}
            >
              <p
                className={`hoverIcon ${current === "start" && "fix"} ${hover1 ? "hover1" : "hover2"}`}
              >
                #
              </p>
              <h1>{t("Start")}</h1>
            </div>
            <div>
              <h2>
                <a href="#intro" onClick={() => setCurrent("start")}>
                  {t("Introduction")}
                </a>
              </h2>
              <h2>
                <a href="#preview" onClick={() => setCurrent("start")}>
                  {t("Preview")}
                </a>
              </h2>
            </div>
          </div>
          {/* oasisforum */}
          <div>
            <div
              onMouseEnter={() => setHover2(true)}
              onMouseLeave={() => setHover2(false)}
              onClick={() => setCurrent("oasis")}
              style={{ position: "relative", padding: "0", cursor: "pointer" }}
            >
              <p
                className={`hoverIcon ${current === "oasis" && "fix"} ${hover2 ? "hover1" : "hover2"}`}
              >
                #
              </p>
              <h1>{t("Oasis Forum")}</h1>
            </div>
            <div>
              <h2>
                <a href="#oasisOverview" onClick={() => setCurrent("oasis")}>
                  {t("Overview")}
                </a>
              </h2>
              <h2>
                <a href="#oasisTechUse" onClick={() => setCurrent("oasis")}>
                  {t("Tech Used")}
                </a>
              </h2>
              <h2>
                <a href="#oasisFeatures" onClick={() => setCurrent("oasis")}>
                  {t("Features")}
                </a>
              </h2>
            </div>
          </div>
        </div>
        <div className="noteRight">
          <div className="left">
            {/* start */}
            {current === "start" && (
              <>
                <div className="leftOnes">
                  <div className="leftOne">
                    <a
                      name="intro"
                      style={{ position: "absolute", top: "-77px" }}
                    />
                    <h1>{t("Introduction")}</h1>
                  </div>
                  <div className="leftOne">
                    <h2>{t("My Tech Stack")}</h2>
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
                    <h2>{t("Educational Experience")}</h2>
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
                <div className="leftOnes">
                  <div className="leftOne">
                    <a
                      name="preview"
                      style={{ position: "absolute", top: "-77px" }}
                    />
                    <h1>{t("Preview")}</h1>
                  </div>
                  <div className="leftOne">
                    <h2>{t("Github Stats")}</h2>
                    <img
                      src="https://camo.githubusercontent.com/6469f83beba11a5dcadee51853551b130c3fb07da3516e5c2ea069388ee67427/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d6c7134353826636f756e745f707269766174653d747275652673686f775f69636f6e733d74727565267468656d653d7261646963616c"
                      alt="stats"
                    />
                  </div>
                  <div className="leftOne">
                    <h2>{t("Recent Projects")}</h2>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <a href="#oasisOverview" className="projectPre">
                        {t("Oasis Forum")}
                      </a>
                      <a href="#floraOverview" className="projectPre">
                        {t("BIPH Flora")}
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
            {/* oasis */}
            {current === "oasis" && (
              <>
                <div className="leftOnes">
                  <div className="leftOne">
                    <a
                      name="oasisOverview"
                      style={{ position: "absolute", top: "-77px" }}
                    />
                    <h1>{t("Overview")}</h1>
                    <p>
                      {t(
                        "Oasis forum is a community-driven platform that encourages open discussions, fosters learning, and promotes respectful interactions. We believe in the power of diverse perspectives and the value of constructive contributions. Our guidelines are designed to ensure a safe and inclusive environment for everyone.",
                      )}
                    </p>
                  </div>
                  <div className="leftOne">
                    <h1>{t("Tech Used")}</h1>
                    <p>
                      {t(
                        "This website is build using nextjs + expressjs, with mongodb as its database.",
                      )}
                    </p>
                  </div>
                  <div className="leftOne">
                    <h1>{t("Features")}</h1>
                    <li>{t("Share posts and view posts collections")}</li>
                    <li>{t("Account management system with avatars")}</li>
                    <li>{t("Like and comment on posts")}</li>
                  </div>
                </div>
              </>
            )}
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
