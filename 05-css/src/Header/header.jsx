import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <div>
      <h2 className={styles.header}>This is a Header</h2>
      <button className={styles.hbtn}>Click Me</button>
    </div>
  )
}

export default Header