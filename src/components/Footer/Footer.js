import React from 'react'
import './footer.css'
import { SiJavascript, SiNodeDotJs, SiHtml5, SiCss3, SiReact, SiNpm, SiMongodb, SiHeroku } from 'react-icons/si'
import { VscServerProcess } from 'react-icons/vsc'
import { DiDatabase } from 'react-icons/di'
import { AiOutlineApi, AiOutlineGithub } from 'react-icons/ai'

function Footer() {
  return (
    <div className="footer footer-container col-12">
      <SiJavascript className="footer-icons icon1 col-sm-6 col-md-1" />
      <SiReact className="footer-icons icon2 col-sm-6 col-md-1" />
      <SiHtml5 className="footer-icons icon3 col-sm-6 col-md-1" />
      <SiCss3 className="footer-icons icon4 col-sm-6 col-md-1" />
      <SiNodeDotJs className="footer-icons icon5 col-sm-6 col-md-1" />
      <VscServerProcess className="footer-icons icon6 col-sm-6 col-md-1" />
      <DiDatabase className="footer-icons icon7 col-sm-6 col-md-1" />
      <SiMongodb className="footer-icons icon8 col-sm-6 col-md-1" />
      <AiOutlineApi className="footer-icons icon9 col-sm-6 col-md-1" />
      <SiHeroku className="footer-icons icon10 col-sm-6 col-md-1" />
      <AiOutlineGithub className="footer-icons icon11 col-sm-6 col-md-1" />
      <SiNpm className="footer-icons icon2 col-sm-6 col-md-1" />
    </div>
  )
}

export default Footer