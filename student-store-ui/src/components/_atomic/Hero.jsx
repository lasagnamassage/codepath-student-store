import * as React from "react"
import image from '../../assets/hero.gif'


export default function Hero() {
  return (
    <div className="hero">
      <span className="intro">Welcome, shopper</span>
      <br/>
      <img className="hero-img" alt="logo" src={image} />
    </div>
  )
}
