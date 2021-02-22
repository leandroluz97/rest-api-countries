import React from "react"
import styles from "./Home.module.css"
import Countries from "./Countries/Countries"
import Search from "./Search/Search"
const Home = (props) => {
  const handleRoute = (name) => {
    props.history.push(`/${name}`)
    //props.handleCountry(name)
  }
  return (
    <section className={styles.home}>
      <Search />
      <Countries countries={props.countries} clicked={handleRoute} />
    </section>
  )
}

export default Home
