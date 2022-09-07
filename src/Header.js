import React from "react"
import logo from "./logo-header.png"

export default function Header() {
    return (
        <header className="header">
          <img src={logo}></img>
          <h1 className="header-title">my travel journal.</h1>  
        </header>
    )
}