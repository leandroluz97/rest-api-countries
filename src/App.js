import axios from "axios"
import React, { useState, useEffect } from "react"
import "./App.css"
import Axios from "./Utils/axios"
import Chosen from "./components/Chosen/Chosen"
import Spinner from "./components/UI/Spinner"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import { Switch, Route } from "react-router-dom"
import Search from "./components/Home/Search/Search"

const App = (props) => {
  const [countries, setCountries] = useState([])
  const [filtered, setFiltered] = useState("")
  const [chosenOne, setChoseOne] = useState()
  const [border, setBorder] = useState()

  //get all countries
  useEffect(() => {
    getAllCountry()
  }, [])

  function getAllCountry() {
    const axios = new Axios()
    axios.getAllCountries().then((all) => {
      let data = [...all.data]
      data.forEach((country) => {
        for (let key in country) {
          if (key === "population") {
            let valueNum = String(country[key])
            country[key] = valueNum.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
          }
        }
      })

      setCountries(data)
    })
  }
  function getAllRegion(e) {
    /*
    if (e.target.value === "") {
      return false
    }
*/
    const axios = new Axios()
    let value = e.target.value
    if (value === "all") {
      getAllCountry()
    } else {
      axios.getRegion(value).then((all) => {
        setCountries(all.data)
      })
    }
  }

  const handleSearch = (e) => {
    setFiltered(e.target.value)
  }
  let countryFiltered = [...countries]
  if (countries) {
    countryFiltered = countries.filter((cntry) =>
      cntry.name.toLowerCase().includes(filtered.toLowerCase())
    )
  }

  return (
    <>
      <Header />
      <Switch>
        <Route
          exact
          path='/'
          render={(renderProps) =>
            countries.length !== 0 ? (
              <Home
                countries={countryFiltered}
                {...renderProps}
                handleSearch={handleSearch}
                getAllRegion={getAllRegion}
                filtered={filtered}
              />
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
        <Route
          path='/alpha/:alpha'
          render={(renderProps) => <Chosen {...renderProps} teste='test' />}
        ></Route>
      </Switch>
    </>
  )
}

export default App
