import React from 'react'
import styles from './sidebar.module.scss'
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.hamburger_icon}>
      <img src="https://img.icons8.com/arcade/64/null/menu.png"/>
      </div>
    </div>
  )
}

export default Sidebar