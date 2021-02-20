import axios from "axios"
import React, { useState, useEffect } from "react"
import "./App.css"
import Axios from "./Utils/axios"
import Chosen from "./components/Chosen/Chosen"
import Spinner from "./components/UI/Spinner"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import { Switch, Route } from "react-router-dom"

const App = () => {
  const [countries, setCountries] = useState()

  //get all countries
  useEffect(() => {
    getAllCountry()
  }, [])

  function getAllCountry() {
    const axios = new Axios()
    axios.getAllCountries().then((all) => {
      setCountries(all.data)
    })
  }

  let allCountries = null
  let country = null

  if (countries) {
    allCountries = <Home countries={countries} />
  } else {
    allCountries = <Spinner />
  }

  /*          {countries ? <Home countries={countries} /> : <Spinner />} */
  return (
    <>
      <Header />
      <Switch>
        <Route
          exact
          path='/'
          render={(renderProps) =>
            countries ? (
              <Home countries={countries} {...renderProps} />
            ) : (
              <Spinner />
            )
          }
        ></Route>
        <Route
          exact
          path='/:name'
          render={(renderProps) => <Chosen {...renderProps} />}
        ></Route>
      </Switch>
    </>
  )
}

export default App
