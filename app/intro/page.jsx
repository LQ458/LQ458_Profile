"use client";
import { useRef } from "react";
import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
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
      <motion.div
        className="header-container"
        animate={{ x: "3.5rem" }}
        transition={{
          ease: "linear",
          duration: 2,
          x: { duration: 2 },
        }}
      >
        <div className="icon-container">
          <IonIcon
            icon={person}
            style={{ fontSize: "4rem" }}
            className="icon"
          />
        </div>
        <div className="Content">LQ458 Profile</div>
        <motion.a className="cn" href="/404" whileHover={{ scale: 1.2 }}>
          中文版网站/Chinese Version
        </motion.a>
      </motion.div>

      <div className="background-shapes">
        <motion.div
          animate={{ y: -30 }}
          transition={{
            ease: "linear",
            duration: 1,
            y: { duration: 2 },
          }}
        >
          <a href="https://github.com/" target="_blank">
            <IonIcon
              icon={logoGithub}
              style={{ fontSize: "4rem", color: "#ed00c5" }}
            />
          </a>
        </motion.div>
        <motion.div
          animate={{ y: -50 }}
          transition={{
            ease: "linear",
            duration: 1,
            y: { duration: 2 },
          }}
        >
          <a href="https://nodejs.org/en/" target="_blank">
            <IonIcon
              icon={logoNodejs}
              style={{ fontSize: "4rem", color: "#6aefee" }}
            />
          </a>
        </motion.div>

        <motion.div
          animate={{ y: -70 }}
          transition={{
            ease: "linear",
            duration: 1,
            y: { duration: 2 },
          }}
        >
          <a href="https://css3.com/" target="_blank">
            <IonIcon
              icon={logoCss3}
              style={{ fontSize: "4rem", color: "#ed00c5" }}
            />
          </a>
        </motion.div>

        <motion.div
          animate={{ y: -90 }}
          transition={{
            ease: "linear",
            duration: 1,
            y: { duration: 2 },
          }}
        >
          <a
            href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
            target="_blank"
          >
            <IonIcon
              icon={logoHtml5}
              style={{ fontSize: "4rem", color: "#6aefee" }}
            />
          </a>
        </motion.div>

        <motion.div
          animate={{ y: -70 }}
          transition={{
            ease: "linear",
            duration: 1,
            y: { duration: 2 },
          }}
        >
          <a href="https://vuejs.org/" target="_blank">
            <IonIcon
              icon={logoVue}
              style={{ fontSize: "4rem", color: "#ed00c5" }}
            />
          </a>
        </motion.div>

        <motion.div
          animate={{ y: -50 }}
          transition={{
            ease: "linear",
            duration: 1,
            y: { duration: 2 },
          }}
        >
          <a href="https://www.python.org/" target="_blank">
            <IonIcon
              icon={logoPython}
              style={{ fontSize: "4rem", color: "#6aefee" }}
            />
          </a>
        </motion.div>

        <motion.div
          animate={{ y: -30 }}
          transition={{
            ease: "linear",
            duration: 1,
            y: { duration: 2 },
          }}
        >
          <a href="https://react.dev/" target="_blank">
            <IonIcon
              icon={logoReact}
              style={{ fontSize: "4rem", color: "#ed00c5" }}
            />
          </a>
        </motion.div>

        <motion.div
          animate={{ y: -50 }}
          transition={{
            ease: "linear",
            duration: 1,
            y: { duration: 2 },
          }}
        >
          <a href="https://vercel.com/" target="_blank">
            <IonIcon
              icon={logoVercel}
              style={{ fontSize: "4rem", color: "#6aefee" }}
            />
          </a>
        </motion.div>

        <motion.div
          animate={{ y: -70 }}
          transition={{
            ease: "linear",
            duration: 1,
            y: { duration: 2 },
          }}
        >
          <a href="https://angular.io/" target="_blank">
            <IonIcon
              icon={logoAngular}
              style={{ fontSize: "4rem", color: "#ed00c5" }}
            />
          </a>
        </motion.div>

        <motion.div
          animate={{ y: -90 }}
          transition={{
            ease: "linear",
            duration: 1,
            y: { duration: 2 },
          }}
        >
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            <IonIcon
              icon={logoJavascript}
              style={{ fontSize: "4rem", color: "#6aefee" }}
            />
          </a>
        </motion.div>
      </div>

      <div className="profile">
        <h1 className="pTitle">Yihao Qin (Nickname: Leo)</h1>
        <p className="pContent">
          Hii! I am a high school student currently studying in Basis
          International School Park Lane Harbor in Huizhou, China.
        </p>
      </div>

      <div className="link-grid">
        <motion.a
          href="https://github.com/LQ458"
          className="link-item"
          animate={{ x: "25.5vw" }}
          transition={{
            ease: "linear",
            x: { duration: 2 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <h2 className="link-title">My Github</h2>
          <p className="link-description">
            Find me through github by clicking this tab (LQ458).
          </p>
        </motion.a>

        <motion.a
          href="/notes"
          className="link-item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: "36vh" }}
          transition={{
            ease: "linear",
            y: { duration: 2 },
          }}
        >
          <h2 className="link-title">LQ Notes</h2>
          <p className="link-description">
            Find in-depth information about me and my studing notes.
          </p>
        </motion.a>

        <motion.a
          href="/news"
          className="link-item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: "36vh" }}
          transition={{
            ease: "linear",
            y: { duration: 2 },
          }}
        >
          <h2 className="link-title">News</h2>
          <p className="link-description">
            Always catch up with my latest projects and development news.
          </p>
        </motion.a>

        <motion.a
          href="/life"
          className="link-item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ x: "-25.5vw" }}
          transition={{
            ease: "linear",
            x: { duration: 2 },
          }}
        >
          <h2 className="link-title">LQ Life</h2>
          <p className="link-description">
            Find more interesting aspects about me in this block.
          </p>
        </motion.a>
      </div>
      <footer>
        <motion.div>
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
        </motion.div>
      </footer>
    </body>
  );
};

export default Intro;
