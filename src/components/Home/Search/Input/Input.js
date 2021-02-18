import React from "react"
import { IoMdSearch } from "react-icons/io"
import styles from "./Input.module.css"
const Input = () => {
  return (
    <div className={styles.input}>
      <IoMdSearch size={20} color={"#848484"} />
      <input
        type='text'
        name='text'
        id=''
        className={styles.input__input}
        placeholder='Search for a country'
      />
    </div>
  )
}

export default Input
