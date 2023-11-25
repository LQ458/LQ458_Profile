'use client'
import { useState } from 'react';
import React from 'react';
import { motion } from "framer-motion"
import { IonIcon } from "@ionic/react"
import axios from 'axios';
import {person} from "ionicons/icons"
import {TailSpin} from "react-loader-spinner";
import {logoGithub,logoNodejs,logoCss3,logoHtml5,logoVue,logoReact,logoAngular,logoPython,logoJavascript,logoVercel} from "ionicons/icons"
import '../src/intro.css';

const Intro = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [note,setNote] = useState('')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  const [message,setMessage] = useState('')
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      setLoading(true);
    const response = await axios.post('/api/message', {
      name: name,
      email: email,
      suggestion: suggestion,
      note: note
    });
    setMessage(response.data.message);
    setLoading(false);
  } catch (error) {
      setLoading(false);
      setError(true);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
  }
  }
  return (
    <body>
        
      <motion.div className="header-container" animate={{ x: 50 }}
  transition={{
    ease: "linear",
    duration: 2,
    x: { duration: 1 }
  }}>       
  <IonIcon
            icon={person}
            style={{ fontSize: "4rem", }}
            className='icon'
          />
          <div className="Content">LQ458 Profile</div>
      </motion.div>

      <div className="background-shapes">
        <motion.div animate={{ y: -30 }}
  transition={{
    ease: "linear",
    duration: 2,
    y: { duration: 1 }
  }}>
      <IonIcon
            icon={logoGithub}
            style={{ fontSize: "4rem", color: "#ed00c5"}}
          />
          </motion.div>
          <motion.div animate={{ y: -50 }}
  transition={{
    ease: "linear",
    duration: 2,
    y: { duration: 1 }
  }}>
            <IonIcon
            icon={logoNodejs}
            style={{ fontSize: "4rem", color: "#6aefee"}}
          />
          </motion.div>
          
          <motion.div animate={{ y: -70 }}
  transition={{
    ease: "linear",
    duration: 2,
    y: { duration: 1 }
  }}>
            <IonIcon
            icon={logoCss3}
            style={{ fontSize: "4rem", color: "#ed00c5"}}
          />
          </motion.div>

        <motion.div animate={{ y: -90 }}
  transition={{
    ease: "linear",
    duration: 2,
    y: { duration: 1 }
  }}>
            <IonIcon
            icon={logoHtml5}
            style={{ fontSize: "4rem", color: "#6aefee"}}
          />
          </motion.div>
          

          <motion.div animate={{ y: -70 }}
  transition={{
    ease: "linear",
    duration: 2,
    y: { duration: 1 }}}>
            <IonIcon
            icon={logoVue}
            style={{ fontSize: "4rem", color: "#ed00c5"}}
          />
          </motion.div>
          
          <motion.div animate={{ y: -50 }}
  transition={{
    ease: "linear",
    duration: 2,
    y: { duration: 1 }}}>
    <IonIcon
            icon={logoPython}
            style={{ fontSize: "4rem", color: "#6aefee"}}
          /></motion.div>
          
          <motion.div animate={{ y: -30 }}
  transition={{
    ease: "linear",
    duration: 2,
    y: { duration: 1 }}}>
        <IonIcon
            icon={logoReact}
            style={{ fontSize: "4rem", color: "#ed00c5"}}
          />
          </motion.div>
          
          <motion.div animate={{ y: -50 }}
  transition={{
    ease: "linear",
    duration: 2,
    y: { duration: 1 }}}>
        <IonIcon
            icon={logoVercel}
            style={{ fontSize: "4rem", color: "#6aefee"}}
          />
          </motion.div>
          
          <motion.div animate={{ y: -70 }}
  transition={{
    ease: "linear",
    duration: 2,
    y: { duration: 1 }}}>
            <IonIcon
            icon={logoAngular}
            style={{ fontSize: "4rem", color: "#ed00c5"}}
          />
          </motion.div>
          
          <motion.div animate={{ y: -90 }}
  transition={{
    ease: "linear",
    duration: 2,
    y: { duration: 1 }}}>
        <IonIcon
            icon={logoJavascript}
            style={{ fontSize: "4rem", color: "#6aefee"}}
          />
          </motion.div>
          
      </div>

      <div className="link-grid">
        <motion.a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="link-item"
          animate={{ x: 415 }}
  transition={{
    ease: "linear",
    x: { duration: 3.5 }}}
          whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
        >
          <h2 className="link-title">Docs</h2>
          <p className="link-description">Find in-depth information about Next.js features and API.</p>
        </motion.a>

        <motion.a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="link-item"
          whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    animate={{ y: 270 }}
  transition={{
    ease: "linear",
    y: { duration: 3.5 }}}
        >
          <h2 className="link-title">Doc</h2>
          <p className="link-description">Find in-depth information about Next.js features and API.</p>
        </motion.a>

        <motion.a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="link-item"
          whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    animate={{ y: 270 }}
  transition={{
    ease: "linear",
    y: { duration: 3.5 }}}
        >
          <h2 className="link-title">Do</h2>
          <p className="link-description">Find in-depth information about Next.js features and API.</p>
        </motion.a>

        <motion.a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="link-item"
          whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    animate={{ x: -415 }}
  transition={{
    ease: "linear",
    x: { duration: 3.5 }}}
        >
          <h2 className="link-title">D</h2>
          <p className="link-description">Find in-depth information about Next.js features and API.</p>
        </motion.a>
      </div>
      <footer>
        <motion.div>
        <form onSubmit={handleSubmit}>
              <h2 className="msg">Contact Me:</h2>
              <div className="inputbox">
                <input
                  type="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Your Name*'
                />
              </div>
              <div className="inputbox">
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Your Email*'
                />
              </div>
              <div className="inputbox">
                <input
                  type="suggestion"
                  onChange={(e) => setSuggestion(e.target.value)}
                  required
                  placeholder='What Can I help You With?'
                />
              </div>
              <div className="inputbox">
                <input
                  type="note"
                  onChange={(e) => setNote(e.target.value)}
                  required
                  placeholder='Leave a Message...'
                />
              </div>
              <button type="submit" className='sub' disabled={loading}>
              {loading && (
    <>
      <TailSpin type="ThreeDots" color="black" height={20} width={40} style={{ marginRight: '5px' }} />
      <span>Loading...</span>
    </>
  )}
  {!loading && 'Send'}
                </button>
              <div className="register">
                {error && (<p className='error'>Internal Server Error</p>)}
                <br />
              </div>
            </form>
        </motion.div>
      </footer>
    </body>
  );
}

export default Intro;