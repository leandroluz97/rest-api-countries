import axios from "axios"
import React, { useState, useEffect } from "react"
import "./App.css"
import Axios from "./Utils/axios"

import Spinner from "./components/UI/Spinner"
import Header from "./components/Header/Header"

import Home from "./components/Home/Home"

const App = () => {
  const [countries, setCountries] = useState()

  //get all countries
  useEffect(() => {
    const axios = new Axios()
    axios.getAllCountries().then((all) => {
      setCountries(all.data)
    }, [])
  })

  let allCountries = null

  if (countries) {
    allCountries = <Home countries={countries} />
  } else {
    allCountries = <Spinner />
  }

  return (
    <div>
      <Header />

      {allCountries}
    </div>
  )
}

export default App
