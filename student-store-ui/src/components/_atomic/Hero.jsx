import * as React from "react"
import image from '../../assets/hero.gif'


export default function Hero() {
  return (
    <div className="hero" style={{ textAlign: "center" }}>
      <span className="intro" style={{ fontSize: "50px", fontFamily: "monaco" }}>Welcome, shopper</span>
      <br/>
      <img className="hero-img" alt="logo" src={image} />
    </div>
  )
}
