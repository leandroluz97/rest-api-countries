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
  getOne(name) {
    return this.instance.get(`/name/${name}`)
  }
  getAlpha(name) {
    return this.instance.get(`/alpha/${name}`)
  }
  getRegion(region) {
    return this.instance.get(`/region/${region}`)
  }
}

export default Axios
