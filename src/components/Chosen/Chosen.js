import React, { useEffect, useState } from "react"
import styles from "./Chosen.module.css"
import Axios from "../../Utils/axios"
import Spinner from "../UI/Spinner"
import { Link } from "react-router-dom"

const Chosen = (props) => {
  const [country, setCountry] = useState()
  const [border, setborder] = useState()

  //Chosen countries
  useEffect(() => {
    const pathname = props.history.location.pathname
    let path
    if (!pathname.includes("alpha")) {
      path = pathname.slice(1)
      getCountry(path)
    }
  }, [])

  //handle border reload
  useEffect(() => {
    const pathname = props.history.location.pathname
    let path = pathname.slice(-3)

    setborder(path)

    if (pathname.includes("alpha")) {
      path = pathname.slice(-3)
      getBorder(path)
    }
  }, [])

  //Refactor response from server
  function refactorData(response) {
    let refactoredData

    for (const key of response) {
      refactoredData = key
    }
    for (const key in refactoredData) {
      if (Array.isArray(refactoredData[key])) {
        refactoredData[key] = { ...refactoredData[key] }
      }
    }

    return refactoredData
  }
  /*
  //handle new country route
  const handleCountry = (name) => {
    getCountry(name)
  }
  */

  //handle country name route
  function getCountry(name) {
    const axios = new Axios()
    axios.getOne(name).then((all) => {
      //refactored data
      const refactored = refactorData(all.data)
      setCountry(refactored)
    })
  }
  //handle country name route
  function getBorder(name) {
    const axios = new Axios()
    axios.getAlpha(name).then((all) => {
      //refactored data

      const refactored = refactorData([all.data])
      setCountry(refactored)
    })
  }

  const handleNewRoute = (route) => {
    getBorder(route)
  }
  const handleGoBack = () => {
    props.history.push("/")
  }

  const arrayToObj = (identifier) => {
    let aux = []

    for (const key in country[identifier]) {
      aux.push(country[identifier][key])
    }

    if (identifier === "borders") {
      aux = aux.map((border, index) => (
        <Link
          to={`/alpha/${border}`}
          key={index}
          className={styles.chosen__link}
          onClick={() => handleNewRoute(border)}
        >
          {border}
        </Link>
      ))
    } else {
      aux = aux.map((item) => <span key={item}> {item.name}</span>)
    }

    return aux
  }
  let borders
  let languages
  if (country) {
    borders = arrayToObj("borders")
    languages = arrayToObj("languages")
  }

  return (
    <>
      {country ? (
        <section className={styles.chosen}>
          <div className={styles.chosen__container}>
            <div className={styles.chosen__contBtn}>
              <button onClick={handleGoBack}> &larr; &nbsp; Back</button>
            </div>
            <div className={styles.chosen__wrapper}>
              <div className={styles.chosen__image}>
                <img src={country.flag} alt='chosen flag' />
              </div>
              <div className={styles.chosen__content}>
                <div className={styles.chosen__containerOne}>
                  <h2 className={styles.chosen__name}>{country.name}</h2>
                  <p className={styles.chosen__dataText}>
                    Native name: <span>{country.nativeName}</span>
                  </p>
                  <p className={styles.chosen__dataText}>
                    Population: <span>{country.population}</span>
                  </p>
                  <p className={styles.chosen__dataText}>
                    Region: <span>{country.region}</span>
                  </p>
                  <p className={styles.chosen__dataText}>
                    Sub Region: <span>{country.subregion}</span>
                  </p>
                  <p className={styles.chosen__dataText}>
                    Capital: <span>{country.capital}</span>
                  </p>
                </div>
                <div className={styles.chosen__containerTwo}>
                  <p className={styles.chosen__dataText}>
                    Top level Domain:
                    <span>{country.topLevelDomain[0]}</span>
                  </p>
                  <p className={styles.chosen__dataText}>
                    Currencies: <span>{country.currencies[0].name}</span>
                  </p>
                  <p className={styles.chosen__dataText}>
                    Languages: {languages}
                    {/*<span>{country.languages[0].name}</span>*/}
                    {/*<span> {country.languages[1].name}</span>
                    <span> {country.languages[2].name}</span>*/}
                  </p>
                </div>
                <div className={styles.chosen__containerThree}>
                  <p className={styles.chosen__dataText}>Border Countries:</p>
                  <div className={styles.chosen__links}>{borders}</div>
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
