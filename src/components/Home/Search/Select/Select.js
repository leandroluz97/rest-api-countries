import React from "react"
import styles from "./Select.module.css"
const Select = (props) => {
  return (
    <div className={styles.select__container}>
      <select
        name='region'
        className={styles.select}
        onChange={(e) => props.getAllRegion(e)}
      >
        <option value='all'>Search by Region</option>
        <option value='africa'>Africa</option>
        <option value='americas'>America</option>
        <option value='asia'>Asia</option>
        <option value='europe'>Europe</option>
        <option value='oceania'>Oceania</option>
      </select>
    </div>
  )
}

export default Select
