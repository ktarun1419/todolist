import React from "react";
import styles from "./navbar.module.scss";
import GoogleSignin from "../../login/googleSignin";
const Navbar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.left_container}>
          <div className={styles.svg}>
            <img src="https://img.icons8.com/nolan/64/speech-bubble.png" />
          </div>
          <div className={styles.logoName}>TodoList</div>
        </div>
        <div className={styles.right_container}>
          <GoogleSignin />
          <div className={styles.svg}>
        
          </div>
         {/* <div className={styles.logoName}>Chatroom</div> */}
        </div>
        {/* <div className={styles.right_container}>
          <div className={styles.svg}>
            <img src="https://img.icons8.com/ios-filled/50/000000/gender-neutral-user.png" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
