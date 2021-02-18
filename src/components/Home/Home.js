import React from "react"
import styles from "./Home.module.css"
import Countries from "./Countries/Countries"
import Search from "./Search/Search"
const Home = (props) => {
  return (
    <section className={styles.home}>
      <Search />
      <Countries countries={props.countries} />
    </section>
  )
}

export default Home
