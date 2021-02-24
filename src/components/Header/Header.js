import React from "react"
import styles from "./Header.module.css"
import { VscColorMode } from "react-icons/vsc"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__wrapper}>
          <Link to='/' className={styles.header__logo}>
            Where in the world?
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
