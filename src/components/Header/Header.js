import React from "react"
import styles from "./Header.module.css"
import { VscColorMode } from "react-icons/vsc"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__wrapper}>
          <a href='#' className={styles.header__logo}>
            Where in the world?
          </a>
          <div className={styles.header__darkmode}>
            <VscColorMode size={20} />
            <p className={styles.header__txt}>Dark Mode</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
