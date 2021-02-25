import React from "react"
import Input from "./Input/Input"
import styles from "./Search.module.css"
import Select from "./Select/Select"
const Search = (props) => {
  return (
    <div className={styles.search}>
      <div className={styles.search__container}>
        <div className={styles.search__wrapper}>
          <Input handleSearch={props.handleSearch} filtered={props.filtered} />
          <Select getAllRegion={props.getAllRegion} />
        </div>
      </div>
    </div>
  )
}

export default Search
