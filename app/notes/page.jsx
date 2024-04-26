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
              <h2>{t("Introduction")}</h2>
              <h2>{t("Preview")}</h2>
            </div>
          </div>
          <div>
            <h1>{t("Oasis Forum")}</h1>
            <div>
              <h2>{t("Overview")}</h2>
              <h2>{t("Tech Used")}</h2>
              <h2>{t("Features")}</h2>
            </div>
          </div>
        </div>
        <div className="noteRight">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, illum
          aspernatur. Molestias reiciendis repellendus deserunt officiis hic
          fugit quisquam, accusamus quod provident, recusandae sint consequatur
          suscipit, reprehenderit delectus fuga impedit.
        </div>
      </section>
    </main>
  );
};

export default Notes;
