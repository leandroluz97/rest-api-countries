import axios from "axios"

class Axios {
  constructor() {
    const instance = axios.create({
      baseURL: "https://restcountries.eu/rest/v2",
    })

    this.instance = instance
  }

  getAllCountries() {
    return this.instance.get("/all")
  }
  getOne() {
    return this.instance.get("/name/belgium")
  }
}

export default Axios
