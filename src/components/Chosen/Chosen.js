import React from "react"
import styles from "./Chosen.module.css"
const Chosen = (props) => {
  return (
    <>
      <section className={styles.chosen}>
        <div className={styles.chosen__container}>
          <div className={styles.chosen__contBtn}>
            <a href='#'> &larr; &nbsp; Back</a>
          </div>
          <div className={styles.chosen__wrapper}>
            <div className={styles.chosen__image}>
              <img src={props.country.flag} alt='chosen flag' />
            </div>
            <div className={styles.chosen__content}>
              <div className={styles.chosen__containerOne}>
                <h2 className={styles.chosen__name}>{props.country.name}</h2>
                <p className={styles.chosen__dataText}>
                  Native name: <span>{props.country.nativeName}</span>
                </p>
                <p className={styles.chosen__dataText}>
                  Population: <span>{props.country.population}</span>
                </p>
                <p className={styles.chosen__dataText}>
                  Region: <span>{props.country.region}</span>
                </p>
                <p className={styles.chosen__dataText}>
                  Sub Region: <span>{props.country.subregion}</span>
                </p>
                <p className={styles.chosen__dataText}>
                  Capital: <span>{props.country.capital}</span>
                </p>
              </div>
              <div className={styles.chosen__containerTwo}>
                <p className={styles.chosen__dataText}>
                  Top level Domain:
                  <span>{props.country.topLevelDomain[0]}</span>
                </p>
                <p className={styles.chosen__dataText}>
                  Currencies: <span>{props.country.currencies[0].name}</span>
                </p>
                <p className={styles.chosen__dataText}>
                  Languages: <span>{props.country.languages[0].name}</span>
                  <span> {props.country.languages[1].name}</span>
                  <span> {props.country.languages[2].name}</span>
                </p>
              </div>
              <div className={styles.chosen__containerThree}>
                <p className={styles.chosen__dataText}>Border Countries:</p>
                <div className={styles.chosen__links}>
                  <a href='#' className={styles.chosen__link}>
                    {props.country.borders[0]}
                  </a>
                  <a href='#' className={styles.chosen__link}>
                    {props.country.borders[1]}
                  </a>
                  <a href='#' className={styles.chosen__link}>
                    {props.country.borders[2]}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Chosen
