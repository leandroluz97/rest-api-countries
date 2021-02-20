import React from "react"
import styles from "./Home.module.css"
import Countries from "./Countries/Countries"
import Search from "./Search/Search"
const Home = (props) => {
  //handle new country route
  const handleCountry = (name) => {
    props.history.push(`/${name}`)
  }
  return (
    <section className={styles.home}>
      <Search />
      <Countries countries={props.countries} clicked={handleCountry} />
    </section>
  )
}

export default Home
