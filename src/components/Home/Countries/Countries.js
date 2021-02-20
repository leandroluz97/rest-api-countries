import React from "react"
import Country from "./Country/Country"
import styles from "./Countries.module.css"
const Countries = (props) => {
  return (
    <section className={styles.cards}>
      <div className={styles.card__container}>
        <div className={styles.card__wrapper}>
          {props.countries.map((country) => (
            <Country
              info={country}
              key={country.name}
              clicked={props.clicked}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Countries
