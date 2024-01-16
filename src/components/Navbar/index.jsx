import React from 'react'
import classes from "./style.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const index = () => {
  return (
    <>
    {/* Navbar */}
    <div className={classes["navbar"]}>
        <div className={classes["container"]}>
          <div className={classes["nav-link"]}>
            <a className={classes["logo"]} href="#">
              Where in the world?
            </a>
            <a className={classes["dark-mode"]}>
              <FontAwesomeIcon className={classes["icon-dark"]} icon={faMoon} />
              Dark Mode
            </a>
          </div>
        </div>
      </div>
      {/* End Navbar */}
    </>
  )
}

export default index