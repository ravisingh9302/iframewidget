"use client"
import React, { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { RxCrossCircled } from "react-icons/rx";
import { VscRobot } from "react-icons/vsc";
import './style.css'


// export function Widgetoption(options) {
//   console.log("options", options)
// }

const defaultConfig = {
  Closebtncolor: "#ffffff",
  Height: "480px",
  Width: "360px",
  chatIconRight: '50px',
  chatIconBottom: '50px',
  chatIconbgColor: "#121D9E",
  chatIconcolor: '#ffffff',

  title: 'Customer Support',
  introMessage: 'Hello! How can we help you?',
  visitorPronoun: 'You',
  chatareabgcolor: "#000000",
  titlecolor: "#ffffff",
  titlebgcolor: "#121D9E",
  placeholderText: 'Type your message...',
  inputBgcolor: "#121D9E",
  inputTxtcolor: "#ffffff",
  displayMessageTime: true,
  chatTextboxcolor: "#ffffff",
  chatTextcolor: "#000000",
  chatTimecolor: "#B0B0B0",
  
}
// autoResponse: 'Looking for the available customer executive.',

export const Widget = ({ TelechatbotId, config, webserver }) => {
  const [isOpen, setOpen] = useState(false)
  const [host, sethost] = useState(null)
  useEffect(() => {
    sethost(window.location.host)
    return () => { }
  }, []);
  let configure = { ...defaultConfig, ...config }
  let iFrameSrc = "https://telechatbot-client.vercel.app"
  let info = { title: configure.title, introMessage: configure.introMessage, visitorPronoun: configure.visitorPronoun, chatareabgcolor: configure.chatareabgcolor, titlebgcolor: configure.titlebgcolor, titlecolor: configure.titlecolor, placeholderText: configure.placeholderText,inputBgcolor:configure.inputBgcolor,inputTxtcolor:configure.inputTxtcolor,displayMessageTime:configure.displayMessageTime,chatTextboxcolor:configure.chatTextboxcolor,chatTextcolor:configure.chatTextcolor,chatTimecolor:configure.chatTimecolor,  }
  let source = iFrameSrc + '?id=' + TelechatbotId + '&host=' + host + '&config=' + encodeURIComponent(JSON.stringify(info));

  return (
    <>
      {isOpen ?
        <div style={{ width: configure.width ? configure.width : "360px", height: configure.Height ? configure.Height : "480px", position: 'fixed', right: '10px', bottom: "10px", overflow: "hidden", borderRadius: '10px' }}>
          <div onClick={() => { setOpen(false) }} style={{ position: 'absolute', right: "5px", top: "5px", fontSize: "30px", cursor: 'pointer', color: configure.Closebtncolor }}>
            <RxCrossCircled />
          </div>
          <iframe src={webserver ? webserver : source}
            width='100%'
            height='100%'
            frameBorder='0' style={{ overflow: "hidden" }} >
          </iframe>
        </div> : <div onClick={() => { setOpen(true) }} id='pingeffect' style={{ position: "fixed", right: configure.chatIconRight, bottom: configure.chatIconBottom, cursor: 'pointer', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: configure.chatIconbgColor, display: 'flex', justifyItems: "center", justifyContent: "center", boxSizing: "border-box" }}>
          <div style={{ padding: "5px" }}>
            <VscRobot style={{ color: configure.chatIconcolor, width: '100%', height: '100%' }} />
          </div>
        </div>
      }
    </>
  );
};

Widget.propTypes = {
  TelechatbotId: PropTypes.string.isRequired,
  config: PropTypes.object,
  webserver: PropTypes.string,
};


