import React from "react"
import styles from "./Country.module.css"
const Country = (props) => {
  return (
    <div className={styles.card} onClick={() => props.clicked(props.info.name)}>
      <div className={styles.card__img}>
        <img src={props.info.flag} alt='flag' className={styles.card__flag} />
      </div>
      <div className={styles.card__content}>
        <h2 className={styles.card__title}>{props.info.name}</h2>
        <p className={styles.card__population}>
          Population:{" "}
          <span className={styles.card__res}>{props.info.population}</span>
        </p>
        <p className={styles.card__region}>
          Region: <span className={styles.card__res}>{props.info.region}</span>
        </p>
        <p className={styles.card__capital}>
          Capital:{" "}
          <span className={styles.card__res}>{props.info.capital}</span>
        </p>
      </div>
    </div>
  )
}

export default Country
