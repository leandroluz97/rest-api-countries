import React, { useEffect, useState } from "react"
import styles from "./Chosen.module.css"
import Axios from "../../Utils/axios"
import Spinner from "../UI/Spinner"
import { Link } from "react-router-dom"
const Chosen = (props) => {
  const [chosenOne, setChoseOne] = useState()
  useEffect(() => {
    getOneCountry(props.match.params.name)
  }, [])

  function getOneCountry(name) {
    const axios = new Axios()
    axios.getOne(name).then((all) => {
      //refactor data
      let refactoredData
      for (const key of all.data) {
        refactoredData = key
      }
      for (const key in refactoredData) {
        if (Array.isArray(refactoredData[key])) {
          refactoredData[key] = { ...refactoredData[key] }
        }
      }

      setChoseOne(refactoredData)
    })
  }
  const handleGoBack = () => {
    props.history.goBack()
  }
  return (
    <>
      {chosenOne ? (
        <section className={styles.chosen}>
          <div className={styles.chosen__container}>
            <div className={styles.chosen__contBtn}>
              <Link onClick={handleGoBack}> &larr; &nbsp; Back</Link>
            </div>
            <div className={styles.chosen__wrapper}>
              <div className={styles.chosen__image}>
                <img src={chosenOne.flag} alt='chosen flag' />
              </div>
              <div className={styles.chosen__content}>
                <div className={styles.chosen__containerOne}>
                  <h2 className={styles.chosen__name}>{chosenOne.name}</h2>
                  <p className={styles.chosen__dataText}>
                    Native name: <span>{chosenOne.nativeName}</span>
                  </p>
                  <p className={styles.chosen__dataText}>
                    Population: <span>{chosenOne.population}</span>
                  </p>
                  <p className={styles.chosen__dataText}>
                    Region: <span>{chosenOne.region}</span>
                  </p>
                  <p className={styles.chosen__dataText}>
                    Sub Region: <span>{chosenOne.subregion}</span>
                  </p>
                  <p className={styles.chosen__dataText}>
                    Capital: <span>{chosenOne.capital}</span>
                  </p>
                </div>
                <div className={styles.chosen__containerTwo}>
                  <p className={styles.chosen__dataText}>
                    Top level Domain:
                    <span>{chosenOne.topLevelDomain[0]}</span>
                  </p>
                  <p className={styles.chosen__dataText}>
                    Currencies: <span>{chosenOne.currencies[0].name}</span>
                  </p>
                  <p className={styles.chosen__dataText}>
                    Languages: <span>{chosenOne.languages[0].name}</span>
                    {/*<span> {chosenOne.languages[1].name}</span>
                    <span> {chosenOne.languages[2].name}</span>*/}
                  </p>
                </div>
                <div className={styles.chosen__containerThree}>
                  <p className={styles.chosen__dataText}>Border Countries:</p>
                  <div className={styles.chosen__links}>
                    <a href='#' className={styles.chosen__link}>
                      {chosenOne.borders[0]}
                    </a>

                    {/*<a href='#' className={styles.chosen__link}>
                      {chosenOne.borders[1]}
                    </a>
                    <a href='#' className={styles.chosen__link}>
      {chosenOne.borders[2]
                    </a>}*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Spinner />
      )}
    </>
  )
}
export default Chosen
