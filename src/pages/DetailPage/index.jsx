import React from "react";

import classes from "./style.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";
import Navbar from "../../components/Navbar";

import FlagDetail from "../../assets/flag-detail.png";

const index = () => {
  return (
    <>
      <Navbar />

      <div className={classes["detail-list"]}>
        <div className={classes["container"]}>
          <div className={classes["navigate"]}>
            <a href="" className={classes["back-btn"]}>
              <FontAwesomeIcon icon={faArrowLeft} /> Back
            </a>
          </div>

          <Stack className={classes["flag-detail"]} direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" alignItems="center">
            <div>
              <img src={FlagDetail} alt="" />
            </div>
            <div>
              <div className={classes["head-flag"]}>
                <h1>Belgium</h1><br />
              </div>
              <div className={classes["flag-info"]}>
                <div className={classes["sub-info"]}>
                  <p className={classes["country-info"]}>Native Name: Belgie</p>
                  <p className={classes["country-info"]}>Population: 331,076,485</p>
                  <p className={classes["country-info"]}>Region: Europe</p>
                  <p className={classes["country-info"]}>Sub Region: Western Europe</p>
                  <p className={classes["country-info"]}>Capital: Brussels</p>
                </div>

                <div className={classes["sub-info"]}>
                  <p className={classes["country-info"]}>Top Level Domain: .be</p>
                  <p className={classes["country-info"]}>Currencies: Euro</p>
                  <p className={classes["country-info"]}>Capital: Brussels</p>
                  <p className={classes["country-info"]}>Languages: Languages: Dutch, French, Eerman</p>
                </div>
              </div>

              <div className={classes["border-country"]}>
                <div>Border Countries:</div>
                <div className={classes["border-item"]}>
                    <a href="">France</a>
                    <a href="">Germany</a>
                    <a href="">Netherlands</a>
                </div>
              </div>
            </div>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default index;
