import axios from "axios"
import React, { useState, useEffect } from "react"
import "./App.css"
import Axios from "./Utils/axios"
import Chosen from "./components/Chosen/Chosen"
import Spinner from "./components/UI/Spinner"
import Header from "./components/Header/Header"

import Home from "./components/Home/Home"

const App = () => {
  const [countries, setCountries] = useState()
  const [chosenOne, setChoseOne] = useState()

  //get all countries
  useEffect(() => {}, [])

  function getAllCountry() {
    const axios = new Axios()
    axios.getAllCountries().then((all) => {
      setChoseOne(all.data)
    })
  }
  function getOneCountry() {
    const axios = new Axios()
    axios.getOne().then((all) => {
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

  let allCountries = null
  let country = null
  /*
  if (countries) {
    allCountries = <Chosen chosenOne={chosenOne} />
  } else {
    allCountries = <Spinner />
  }
  */
  if (chosenOne) {
    country = <Chosen country={chosenOne} />
  } else {
    country = <Spinner />
  }

  return (
    <div>
      <Header />

      {country}
    </div>
  )
}

export default App
