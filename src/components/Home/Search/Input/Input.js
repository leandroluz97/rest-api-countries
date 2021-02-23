import React from "react"
import { IoMdSearch } from "react-icons/io"
import styles from "./Input.module.css"
const Input = (props) => {
  return (
    <div className={styles.input}>
      <IoMdSearch size={20} color={"#848484"} />
      <input
        type='text'
        name='text'
        id=''
        className={styles.input__input}
        placeholder='Search for a country'
        onChange={(e) => props.handleSearch(e)}
      />
    </div>
  )
}

export default Input
