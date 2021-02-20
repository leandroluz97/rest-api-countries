import React from "react"
import styles from "./Select.module.css"
const Select = () => {
  return (
    <div className={styles.select__container}>
      <select name='region' className={styles.select}>
        <option value='africa'>Africa</option>
        <option value='america'>America</option>
        <option value='asia'>Asia</option>
        <option value='europe'>Europe</option>
        <option value='oceania'>Oceania</option>
      </select>
    </div>
  )
}

export default Select
